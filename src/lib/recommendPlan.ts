import { personalPlans, businessPlans } from "@/lib/plans";

interface RecommendPlanProps {
  userType: "personal" | "business";
  devicesCount: number;
  needsPhishing?: boolean;
  needsDeviceScan?: boolean;
  needsAdvancedProtection?: boolean;
  needsPrioritySupport?: boolean;
  billing?: "monthly" | "yearly";
  maxBudget?: number | null;
}

export function recommendPlan({
  userType,
  devicesCount,
  needsPhishing = false,
  needsDeviceScan = false,
  needsAdvancedProtection = false,
  needsPrioritySupport = false,
  billing = "monthly",
  maxBudget = null,
}: RecommendPlanProps) {
  // ======= CHOIX DES PLANS SELON TYPE ET NOMBRE DE DEVICES =======
  let allPlans;
  if (devicesCount > 8) {
    // Si plus de 8 devices, on force les plans business
    allPlans = businessPlans;
  } else {
    // Sinon, on utilise le type choisi par l'utilisateur
    allPlans = userType === "personal" ? personalPlans : businessPlans;
  }

  // ======= PRIX SELON BILLING =======
  const getPrice = (plan: any) =>
    billing === "monthly" ? plan.priceMonthly : plan.priceYearly;

  // ======= LISTE DES FONCTIONNALITES REQUISES =======
  const requiredFeatures: string[] = [];
  if (needsPhishing)
    requiredFeatures.push(
      "Email phishing detection",
      "Email & phishing protection",
    );
  if (needsDeviceScan) requiredFeatures.push("Device security checks");
  if (needsAdvancedProtection) requiredFeatures.push("Fraud detection");
  if (needsPrioritySupport)
    requiredFeatures.push("Priority support", "Dedicated security team");

  // ======= FILTRAGE STRICT DES PLANS =======
  const filteredPlans = allPlans.filter((plan: any) => {
    if (plan.devices < devicesCount) return false;
    return requiredFeatures.every((f) => plan.features.includes(f));
  });

  // ======= SI AUCUN PLAN NE CORRESPOND, ON SCORE TOUS =======
  const candidates = filteredPlans.length > 0 ? filteredPlans : allPlans;

  const scored = candidates.map((plan: any) => {
    let score = 0;

    // Devices adequacy (max 2 points)
    score += Math.min(plan.devices / devicesCount, 2);

    // Bonus pour features optionnelles
    requiredFeatures.forEach((f) => {
      if (plan.features.includes(f)) score += 1;
    });

    // Bonus pour budget
    const price = getPrice(plan);
    if (maxBudget !== null && price > 0 && price <= maxBudget) score += 1;

    return { plan, score, price };
  });

  // ======= TRI PAR SCORE, PUIS PRIX CROISSANT =======
  scored.sort((a, b) =>
    b.score === a.score ? a.price - b.price : b.score - a.score,
  );

  return scored[0]?.plan || allPlans[0];
}
