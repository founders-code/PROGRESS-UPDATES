const DATA = {
  updated: "June 3, 2026",
  overallPct: 32,
  overallNote: "Roughly a third of the way to an operating, regulated exchange — and moving every week. Well ahead of a typical pre-seed company on product proof, web presence, advisory bench, and institutional pipeline; on-par-to-early on closing capital and on regulatory filings. The list below is the receipts: what's done, what's underway now, and what's next, in every workstream.",

  /* ███ WEEKLY WINS ███  — add one line each week. Newest first.
     date "YYYY-MM-DD". vertical = a vertical id (for the colored tag). */
  wins: [
    { date:"2026-06-03", vertical:"product",   text:"Architect (Zed) onboarded into ClickUp + Drive; architecture review advanced toward the execution-ready pack. Insurance identified as the 4th platform component." },
    { date:"2026-06-02", vertical:"team",      text:"Sent Martin Hack (Silicon Valley CTO / AI) the proposal, NDA and architecture docs — CTO conversation advancing." },
    { date:"2026-06-02", vertical:"capital",   text:"Cap table finalized with the CFO — $10M valuation, 20M shares @ $0.50, ~10% dilution; two raise scenarios modeled." },
    { date:"2026-06-01", vertical:"product",   text:"LayerZero Phase-3 interoperability reviewed (80% cross-chain share, mint-and-burn OFT model) — confirmed as an optional adapter, not a dependency." },
    { date:"2026-06-01", vertical:"investors", text:"LayerZero signalled openness to the seed round; Spear Technologies expressed investment interest." },
    { date:"2026-06-01", vertical:"legal",     text:"Three-class share structure confirmed with counsel — common voting, founder super-voting, and investor voting-preferred." },
    { date:"2026-05-30", vertical:"capital",   text:'Raise revised upward ("Increased Raise") — valuation reset to $10M, target increased toward $3–4M.' },
    { date:"2026-05-29", vertical:"product",   text:"Institutional architecture validated — 7.5/10 architecture fit, 8.5/10 strategic fit (Zed review)." },
    { date:"2026-05-27", vertical:"marketing", text:"SEO program kicked off with Ming — dual-track plan for KCS Capital (C-suite) + 4ormEx (volume)." },
    { date:"2026-05-25", vertical:"product",   text:"Major upgrade to the institutional demo — compliance workflow, transaction simulator, savings breakdown." },
    { date:"2026-05-21", vertical:"product",   text:"Education platform concept defined — white-label SaaS backed by a 46-person expert network." },
    { date:"2026-05-19", vertical:"bd",        text:"ATB Financial relationship opened — primary contacts established; 4orm flagged internally as a client of interest." },
    { date:"2026-05-13", vertical:"marketing", text:"Three institutional web properties + the demo exchange went live." },
    { date:"2026-05-08", vertical:"grants",    text:"GetUpgraded engaged for grant applications — $1M+ identified over three years." },
    { date:"2026-05-08", vertical:"legal",     text:"Three-firm legal structure locked — Capiche (corporate), CFA (TFSA/RRSP trust), Fasken (securities)." },
    { date:"2026-05-07", vertical:"capital",   text:"Don's $50K finalized into 200,000 shares (1%); Brooks' $250K structured as a bridge convertible to deploy capital fast." },
    { date:"2026-05-04", vertical:"legal",     text:"Selected Capiche over Osler for corporate setup — ~$85K (≈70%) legal-cost reduction while keeping TFSA/RRSP eligibility." },
    { date:"2026-05-04", vertical:"investors", text:"Neo Financial founders (Skip the Dishes exit) added to the pre-seed pipeline via a warm intro." },
    { date:"2026-04-27", vertical:"team",      text:"Advisory council assembled — Bruce Fair (30-yr VC), Mike Andrews (ex-SWIFT/Morgan Stanley), Michael Stephens (Fasken), Zed (architect), Don (first investor)." },
    { date:"2026-04-27", vertical:"grants",    text:"175 grant programs identified (16 Canada-specific) — sourced directly rather than paying a facilitation fee." },
    { date:"2026-04-27", vertical:"bd",        text:"Institutional database built — 181 contacts across ~100 institutions; BD pipeline stages defined." },
    { date:"2026-04-27", vertical:"investors", text:"VC pipeline compiled — 81–108 Canadian + international VC contacts with check sizes and decision-makers." },
    { date:"2026-04-24", vertical:"capital",   text:"Financial pro forma completed and CFA-approved; pipeline/timeline tracking system built across all workstreams." },
    { date:"2026-04-24", vertical:"product",   text:"ClickUp + Google Drive rebuilt to scale for a 100-person org, with AI agents deployed across operations." },
    { date:"2026-04-22", vertical:"product",   text:"Four full websites built in one week using AI (each ~2× the prior site), plus the full ops backend." },
    { date:"2026-04-22", vertical:"team",      text:"Mike Andrews (ex-SWIFT / Morgan Stanley / BofA / Barclays) joined as advisor after a rigorous vetting session." },
    { date:"2026-04-08", vertical:"capital",   text:"Legal + financial modeling session with Miika & Bruce — early cap structure and pro forma groundwork." },
    { date:"2026-03-30", vertical:"team",      text:"First KCS Advisory Committee call held — monthly advisory cadence established." },
    { date:"2026-03-26", vertical:"product",   text:"Build partner vetted — Spear Technologies intro (netcoins / SIX Digital exchange experience); $211–317K phased, full IP ownership." },
    { date:"2026-03-26", vertical:"bd",        text:"Discovery calls run with prospective partners (Arshie, Safe Harbour Informatics, AxA Consulting)." },
    { date:"2026-03-23", vertical:"legal",     text:"Securities framework scoped with counsel — $2M pre-seed via SAFE, super-voting governance, BC vs AB jurisdiction decision." },
    { date:"2026-03-21", vertical:"capital",   text:"Earliest documented strategy working session — the foundation the raise and structure were built on." }
  ],

  verticals: [
    /* 1 ---------------------------------------------------------- */
    {
      id:"product", name:"Product & Engineering", short:"Product",
      pct:24, stage:"Architecture & Discovery · Phase 1→2 of 6",
      benchmark:{level:"ahead", note:"<b>Ahead of the typical pre-seed on artifacts, behind on shipped code.</b> Most pre-seed teams have neither a full institutional architecture nor a working interactive demo — 4orm has both, plus a scaled ops backend. The production MVP build has not started, so the platform itself is still early — by design, it's sequenced behind the pre-seed close."},
      checkpoints:[
        {state:"done", t:"30/60/90 technical discovery + 12-month plan", d:"End-to-end architecture aligned to settlement, issuance, custody, compliance; phased delivery model."},
        {state:"done", t:"Institutional architecture v1 (Zed)", d:"Layered model: canonical ledger of record, compliance engine, token registry, treasury controls, atomic DvP, interoperability abstraction layer; ~7 modules."},
        {state:"done", t:"40 user stories defined", d:"Agile backbone: requirements → test cases → user guide."},
        {state:"done", t:"Architecture validated", d:"Scored 7.5/10 architecture fit and 8.5/10 strategic fit (Zed review, May 29)."},
        {state:"done", t:"Interactive institutional demo live", d:"Simulates 191 institutions on real public financials; KYC/AML/settlement sim + savings calculator (~3.3s atomic vs ~1.3-day legacy)."},
        {state:"done", t:"Four web platforms built with AI in ~1 week", d:"KCS, 4orm Finance, 4ormEx, and the demo exchange — for a few hundred dollars of AI credits."},
        {state:"done", t:"Ops backend rebuilt to scale", d:"ClickUp + Google Drive restructured for a 100-person org with AI document routing; CRM, Sales Navigator, ZoomInfo deployed."},
        {state:"done", t:"Build partner shortlisted", d:"Spear Technologies (~$317K quote; clients incl. TD, Air Canada, BoC) preferred over ChainUp; Finhaven (holds BCSC exemptive relief) a partner candidate."},
        {state:"active", t:"Architecture finalization", d:"~90-day target to an execution-ready pack for partners, regulators, and engineering."},
        {state:"active", t:"Insurance layer + agentic-AI design", d:"Insurance identified as the 4th component (smart-contract policy validation); multi-agent compliance automation."},
        {state:"active", t:"Education platform concept", d:"White-label SaaS backed by a 46-expert network — a non-dilutive revenue stream."},
        {state:"active", t:"Custom data room build", d:"On the KCS site (Google + Microsoft login), replacing the Drive-based room."},
        {state:"todo", t:"Engage CTO → discovery → hackathon MVP", d:"4–6 week discovery then a focused MVP build with a design-partner bank."},
        {state:"todo", t:"MVP build (deposit-token pilot)", d:"Canada's first tokenized deposit flow as the MVP candidate; 6–12 months."},
        {state:"todo", t:"Sandbox + ATB bank pilot", d:"Regulator-aligned sandbox deployment (Phase 5)."},
        {state:"todo", t:"LayerZero Phase-3 interoperability", d:"Optional cross-chain adapter — not required for the Alberta pilot or provincial scale."},
        {state:"todo", t:"Production hardening", d:"Security audits, multi-bank governance; full product to market in 18–24 months."}
      ],
      facts:[
        "Lead architect: <b>Zed</b> (25 yrs enterprise IT)",
        "Atomic settlement: <b>~3.3–9s</b> vs legacy 1.3–3 days",
        "Web build value: ~<b>$100K</b> equiv. for a few hundred $",
        "Build quote: <b>Spear Tech ~$317K</b>",
        "LayerZero = Phase-3 adapter, <b>not</b> core",
        "Full product to market: <b>18–24 months</b>"
      ],
      links:[{label:"institutional demo ↗", url:"https://demo-exchange.vercel.app"},{label:"4ormex.com ↗", url:"https://4ormex.com"}]
    },
    /* 2 ---------------------------------------------------------- */
    {
      id:"compliance", name:"Compliance & Regulatory", short:"Compliance",
      pct:20, stage:"Pathway defined · filings ahead",
      benchmark:{level:"onpar", note:"<b>On-par, with an early-engagement edge.</b> The regulatory pathway is mapped across all four bodies and the team is already in the room with regulators (CSA event + private dinner) — unusual this early. But no sandbox application or registration has been filed yet."},
      subs:[{name:"FINTRAC (MSB registered)", pct:40},{name:"CIRO (custody framework, Tier-2 target)", pct:28},{name:"CSA (NI 45-106 / 31-103 / 21-101)", pct:25},{name:"OSFI (banking controls / sandbox)", pct:18}],
      checkpoints:[
        {state:"done", t:"Full regulatory mapping", d:"CSA, OSFI, CIRO, FINTRAC, PFMI, PIPEDA, ISO 27001 mapped to the architecture."},
        {state:"done", t:"MSB registration (FINTRAC)", d:"Money Services Business certificate obtained — part of the ATB DD package."},
        {state:"done", t:"Three-entity structure mapped", d:"HoldCo / OpCo / CustodyCo per the CIRO Digital Asset Custody Framework (Tier-2 target)."},
        {state:"done", t:"Securities counsel engaged", d:"Michael Stephens / Fasken (drafted the CryptoKitties no-action letter) + Osler digital-assets practice."},
        {state:"done", t:"Prior compliance discovery sourced", d:"~$12M of pre-existing exchange compliance/legal discovery available via Fasken for an update fee."},
        {state:"done", t:"Competitive/regulatory intel", d:"Mapped Broadridge, VersaBank, ChainUp; tracked CSA Project Tokenization + BoC Project Samara."},
        {state:"done", t:"Regulator relationships opened", d:"Attended CSA tokenization event (1 of ~50 firms); private dinner with senior regulators on supervision gaps."},
        {state:"active", t:"CSA / CIRO pre-clearance research", d:"Mapping the registration pathway before formal filings."},
        {state:"active", t:"Hybrid onshore/offshore structuring", d:"Canadian ops onshore (+ SR&ED credits); offshore the components not yet viable in Canada."},
        {state:"active", t:"Alberta requirements confirmation", d:"Majority-directors + AB registration check."},
        {state:"todo", t:"OSFI / CSA / FINTRAC sandbox application", d:"Targeted Q3 2026."},
        {state:"todo", t:"CAMLO sign-off (ATB onboarding)", d:"Final AML approval in the ATB banking relationship."},
        {state:"todo", t:"Registration & approvals", d:"Regulator review (Phase 5) → production supervision model (Phase 6)."}
      ],
      facts:[
        "MSB / FINTRAC: <b>registered</b>",
        "Structure: <b>HoldCo / OpCo / CustodyCo</b> (CIRO Tier-2)",
        "Counsel: <b>Fasken</b> + <b>Osler</b>",
        "Prior discovery available: ~<b>$12M</b> value",
        "Sandbox application target: <b>Q3 2026</b>",
        "Context: ~<b>$2B/yr</b> leaving Canada offshore (CSA)"
      ]
    },
    /* 3 ---------------------------------------------------------- */
    {
      id:"capital", name:"Capital & Pre-Seed Raise", short:"Pre-Seed",
      pct:42, stage:"Round structuring · opening now · close 30–60 days",
      benchmark:{level:"onpar", note:"<b>On-par for an opening pre-seed.</b> Terms, valuation, cap table and the financial model are set, and there are real soft commitments in hand — but the round is not yet formally open or closed. The raise was just revised upward, which reflects a stronger plan, not a closed round."},
      checkpoints:[
        {state:"done", t:"Investor-ready financial model + pro forma", d:"Built with Miika (CFA) and CFA-approved; dilution scenarios for $2M and $3M raises."},
        {state:"done", t:"Cap table & dilution modeled", d:"$10M valuation, 20M shares @ $0.50, ~10% dilution; warrant strategy to absorb $400–500K of raise uncertainty."},
        {state:"done", t:"Three-class share structure defined", d:"Class A common voting, Class B founder super-voting (sunset), and investor voting-preferred with revenue-based redemption (10–15% of revenue)."},
        {state:"done", t:"$25K founder equity deployed", d:"Satisfies the EBC (Eligible Business Corporation) requirement."},
        {state:"done", t:"Capiche Capital retained", d:"$10K retainer; financing platform + subscription docs."},
        {state:"done", t:"First lead commitments secured", d:"Don $50K (→1% / 200,000 shares); Brooks $250K (up to $500K), structured as a bridge convertible to deploy capital before close."},
        {state:"done", t:"Pitch deck built", d:"Feb 2026 institutional pitch deck."},
        {state:"active", t:'Raise revised up — "Increased Raise"', d:"Valuation reset $20M → $10M; target increased from $2M toward $3–4M (12-mo runway ≈ $1.8M dev + $200K opex)."},
        {state:"active", t:"EBC application (BC CCPC)", d:"30% BC tax credit + TFSA/RRSP eligibility; ~6–15 working days to full investor eligibility."},
        {state:"active", t:"Subscription documents", d:"Drafting via Capiche."},
        {state:"todo", t:"Formally open the pre-seed round", d:"Open the $3–4M round once docs + EBC land."},
        {state:"todo", t:"Final pitch deck v2.0 + investor ROI section", d:"Refreshed with the revised valuation."},
        {state:"todo", t:"Close pre-seed", d:"Target 30–60 days."}
      ],
      facts:[
        "Target: <b>$3–4M</b> (revised up from $2M)",
        "Valuation: <b>$10M</b> (revised from $20M)",
        "Soft-committed: <b>~$300K</b> (Don $50K + Brooks $250K)",
        "Vehicle: <b>BC CCPC</b> + EBC 30% credit",
        "Counsel/platform: <b>Capiche Capital</b>",
        "Close target: <b>30–60 days</b>"
      ]
    },
    /* 4 ---------------------------------------------------------- */
    {
      id:"grants", name:"Grants & Non-Dilutive", short:"Grants",
      pct:18, stage:"Programs identified · facilitator engaged · applications next",
      benchmark:{level:"ahead", note:"<b>Ahead on identification, early on execution.</b> Most pre-seed companies ignore non-dilutive funding entirely; 4orm has mapped a large grant pipeline and engaged a facilitator. But applications have not yet been submitted or won."},
      checkpoints:[
        {state:"done", t:"Grant landscape compiled", d:"175 programs identified (16 Canada-specific), incl. NRC IRAP, Creative Destruction Lab, Elevate IP, SR&ED, Alberta productivity/export programs, blockchain incubators."},
        {state:"done", t:"Facilitator engaged (GetUpgraded)", d:"$1M+ in grants identified over 3 years with a 5× ROI guarantee."},
        {state:"active", t:"Prioritizing fastest-fit programs", d:"MyDax and SR&ED flagged as the quickest first applications; free matchmaking underway."},
        {state:"todo", t:"Submit first applications", d:"File the top-priority programs."},
        {state:"todo", t:"Secure first non-dilutive grant", d:"Offset opex and reduce dilution."}
      ],
      facts:[
        "Programs identified: <b>175</b> (16 Canada-specific)",
        "Identified value: <b>$1M+</b> over 3 yrs",
        "Facilitator: <b>GetUpgraded</b> (5× ROI guarantee)",
        "First filings: <b>MyDax, SR&ED</b>",
        "Submitted to date: <b>0</b>",
        "Purpose: offset opex, <b>reduce raise size</b>"
      ]
    },
    /* 5 ---------------------------------------------------------- */
    {
      id:"bd", name:"Business Development & GTM", short:"BD & GTM",
      pct:28, stage:"Engine built · ATB live · outreach launching",
      benchmark:{level:"ahead", note:"<b>Well ahead of a typical pre-seed.</b> A mapped 191-institution target list, named contacts inside the majors, a built outreach engine, and a live banking relationship with ATB are rare this early. The gap is conversion — no signed MOU or pilot yet."},
      checkpoints:[
        {state:"done", t:"191 Canadian FIs mapped", d:"CEO/CTO/CFO/CRO contacts + scraped financials, scored into 4 priority waves (A–D)."},
        {state:"done", t:"Direct-line CEO database", d:"61 Canadian institution CEOs with personal/direct emails — bypasses ~2 months of gatekeeper navigation."},
        {state:"done", t:"BD pipeline stages defined", d:"Outreach → Attempted → Contact Made → Qualified, tracked in ClickUp under each institution."},
        {state:"done", t:"90-day ABM outreach engine (v4)", d:"3-touch: LinkedIn research DM → day-7 email (Sam) → 45-min call with Chad; 42 user personas mapped."},
        {state:"done", t:"Sales / education tool decision", d:"The interactive demo is the funnel asset — show understanding, book exec calls (not a passive audit)."},
        {state:"done", t:"ATB relationship opened", d:"Named contacts (Ali Syed, Jonathan Rizzo ex-Kraken, + C-suite); ATB flagged 4orm internally as a client of interest; May 19 meeting held."},
        {state:"done", t:"Second pilot prospect engaged", d:"Bow Valley Credit Union discovery (contact Brett); BDC contact (Austin Cher) engaged."},
        {state:"active", t:"ATB due-diligence package", d:"Corporate docs, cap table, deck, MSB cert, transaction-flow, vendor list — due within 4 weeks."},
        {state:"active", t:"First outreach batch (10 contacts)", d:"Testing the ABM sequence before scaling."},
        {state:"active", t:"3-step pilot validation", d:"Validate operations → technical build → market with pilot banks before pitching."},
        {state:"todo", t:"Launch full outbound", d:"Scale across the 191 after the test batch (~mid-June)."},
        {state:"todo", t:"5 pilot banks → case studies", d:"Named targets include ATB and Bow Valley; dev-partner model (~$500K buy-in)."},
        {state:"todo", t:"Secure 3 institutional MOUs", d:"Primary near-term GTM goal."}
      ],
      facts:[
        "Institutions mapped: <b>191</b> (181 contacts loaded)",
        "Direct CEO emails: <b>61</b>",
        "ATB account opening: <b>1–3 months</b>",
        "Pilot target: <b>5 banks</b> (ATB, Bow Valley)",
        "Dev-partner buy-in model: <b>~$500K</b>",
        "Near-term goal: <b>3 MOUs</b>"
      ]
    },
    /* 6 ---------------------------------------------------------- */
    {
      id:"marketing", name:"Marketing & Web", short:"Marketing",
      pct:78, stage:"Built · launch & SEO engine remaining",
      benchmark:{level:"ahead", note:"<b>Far ahead of a typical pre-seed.</b> Four live web properties plus an interactive institutional demo, a brand system, and a content library exceed what most companies have at Series A. Remaining work is the ongoing SEO/content engine and PR, not the build."},
      checkpoints:[
        {state:"done", t:"Brand kits finalized", d:"KCS Capital + 4orm Finance brand systems, stored in the shared drive."},
        {state:"done", t:"Three sites live", d:"kcs-capital.com, 4ormfinance.com, 4ormex.com."},
        {state:"done", t:"Institutional demo live", d:"demo-exchange.vercel.app — interactive savings + settlement sandbox."},
        {state:"done", t:"Positioning locked", d:'KCS = "Canada\'s leading research & advisory firm"; 4orm = the separate exchange entity (deliberate regulatory separation).'},
        {state:"done", t:"Landing video + LinkedIn rebuild", d:"Company page rebuilt; all founders updated profiles with affiliation."},
        {state:"done", t:"ClickUp Command Center + CRM", d:"Pipeline/tasks separation, contact directory."},
        {state:"done", t:"22 research briefs published", d:"KCS Briefs library; AI voice narration added."},
        {state:"active", t:"Brand / logo redesign", d:"Shifting to institutional blues/greens (away from crypto purple/gold)."},
        {state:"active", t:"Data audit for personalized pages", d:"Auditing bank-specific financials before they go live."},
        {state:"active", t:"SEO engagement (Ming)", d:"Discovery/audit; dual-track KCS (C-suite) + 4ormEx (volume); plan 4–8 briefs/month."},
        {state:"active", t:"Demo polish + gated launch", d:"Targeted early June, coordinated with outreach."},
        {state:"todo", t:"SEO / content engine ongoing", d:"Reverse-engineer Onyx/Polymath; close the new-domain authority gap."},
        {state:"todo", t:"PR / newswire campaign", d:'Position 4orm as "Canada\'s first RWA marketplace."'},
        {state:"todo", t:"Bank-specific personalized pages", d:"ATB, Scotia using actual financials."}
      ],
      facts:[
        "Live web properties: <b>4</b>",
        "Research briefs: <b>22</b> (→4–8/mo)",
        "Phase-1 marketing budget: <b>~$200K</b> ($10K/mo + build)",
        "SEO lead: <b>Ming</b> (~10 yrs)",
        "Web partner: <b>Evolve One Media</b>",
        "GTM kickoff: <b>June 1</b>"
      ],
      links:[{label:"kcs-capital.com ↗", url:"https://www.kcs-capital.com"},{label:"4ormfinance.com ↗", url:"https://www.4ormfinance.com"},{label:"4ormex.com ↗", url:"https://4ormex.com"},{label:"institutional demo ↗", url:"https://demo-exchange.vercel.app"}]
    },
    /* 7 ---------------------------------------------------------- */
    {
      id:"team", name:"Team & Talent", short:"Team",
      pct:35, stage:"Founders + deep advisory bench · key hires ahead",
      benchmark:{level:"onpar", note:"<b>Advisory bench is a genuine strength; full-time eng hires still ahead.</b> The advisor roster (banking, securities, architecture, CFO-level) is deeper than most pre-seeds. The gap investors will probe is a committed full-time CTO and an engineering team — both in progress."},
      checkpoints:[
        {state:"done", t:"Founding team in place", d:"Chad Johnston (CEO), Kevin Wong (CMO/marketing), Sam Junior (relations / co-founder)."},
        {state:"done", t:"Advisory council assembled", d:"Bruce Fair (30-yr VC, raised $500M+, 3 public boards), Mike Andrews (35+ yr banking tech — SWIFT/Morgan Stanley/BofA/Barclays), Michael Stephens (Fasken securities), Zed (enterprise architect), Don (first investor)."},
        {state:"done", t:"CFO / compliance capacity", d:"Miika (CFA, CCO experience across PE dealers) leading financial modeling and the CCO track."},
        {state:"done", t:"Specialist vendors engaged", d:"Ming (SEO), Evolve One Media / Franco (web)."},
        {state:"active", t:"Martin Hack — CTO / AI advisor", d:"Silicon Valley operator (scaled to $5M rev, raised ~$25M seed). Proposal + NDA + architecture docs sent; intro calls scheduled; ~$20K/mo."},
        {state:"active", t:"Partnership lanes defined", d:"Three lanes — full-time / part-time / co-founder — to satisfy investor team-composition scrutiny."},
        {state:"active", t:"Equity incentive plan", d:"15% evergreen pool; reverse-vesting agreements drafted."},
        {state:"todo", t:"Engage full-time CTO / tech lead", d:"Convert advisor into committed technical leadership."},
        {state:"todo", t:"Recruit dev leads + founding engineers", d:"2 dev leads + supporting roles, post pre-seed close."},
        {state:"todo", t:"Advisory council charter", d:"Formalize the advisory council."}
      ],
      facts:[
        "Founders: <b>3</b> (Chad, Kevin, Sam)",
        "Named advisors: <b>5+</b> (banking, securities, VC, architecture)",
        "Prospective CTO: <b>Martin Hack</b> (~$20K/mo)",
        "Equity pool: <b>15%</b> evergreen",
        "Next hires: <b>2 dev leads</b> + engineers",
        "Trigger: post pre-seed close"
      ]
    },
    /* 8 ---------------------------------------------------------- */
    {
      id:"legal", name:"Legal & Corporate Structure", short:"Legal",
      pct:38, stage:"Incorporation & share structure in progress",
      benchmark:{level:"onpar", note:"<b>On-par — actively being papered, and cost-efficiently.</b> The corporate structure, share classes and founder agreements are in active drafting with counsel, and the firm cut ~$85K by choosing Capiche over Osler. Incorporation completion is the gating item."},
      checkpoints:[
        {state:"done", t:"Three-firm legal structure locked", d:"Capiche (incorporation / subscription / shareholder agreements), CFA (TFSA/RRSP trust), Fasken / Michael Stephens (securities)."},
        {state:"done", t:"~$85K legal cost reduction", d:"Capiche ($30–35K) selected over Osler ($115K) while preserving TFSA/RRSP eligibility."},
        {state:"done", t:"Share classes defined", d:"Common (1:1) + founder super-voting (sunset) + investor voting-preferred; founder shares at $0.001."},
        {state:"done", t:"Bridge convertible structured", d:"Brooks' $250K taken as bridge convertible debt (~$5K legal) to deploy ahead of subscription docs."},
        {state:"active", t:"Shareholder agreement", d:"Super-voting clauses (with sunset); drag-along + buyback; in review."},
        {state:"active", t:"Founder protections", d:"Reverse-vesting agreements; in review."},
        {state:"active", t:"Incorporation + registration", d:"BC CCPC for EBC; federal incorporation + AB extra-provincial registration."},
        {state:"todo", t:"Subscription agreement template", d:"For the pre-seed close."},
        {state:"todo", t:"Privacy charter", d:"Values-based / lawful-resistance language."},
        {state:"todo", t:"Track incorporation completion", d:"Gating item for the raise mechanics."}
      ],
      facts:[
        "Entity: <b>BC CCPC</b> (EBC eligible)",
        "Firms: <b>Capiche</b> + <b>CFA</b> + <b>Fasken</b>",
        "Legal cost saved: ~<b>$85K</b> vs Osler",
        "Shares: <b>3 classes</b> + 0.001 founder",
        "Status: drafts <b>in review</b>"
      ]
    },
    /* 9 ---------------------------------------------------------- */
    {
      id:"investors", name:"Investor Pipeline & Future Rounds", short:"Investors",
      pct:22, stage:"Pipeline built · first capital in · seed mapped",
      benchmark:{level:"ahead", note:"<b>Ahead on pipeline breadth, early on conversion.</b> The investor and strategic-interest list is unusually broad for pre-seed, and first capital is committed. Conversion to closed capital is the early-stage gap, and the seed round is deliberately gated behind the pre-seed close."},
      checkpoints:[
        {state:"done", t:"VC pipeline compiled", d:"81–108 Canadian + international VC contacts with check sizes ($500K–$50M) and decision-makers."},
        {state:"done", t:"First capital committed", d:"Don $50K (→1%); Brooks $250K (up to $500K) via TFSA, structured as a bridge."},
        {state:"done", t:"Strategic interest opened", d:"Neo Financial founders (Skip the Dishes exit) in the pipeline; Spear Technologies investment interest; LayerZero open to the seed."},
        {state:"done", t:"Data room built", d:"Custom data room (migrating onto the KCS site)."},
        {state:"active", t:"$250K bridge → first close", d:"Brooks funds landing over the TFSA-transfer window; momentum bridge in place."},
        {state:"active", t:"Warm intros to Tier-1 VCs + bank", d:"Mapping intro paths; Tier-1 bank meeting in sight."},
        {state:"todo", t:"Pre-seed investor ROI model", d:"Projected-ROI section for the deck."},
        {state:"todo", t:"Seed round planning", d:'"Seed-strapping" $15–25M (2027), likely via a US entity.'}
      ],
      facts:[
        "VC contacts: <b>81–108</b> ($500K–$50M)",
        "Committed: <b>Don $50K</b> + <b>Brooks $250K</b>",
        "Strategic: <b>Neo Financial</b>, <b>Spear</b>, <b>LayerZero</b>",
        "Data room: <b>built</b> (migrating to KCS site)",
        "Seed plan: <b>$15–25M</b> (2027)",
        "US entity likely for seed"
      ]
    }
  ]
};
