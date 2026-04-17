import { personalPlans, businessPlans } from "@/lib/plans";

interface RecommendPlanProps {
  userType: "personal" | "business";
  devicesCount: number;
  needsWeb?: boolean;
  needsCommunications?: boolean;
  needsTracking?: boolean;
  needsScore?: boolean;
  billing?: "monthly" | "yearly";
  maxBudget?: number | null;
}

const planCapabilities: Record<string, string[]> = {
  "plans.personal.free.name": ["web", "communications", "score"],
  "plans.personal.pro.name": ["web", "communications", "tracking", "score"],
  "plans.personal.max.name": ["web", "communications", "tracking", "score"],

  "plans.business.startup.name": ["web", "communications", "score"],
  "plans.business.smePro.name": ["web", "communications", "score"],
  "plans.business.enterprise.name": [
    "web",
    "communications",
    "tracking",
    "score",
  ],
};

export function recommendPlan({
  userType,
  devicesCount,
  needsWeb = false,
  needsCommunications = false,
  needsTracking = false,
  needsScore = false,
  billing = "monthly",
  maxBudget = null,
}: RecommendPlanProps) {
  const allPlans =
    devicesCount > 8
      ? businessPlans
      : userType === "personal"
        ? personalPlans
        : businessPlans;

  const getPrice = (plan: any) =>
    billing === "monthly" ? plan.priceMonthly : plan.priceYearly;

  const requiredCapabilities: string[] = [];
  if (needsWeb) requiredCapabilities.push("web");
  if (needsCommunications) requiredCapabilities.push("communications");
  if (needsTracking) requiredCapabilities.push("tracking");
  if (needsScore) requiredCapabilities.push("score");

  const filteredPlans = allPlans.filter((plan: any) => {
    if (plan.devices < devicesCount) return false;

    const capabilities = planCapabilities[plan.name] || [];
    return requiredCapabilities.every((cap) => capabilities.includes(cap));
  });

  const candidates = filteredPlans.length > 0 ? filteredPlans : allPlans;

  const scored = candidates.map((plan: any) => {
    let score = 0;
    const capabilities = planCapabilities[plan.name] || [];
    const price = getPrice(plan);

    score += Math.min(plan.devices / devicesCount, 2);

    requiredCapabilities.forEach((cap) => {
      if (capabilities.includes(cap)) score += 1.5;
    });

    if (maxBudget !== null) {
      if (price === 0) score += 0.5;
      else if (price <= maxBudget) score += 1;
      else score -= 1;
    }

    return { plan, score, price };
  });

  scored.sort((a, b) =>
    b.score === a.score ? a.price - b.price : b.score - a.score,
  );

  return scored[0]?.plan || allPlans[0];
}
