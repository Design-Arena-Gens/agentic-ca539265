"use client";

import { useMemo, useState } from "react";

const navigationItems = [
  { label: "Platform", href: "#platform" },
  { label: "On/Off Ramps", href: "#on-off-ramps" },
  { label: "Compliance", href: "#compliance" },
  { label: "Pricing", href: "#pricing" },
  { label: "Developers", href: "#developers" },
];

const metrics = [
  { label: "Global settlement reach", value: "190+ countries" },
  { label: "License coverage", value: "42 regulatory frameworks" },
  { label: "Average settlement time", value: "<2 minutes" },
];

const featureCards = [
  {
    title: "Unified treasury cockpit",
    description:
      "Monitor all fiat and crypto balances, automate liquidity routing, and release funds with multi-signature controls in one interface.",
    points: ["Programmable rules engine", "Real-time reconciliation", "Audit-grade reports"],
  },
  {
    title: "Institution-grade compliance",
    description:
      "Leverage automated KYC, KYB, AML screening, and travel rule enforcement that adapts to each jurisdiction your customers operate in.",
    points: ["Integrated sanctions screening", "Travel Rule messaging", "Configurable risk tiers"],
  },
  {
    title: "Instant network connectivity",
    description:
      "Connect to domestic payment rails, SEPA, SWIFT, and top-tier crypto liquidity venues with a single, well-documented API surface.",
    points: ["SDKs for web and mobile", "24/7 operations desk", "99.995% API uptime SLO"],
  },
];

const rails = [
  { name: "SEPA Instant", type: "EUR", latency: "17s avg" },
  { name: "Faster Payments", type: "GBP", latency: "41s avg" },
  { name: "FedNow", type: "USD", latency: "58s avg" },
  { name: "USDC on Stellar", type: "Digital dollar", latency: "3s avg" },
  { name: "USDT on Tron", type: "Digital dollar", latency: "4s avg" },
  { name: "Lightning Network", type: "BTC", latency: "1.4s avg" },
];

const pricingTiers = [
  {
    name: "Launch",
    price: "$0",
    frequency: "per month",
    description: "For fintechs validating new corridors and piloting treasury automation.",
    bullets: ["Sandbox + live credentials", "Up to $1M monthly volume", "Email + community support"],
  },
  {
    name: "Scale",
    price: "$1,499",
    frequency: "per month",
    description: "Purpose-built for growth teams shipping regulated multi-asset experiences.",
    bullets: ["Dedicated CSM & Solutions Engineer", "Risk & compliance automation suite", "Priority routing on premium rails"],
    accent: true,
  },
  {
    name: "Enterprise",
    price: "Talk to us",
    frequency: "",
    description: "Designed for Tier-1 PSPs, exchanges, and digital banks operating globally.",
    bullets: ["Tailored corridor expansion", "Co-managed operations desk", "Joint regulatory readiness"],
  },
];

