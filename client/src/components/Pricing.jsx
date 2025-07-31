import React from "react";
import { useTranslation } from "react-i18next";

function Pricing() {
  const { t } = useTranslation();
  const plans = t("pricing.plans", { returnObjects: true });

  return (
    <section
      id="pricing"
      className="py-20 px-6 bg-white text-center text-black"
    >
      <h2 className="text-4xl font-semibold mb-10">{t("pricing.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-medium mb-3">{plan.name}</h3>
            <p className="text-2xl font-bold">{plan.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 space-y-2 max-w-xl mx-auto text-sm text-gray-600">
        <p>{t("pricing.membership_note")}</p>
        <p>{t("pricing.refund_note")}</p>
        <p>{t("pricing.transfer_note")}</p>
      </div>
    </section>
  );
}

export default Pricing;
