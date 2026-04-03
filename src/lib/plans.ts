export const personalPlans = [
  {
    name: "Free",
    devices: 1,
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      "Limited link checks",
      "Manual email scan",
      "Phone verification",
    ],
    cta: "/auth",
    type: "secondary",
  },
  {
    name: "Personal Pro",
    devices: 3,
    priceMonthly: 9,
    priceYearly: 86,
    features: [
      "Unlimited link analysis",
      "Email phishing detection",
      "Device security checks",
      "Real-time alerts",
    ],
    cta: "/auth",
    type: "primary",
    highlight: true,
  },
  {
    name: "Personal Max",
    devices: 8,
    priceMonthly: 19,
    priceYearly: 182,
    features: ["All Personal Pro features", "Priority support"],
    cta: "/auth",
    type: "primary",
  },
];

export const businessPlans = [
  {
    name: "Startup",
    devices: 10,
    priceMonthly: 49,
    priceYearly: 470,
    features: [
      "Email & phishing protection",
      "Fraud detection",
      "Basic reporting",
    ],
    cta: "/contact",
    type: "secondary",
  },
  {
    name: "SME Pro",
    devices: 50,
    priceMonthly: 199,
    priceYearly: 1900,
    features: ["All Startup features", "Advanced reporting", "Team management"],
    cta: "/contact",
    type: "primary",
  },
  // {
  //   name: "Enterprise",
  //   devices: 100,
  //   priceMonthly: 0,
  //   priceYearly: 0,
  //   features: [
  //     "Full audits & compliance",
  //     "Custom integrations",
  //     "Dedicated security team",
  //   ],
  //   cta: "/contact",
  //   type: "primary",
  //   highlight: true,
  // },
];
