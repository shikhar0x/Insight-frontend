"use client";

import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/month",
    description: "Perfect for exploring AI-powered investing.",
    features: [
      "5 AI Queries / day",
      "Basic Dashboard",
      "Watchlist",
      "Market News",
      "AI Stock Insights",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    description: "Unlock the full power of Insight AI.",
    features: [
      "Unlimited AI Queries",
      "Portfolio Analytics",
      "Advanced Risk Score",
      "Explainable AI",
      "Premium Market News",
      "Smart Alerts",
      "Priority Support",
    ],
    button: "Start Pro",
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#050816] py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-300 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Simple, Transparent Pricing
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Start for free and upgrade whenever you're ready to unlock
            unlimited AI-powered investment insights.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className={`relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-300
              ${
                plan.popular
                  ? "border-indigo-500 bg-white/10 shadow-[0_0_50px_rgba(99,102,241,0.25)]"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {/* Glow */}
              {plan.popular && (
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-500/20 blur-[100px]" />
              )}

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute right-6 top-6 rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold">
                  ⭐ Most Popular
                </div>
              )}

              <div className="relative p-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>

                <div className="mt-5 flex items-end gap-1">
                  <span className="text-5xl font-extrabold">
                    {plan.price}
                  </span>
                  <span className="mb-1 text-gray-400">
                    {plan.period}
                  </span>
                </div>

                <p className="mt-4 text-gray-400">
                  {plan.description}
                </p>

                <button
                  className={`group mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300
                  ${
                    plan.popular
                      ? "bg-indigo-600 hover:bg-indigo-500"
                      : "border border-white/10 bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {plan.button}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <div className="my-8 h-px bg-white/10" />

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <Check className="h-5 w-5 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-center gap-6 text-gray-400 md:flex-row"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            No hidden fees
          </div>

          <div className="hidden h-5 w-px bg-white/10 md:block" />

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            Cancel anytime
          </div>

          <div className="hidden h-5 w-px bg-white/10 md:block" />

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            Secure payments
          </div>
        </motion.div>
      </div>
    </section>
  );
}