export default function Home() {
  const [fiatAmount, setFiatAmount] = useState("1000");
  const [selectedFiat, setSelectedFiat] = useState("USD");
  const [selectedCrypto, setSelectedCrypto] = useState("USDC");
  const currentYear = new Date().getFullYear();

  const rate = useMemo(() => {
    if (selectedCrypto === "USDC") return 1;
    if (selectedCrypto === "USDT") return 1;
    if (selectedCrypto === "BTC") return 1 / 68000;
    if (selectedCrypto === "ETH") return 1 / 3200;
    return 1;
  }, [selectedCrypto]);

  const convertedAmount = useMemo(() => {
    const parsed = Number.parseFloat(fiatAmount.replace(/,/g, ""));
    if (Number.isNaN(parsed)) return "0.00";
    const cryptoValue = parsed * rate;
    if (selectedCrypto === "BTC" || selectedCrypto === "ETH") {
      return cryptoValue.toFixed(6);
    }
    return cryptoValue.toFixed(2);
  }, [fiatAmount, rate, selectedCrypto]);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.14),_transparent_55%)]" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <div className="flex items-center gap-3">
          <div className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
            Atlas PSP
          </div>
          <span className="hidden text-sm text-slate-400 sm:inline">
            Digital Assets & Fiat Settlement Infrastructure
          </span>
        </div>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {navigationItems.map((item) => (
            <a key={item.label} className="transition hover:text-white" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-3">
          <button className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-400 hover:text-white">
            Request demo
          </button>
          <button className="hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-cyan-300 sm:block">
            Launch console
          </button>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 sm:px-10">
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 px-6 pb-16 pt-16 sm:px-12">
          <div className="absolute -left-20 top-[-140px] h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute bottom-[-160px] right-[-60px] h-96 w-96 rounded-full bg-purple-500/20 blur-[150px]" />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1 text-xs font-medium tracking-wide text-cyan-200">
                Cross-border money movement without friction
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                The global PSP stack for instant fiat and crypto settlement.
              </h1>
              <p className="text-lg text-slate-300 sm:max-w-lg">
                Atlas PSP gives your finance and product teams a single, programmable platform to onboard
                customers, orchestrate compliance, and route liquidity across 190+ countries in real time.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300">
                  Explore platform overview
                </button>
                <button className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white">
                  Review integration docs
                </button>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 shadow-[0_0_0_1px_rgba(15,23,42,0.6)]"
                  >
                    <p className="text-sm uppercase tracking-widest text-slate-400">{metric.label}</p>
                    <p className="mt-3 text-xl font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-3xl border border-cyan-500/40 bg-slate-950/80 p-8 shadow-[0_20px_40px_rgba(6,11,25,0.35)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Transfer quote</p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">Instant settlement path</h2>
                </div>
                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-200">
                  Live sandbox
                </span>
              </div>
              <div className="grid gap-4">
                <label className="flex flex-col gap-2 text-sm text-slate-300">
                  Source amount
                  <div className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3">
                    <select
                      className="w-24 bg-transparent text-slate-100 outline-none"
                      value={selectedFiat}
                      onChange={(event) => setSelectedFiat(event.target.value)}
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="SGD">SGD</option>
                    </select>
                    <input
                      className="flex-1 bg-transparent text-white outline-none"
                      value={fiatAmount}
                      onChange={(event) => setFiatAmount(event.target.value)}
                      placeholder="Amount"
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-2 text-sm text-slate-300">
                  Destination asset
                  <div className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3">
                    <select
                      className="w-full bg-transparent text-slate-100 outline-none"
                      value={selectedCrypto}
                      onChange={(event) => setSelectedCrypto(event.target.value)}
                    >
                      <option value="USDC">USDC - Circle</option>
                      <option value="USDT">USDT - Tether</option>
                      <option value="BTC">BTC - Lightning</option>
                      <option value="ETH">ETH - Mainnet</option>
                    </select>
                  </div>
                </label>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Conversion preview</p>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-semibold text-white">{convertedAmount}</p>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{selectedCrypto}</p>
                  </div>
                  <div className="text-right text-xs text-slate-400">
                    <p>Network fees: included</p>
                    <p>FX spread: 12 bps locked</p>
                  </div>
                </div>
              </div>
              <button className="rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:from-cyan-300 hover:via-sky-300 hover:to-purple-400">
                Issue settlement instruction
              </button>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-400">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-200">
                  ⚡
                </span>
                <p>
                  Smart orchestration automatically selects the fastest, compliant corridor across fiat rails and
                  digital asset networks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/40 p-10">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Platform overview
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              One orchestration layer for every payment rail your product needs.
            </h2>
            <p className="max-w-3xl text-lg text-slate-300">
              Consolidate wallets, ledgers, and banking partners into a single control hub. Atlas PSP abstracts
              away dozens of bilateral integrations and provides observability tooling your finance teams will trust.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <div className="text-2xl">◎</div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{card.description}</p>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-slate-400">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="compliance"
          className="grid gap-10 rounded-3xl border border-slate-800 bg-gradient-to-tr from-slate-900/80 via-slate-900/50 to-slate-900/80 px-6 py-12 sm:px-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
                Risk, compliance & controls
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Designed for regulated finance and crypto-native scale-ups alike.
              </h2>
            </div>
            <div className="rounded-2xl border border-purple-500/40 bg-purple-500/10 px-5 py-3 text-sm text-purple-100">
              <p>Coverage across EU, UK, US, UAE, SG, and LATAM.</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <h3 className="text-xl font-semibold text-white">Unified compliance workflow</h3>
              <p className="mt-3 text-sm text-slate-300">
                Orchestrate onboarding, risk scoring, case management, and suspicious activity reporting in one
                place. Our policy engine adapts to your risk appetite so you can expand into new regions without
                re-architecting your stack.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {["Programmable tiered KYC", "Automated KYB refresh cycles", "AI-assisted investigations", "Comprehensive audit logs"].map(
                  (item) => (
                    <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-purple-500/30 bg-slate-950/80 p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Live compliance feed</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Screened in the last 24h</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                  <span>1,284 onboarding checks</span>
                  <span className="text-cyan-300">0.8% escalated</span>
                </li>
                <li className="flex justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                  <span>212 large value transfers</span>
                  <span className="text-cyan-300">Policy 4B confirmed</span>
                </li>
                <li className="flex justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                  <span>58 ongoing investigations</span>
                  <span className="text-cyan-300">Real-time updates</span>
                </li>
              </ul>
              <button className="mt-4 rounded-full border border-purple-400/60 px-6 py-3 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/10">
                View compliance playbooks
              </button>
            </div>
          </div>
        </section>

        <section
          id="on-off-ramps"
          className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-12 sm:px-12"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Network coverage
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Programmable access to leading fiat and digital asset rails.
            </h2>
            <p className="max-w-3xl text-lg text-slate-300">
              Route treasury operations intelligently with built-in redundancy and proactive failure handling. Each
              corridor includes health checks, status webhooks, and automated fallbacks.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rails.map((rail) => (
              <div
                key={rail.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-300"
              >
                <p className="text-base font-semibold text-white">{rail.name}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">{rail.type}</p>
                <p className="mt-4 text-sm text-cyan-200">{rail.latency}</p>
                <p className="mt-2 text-xs text-slate-400">Availability 24/7 • Automated route failover</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/45 px-6 py-12 sm:px-12"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Transparent economics
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Scale with predictable platform fees and volume-based economics.
            </h2>
            <p className="max-w-3xl text-lg text-slate-300">
              Every plan includes the same secure infrastructure, turnkey compliance tooling, and 24/7 monitoring.
              Choose the support and corridor expansion velocity that fits your roadmap.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col gap-6 rounded-3xl border ${
                  tier.accent ? "border-cyan-400/60 bg-cyan-400/10 shadow-[0_0_40px_rgba(34,211,238,0.08)]" : "border-slate-800 bg-slate-900/60"
                } p-8`}
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-slate-400">{tier.name}</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <p className="text-3xl font-semibold text-white">{tier.price}</p>
                    {tier.frequency ? (
                      <span className="text-xs uppercase tracking-[0.35em] text-slate-500">{tier.frequency}</span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm text-slate-300">{tier.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-200">
                  {tier.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-auto rounded-full px-6 py-3 text-sm font-semibold transition ${
                    tier.accent
                      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                      : "border border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white"
                  }`}
                >
                  {tier.accent ? "Talk with sales" : "Start onboarding"}
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500">
            Usage fees apply based on corridor and asset. Volume discounts unlock automatically as you scale.
          </p>
        </section>

        <section
          id="developers"
          className="grid gap-10 rounded-3xl border border-slate-800 bg-slate-900/50 px-6 py-12 sm:px-12"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Built for engineers
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Modern APIs and tooling to launch global payouts in weeks, not quarters.
            </h2>
            <p className="max-w-3xl text-lg text-slate-300">
              Use our SDKs, reference apps, and robust sandbox environment to connect your product to global
              settlement rails. Seamless observability and alerting keep your team in the loop at all times.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Transfer instruction snippet</p>
              <pre className="mt-4 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm leading-relaxed text-cyan-100">
{`await atlas.transfers.create({
  sourceWallet: "institution:usd:primary",
  amount: "1000.00",
  currency: "${selectedFiat}",
  destination: {
    network: "${selectedCrypto === "BTC" ? "lightning" : selectedCrypto.toLowerCase()}",
    address: "dest_9a31df382",
  },
  compliancePolicy: "atlas-default",
  onFailure: { strategy: "retry", attempts: 3 },
});`}
              </pre>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold text-white">Operations-grade observability</h3>
              <p className="text-sm text-slate-300">
                Streaming dashboards, webhook retries, incident response playbooks, and structured logging are built
                in so your engineers can focus on product differentiation.
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
                  <span>Latency SLOs surfaced in Grafana</span>
                  <span className="text-cyan-200">Exportable</span>
                </li>
                <li className="flex justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
                  <span>Webhook replay + signature validation</span>
                  <span className="text-cyan-200">CLI ready</span>
                </li>
                <li className="flex justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
                  <span>SDKs for TypeScript, Kotlin, Swift</span>
                  <span className="text-cyan-200">Docs maintained</span>
                </li>
              </ul>
              <button className="mt-4 w-fit rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300">
                Download API reference
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/50 p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                Leadership trust
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Trusted by digital banks, exchanges, fintech suites, and Web3 pioneers.
              </h2>
            </div>
            <div className="hidden gap-6 text-sm text-slate-400 sm:flex">
              {["AuroraPay", "Helios Digital", "LatitudeX", "Nimbus Capital"].map((brand) => (
                <span key={brand} className="rounded-full border border-slate-800 px-5 py-2">
                  {brand}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                quote:
                  "Atlas PSP let us launch instant USD ↔️ USDC settlement for merchants within weeks. Our reconciliation time dropped by 72%.",
                name: "Morgan Reeves",
                title: "COO, AuroraPay",
              },
              {
                quote:
                  "The compliance automation framework is the best we have evaluated. It keeps up with evolving regulations without heavy engineering effort.",
                name: "Isabella Grant",
                title: "Chief Risk Officer, Helios Digital",
              },
              {
                quote:
                  "Their developer-first approach and proactive operations desk empower us to scale cross-border payouts reliably for our clients.",
                name: "Farid Al-Sayed",
                title: "Head of Product, LatitudeX",
              },
            ].map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-sm text-slate-300"
              >
                <p className="text-base text-white">“{testimonial.quote}”</p>
                <footer className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  {testimonial.name} · {testimonial.title}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900/80 bg-slate-950/90 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Atlas PSP</p>
            <p className="mt-2 text-xs text-slate-500">
              © {currentYear} Atlas Clearance Technologies. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <a className="transition hover:text-white" href="#">
              Status
            </a>
            <a className="transition hover:text-white" href="#">
              Legal
            </a>
            <a className="transition hover:text-white" href="#">
              Security
            </a>
            <a className="transition hover:text-white" href="#">
              Careers
            </a>
            <a className="transition hover:text-white" href="#">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
