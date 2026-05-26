// Afrishore project data
// Featured 6 (full case studies) + 12 light entries
// Replace heroImage paths with real photos when available

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  port: string;
  // Override the "Port" label shown on the case-study metadata block —
  // e.g. "Airport" for an air-charter project. Falls back to "Port".
  locationLabel?: string;
  serviceTypes: string[];
  summary: string;
  tagline?: string; // Optional gold sub-headline under the H1 (case-study page)
  outcome?: string; // Full case study body, only for featured
  heroImage?: string; // Path under /public; falls back to gradient placeholder
  featured: boolean;
  published: boolean;
  // For end-customer references in copy (e.g. Galp)
  endCustomer?: string;
  // Optional operational details
  vessel?: string;
  // Labels the asset precisely on the case-study page. Unset → the
  // generic "Vessel / Rig" hedge (unchanged behaviour).
  assetType?: "rig" | "vessel";
  // Optional in-body captioned photo on the case-study page (same
  // pattern as service/port pages). portrait → centred, capped width.
  secondaryImage?: {
    src: string;
    alt: string;
    caption: string;
    portrait?: boolean;
  };
}

export const projects: Project[] = [
  // ──────────────────────────────────────────────
  // Featured 6 (full case studies, homepage marquee)
  // ──────────────────────────────────────────────
  {
    slug: "totalenergies-brulpadda-discovery",
    title: "TotalEnergies: Brulpadda Discovery Campaign",
    client: "TotalEnergies",
    year: "2018–2019",
    port: "Mossel Bay",
    serviceTypes: ["supply-base", "ship-rig-agency", "integrated-logistics", "crew-visa"],
    vessel: "Deepsea Stavanger",
    assetType: "rig",
    heroImage: "/images/projects/totalenergies-brulpadda-discovery.jpg",
    summary: "Integrated onshore logistics for the Brulpadda discovery campaign — the largest gas-condensate find in South African waters in a decade.",
    outcome: `In February 2019, TotalEnergies announced the Brulpadda gas-condensate discovery, the largest hydrocarbon find in South African waters in over a decade, with estimates around one billion barrels of oil equivalent. Afrishore supported the Brulpadda Discovery Campaign (2018–2019) as the integrated onshore logistics partner, operating the offshore supply base for TotalEnergies as well as supplying turnkey support to the Deepsea Stavanger drilling unit throughout the campaign.

Brulpadda-1AX sits in Block 11B/12B, roughly 175 km off South Africa's southern coast: an ultra-deepwater well drilled in some of the most challenging current and weather conditions in the world (the Agulhas Current is one of the strongest western boundary currents on the planet). Afrishore handled all the onshore supply base operations: temporary importation and customs clearance, warehousing and project cargo handling, rigging and waste management, crew logistics including immigration support for international specialists, vessel agency and port management, and full mobilisation/demobilisation coordination. The above forming the baseline for additional project integrations related to the rig agency of Deepsea Stavanger for Odfjell Drilling, vessel agency for project PSVs from Bourbon and Farstad, mud plant labour and logistics for Halliburton and onshore procurement, logistics and crew movement for Oceaneering. Drilling a frontier well in 1,400 m of water demanded a shore-side operation with zero margin for error.

The Brulpadda discovery reopened South Africa's upstream story. Afrishore was the partner on the ground.`,
    featured: false,
    published: true,
  },
  {
    slug: "totalenergies-luiperd-supply-base",
    title: "TotalEnergies: Luiperd Supply Base",
    client: "TotalEnergies",
    year: "2020–2021",
    port: "Mossel Bay · Cape Town",
    serviceTypes: ["supply-base", "ship-rig-agency", "integrated-logistics", "crew-visa"],
    vessel: "Deepsea Stavanger",
    assetType: "rig",
    heroImage: "/images/projects/totalenergies-luiperd-supply-base.jpg",
    summary: "Twin-port offshore supply base operations across Mossel Bay and Cape Town for TotalEnergies' Luiperd gas-condensate discovery campaign.",
    outcome: `In 2020, TotalEnergies returned to Block 11B/12B on the south coast of South Africa to drill the Luiperd-1X exploration well, a follow-on to the Brulpadda discovery. The campaign confirmed a second significant gas-condensate find. Afrishore operated the integrated offshore supply base across both Mossel Bay and Cape Town for the full duration of the campaign.

Running logistical operations from two ports simultaneously is the operational challenge, synchronised customs clearance, port calls, supply vessel mobilisations, project cargo handling, bunkering and crew rotations across two physical locations and three campaign phases (mobilisation, drilling, demobilisation). The campaign was further executed under the operational constraints of the COVID-19 period adding immigration, quarantine and travel coordination layers that didn't exist on previous campaigns. The Deepsea Stavanger drillship was supported from shore throughout, as were the Bourbon and Tidewater PSVs, Solstad AHTSs, Halliburton mud plant operators, Oceaneering ROV operators and Baker Hughes torque technicians.

Luiperd confirmed Block 11B/12B as one of Africa's most significant new gas plays. Afrishore made the shore-side multi-location and multi-client logistics exceptional through integration.`,
    featured: true,
    published: true,
  },
  {
    slug: "deepsea-bollsta-sps-walvis-bay",
    title: "Deepsea Bollsta: Special Periodic Survey",
    client: "Odfjell Drilling / Northern Ocean LTD",
    year: "2024",
    port: "Walvis Bay, Namibia",
    serviceTypes: ["supply-base", "ship-rig-agency", "integrated-logistics", "crew-visa"],
    vessel: "Deepsea Bollsta",
    assetType: "rig",
    heroImage: "/images/projects/deepsea-bollsta-sps-walvis-bay.jpg",
    summary: "Integrated supply base operations for the 5-yearly recertification of the Deepsea Bollsta semi-submersible drilling unit.",
    outcome: `Mobile offshore drilling units must undergo comprehensive Special Periodic Surveys (SPS) which means a full hull, machinery and safety systems recertification required by classification societies. In 2024, the Deepsea Bollsta completed its SPS at the Port of Walvis Bay with Afrishore acting as the integrated onshore logistics partner throughout the survey period.

For the duration of the SPS, Afrishore handled the full shore-side scope: temporary importation of spare parts and project equipment, customs clearance, warehousing of project cargo, abnormal trucking for oversized components, crane and rigging coordination, waste management and crew rotation logistics including visa and immigration for international specialist teams. The SPS scope brought multiple discipline crews to Walvis Bay simultaneously and every visa, every customs entry and every supply chain link was coordinated from the Port of Walvis Bay's Oil & Gas Section, where Afrishore is permanently embedded. A highlight of the project was being involved in the assembly and shipping out of 15T Stevshark MK5 Anchors in collaboration with Delmar Systems.

The Bollsta returned to operations on schedule, recertified for another operational cycle.`,
    featured: true,
    published: true,
  },
  {
    slug: "deepsea-mira-sps-walvis-bay",
    title: "Deepsea Mira: SPS & BOP Exchange",
    client: "Odfjell Drilling / Northern Ocean LTD",
    year: "2024–2025",
    port: "Walvis Bay, Namibia",
    serviceTypes: ["supply-base", "ship-rig-agency", "integrated-logistics", "crew-visa"],
    vessel: "Deepsea Mira",
    assetType: "rig",
    heroImage: "/images/projects/deepsea-mira-sps-walvis-bay.jpg",
    secondaryImage: {
      src: "/images/projects/deepsea-mira-sps-bop-trailer.jpg",
      alt: "Decommissioned Deepsea Mira blowout preventer (BOP), 130+ tonnes, on a multi-axle heavy-lift low-bed trailer at the Port of Walvis Bay for breakbulk export — Afrishore heavy-lift logistics",
      caption:
        "The decommissioned Deepsea Mira BOP — 130+ tonnes — on a multi-axle heavy-lift low-bed trailer at the Port of Walvis Bay, prepared for its return-to-origin sailing on a breakbulk liner: the outbound leg of a BOP exchange Afrishore coordinated end-to-end.",
    },
    summary: "Special Periodic Survey of the Deepsea Mira at Walvis Bay, scoped with a Blowout Preventer (BOP) exchange and multiple heavy lift logistics movements.",
    outcome: `The Deepsea Mira has operated continuously in Namibian waters since 2023 under Afrishore's onshore supply base support, across sequential drilling campaigns at Venus-1x, Tamboti-1x, Volans-1x, and Kharas-1.

Between campaigns in 2024 to 2025, the rig underwent its Special Periodic Survey at the Port of Walvis Bay. The survey carried one significant additional scope item: a Blowout Preventer exchange. A BOP is a subsea safety assembly weighing in excess of 400 tonnes. Exchanging one requires specialised heavy lift coordination well beyond standard SPS scope.

Afrishore delivered the integrated supply base services for the survey period: customs compliance, warehousing, rigging, crane and trucking coordination, crew rotation, and immigration support, including support for all attending third parties. Alongside this, Afrishore managed the heavy lift logistics for the BOP exchange itself.

The replacement BOP arrived by international freight, was staged shoreside, and was transported to the rig by supply vessel, with extensive vessel modification and sea-fastening for safe passage. The outgoing unit returned through the same chain in reverse. Each leg involved multiple heavy lift movements, every one requiring a rigorous rigging plan, full customs documentation, and port coordination beyond standard SPS scope.

A Special Periodic Survey is rarely simple. With a BOP exchange layered in, it requires a partner already embedded in the port. Afrishore coordinated the first on-rig assembly of the Cameron 15K TL 6 RAM cavity BOP, including full testing and commissioning.`,
    featured: true,
    published: true,
  },
  {
    slug: "facebook-2africa-cable-landing",
    title: "2Africa: Subsea Cable Landing",
    client: "LD TravOcean",
    endCustomer: "2Africa consortium",
    year: "2022–2023",
    port: "Multiple SA coastal landings",
    serviceTypes: ["integrated-logistics", "crew-visa", "ship-rig-agency"],
    heroImage: "/images/projects/facebook-2africa.jpg",
    summary: "Onshore logistics for the South African landing of the 2Africa subsea cable — one of the largest telecoms infrastructure projects ever built.",
    outcome: `The 2Africa subsea cable system is one of the largest telecommunications infrastructure projects ever built: 45,000 km of cable connecting 33 countries across three continents, with a design capacity of 180 Tbps. Between 2022 and 2023, Afrishore supported the South African landing operations on behalf of LD TravOcean, the specialist subsea contractor responsible for the African shore-end works.

The 2Africa project demanded a different operating model than offshore oil and gas. Afrishore coordinated onshore logistics across multiple South African landing points: customs clearance for specialist subsea equipment, temporary importation of cable-handling gear, storage and trucking arrangements, lifting and mobilisation/demobilisation, immigration for international cable specialists, accommodation and transport, crew change coordination, and cross-border freight on both sea and air. Every operation was time-bound to the cable lay sequence, work that ran 24/7 once vessels were on station and out of multiple South African ports.

Trusted by LD TravOcean for one of the most significant infrastructure projects of the decade.`,
    featured: true,
    published: true,
  },
  {
    slug: "dock-titan-cape-town-reunion",
    title: "Dock Titan: Heavy Lift to Réunion",
    client: "Piriou Naval Services / Port of Réunion",
    year: "2025",
    port: "Cape Town · Port of Réunion",
    serviceTypes: ["integrated-logistics", "ship-rig-agency"],
    vessel: "MV Transshelf (Boskalis)",
    assetType: "vessel",
    heroImage: "/images/projects/dock-titan-cape-town-reunion.jpg",
    summary: "Onshore coordination of one of the largest semi-submersible heavy lift operations ever staged through the Port of Cape Town.",
    outcome: `In 2025, Afrishore coordinated the upliftment and ocean transfer of the Titan Floating Dock from the Port of Cape Town to the Port of Réunion on behalf of Piriou Naval Services and the Port of Réunion. The dock was carried aboard the heavy lift vessel MV Transshelf, operated by Boskalis, and was one of the largest semi-submersible heavy lift operations ever staged in the Port of Cape Town through a very tight upliftment window in the Ben Schoeman dock.

This project actually commenced in 2024 when the Titan Dock arrived under tow in Cape Town for multiple dry docking periods. Upon completion of the yard stays the operation then required moving a piece of port infrastructure typically considered immovable. Afrishore delivered this port coordination end-to-end: dry dock bookings, berth allocation and port authority liaison, customs clearance for the export of an entire floating dock, immigration and accommodation for all technical teams and the precise load-out sequencing required when the carrier vessel ballasted down to uplift the dock. The operation crossed two jurisdictions, three government departments and the schedule of one of the world's most specialised vessel operators.

A semi-submersible heavy lift is the kind of operation where every element must align to the hour. Afrishore delivered the vessel and port coordination that made it possible.`,
    featured: true,
    published: true,
  },

  // ──────────────────────────────────────────────
  // Light entries (CMS records, not featured)
  // ──────────────────────────────────────────────
  {
    slug: "totalenergies-brulpadda-2014",
    title: "TotalEnergies: Brulpadda Drilling Campaign",
    client: "TotalEnergies",
    year: "2014",
    port: "Mossel Bay / Cape Town",
    serviceTypes: ["supply-base", "ship-rig-agency"],
    vessel: "Eirik Raude",
    assetType: "rig",
    heroImage: "/images/projects/totalenergies-brulpadda-2014.jpg",
    summary: "First drilling attempt at Brulpadda on the Eirik Raude rig — a campaign that laid the groundwork for the 2018–19 discovery.",
    outcome: `The Brulpadda campaign marked Afrishore's first appointment as offshore supply base operator, under the direction of TotalEnergies.

The mandate covered operation of the Mossel Bay offshore supply base in support of the initial Brulpadda drilling campaign. TotalEnergies' operational standards, logistical methodologies and supply base disciplines were transferred to Afrishore over the course of the campaign and applied directly in the running of the base.

The measure of a skills transfer is not the training. It is what is delivered once the training is over. Afrishore performed a turnkey demobilisation of the campaign out of the Port of Cape Town, executed to the standards established during the operation with zero safety-related incidents during the project.

A first appointment is a test as much as a mandate. Afrishore operated the Mossel Bay base to TotalEnergies' standard and closed the campaign out cleanly through Cape Town showcasing its multi-port capabilities.`,
    featured: false,
    published: true,
  },
  {
    slug: "totalenergies-anchor-testing",
    title: "TotalEnergies: Anchor Testing",
    client: "TotalEnergies",
    year: "2016",
    port: "Cape Town",
    serviceTypes: ["supply-base", "integrated-logistics"],
    heroImage: "/images/projects/totalenergies-anchor-testing.jpg",
    summary: "Anchor and mooring testing operations, supported through onshore logistics and project cargo handling.",
    featured: false,
    published: true,
  },
  {
    slug: "eco-atlantic-gazania-1",
    title: "Eco Atlantic: Gazania-1 Drilling Campaign",
    client: "Eco Atlantic Oil & Gas",
    year: "2023–2024",
    port: "Cape Town / Saldanha",
    serviceTypes: ["ship-rig-agency", "supply-base"],
    heroImage: "/images/projects/eco-atlantic-gazania-1.jpg",
    summary: "Vessel agency and offshore supply base operations for the Gazania-1 exploration well on the South African West Coast.",
    featured: false,
    published: true,
  },
  {
    slug: "deepsea-bollsta-jonker-1",
    title: "Deepsea Bollsta: Jonker-1 Drilling Campaign",
    client: "Odfjell Drilling / Northern Ocean LTD",
    year: "2022–2024",
    port: "Walvis Bay, Namibia",
    serviceTypes: ["ship-rig-agency", "supply-base"],
    vessel: "Deepsea Bollsta",
    assetType: "rig",
    heroImage: "/images/projects/deepsea-bollsta-jonker-1.jpg",
    summary: "Two-year drilling campaign on the Jonker-1 well, supported throughout from Walvis Bay.",
    featured: false,
    published: true,
  },
  {
    slug: "galp-hercules-mopane-1x",
    title: "Deepsea Hercules: Mopane-1x Campaign",
    client: "Odfjell Drilling",
    endCustomer: "Galp Energia",
    year: "2023–2024",
    port: "Walvis Bay / Lüderitz",
    serviceTypes: ["ship-rig-agency", "supply-base", "integrated-logistics"],
    vessel: "Deepsea Hercules",
    assetType: "rig",
    heroImage: "/images/projects/galp-hercules-mopane-1x.jpg",
    summary: "Turnkey onshore logistics for the Deepsea Hercules rig operating on Galp Energia's Mopane-1x exploration well in Namibian waters.",
    outcome: `Afrishore delivered the integrated shore base and crewing scope for Galp's Deepsea Hercules campaign in Namibia's Orange Basin, running operations across Walvis Bay and Lüderitz. The rig, owned by SFL Corporation and managed by Odfjell Drilling, was supported by an Afrishore scope covering cargo movements, crew rotations and customs lodgements from mobilisation through to demobilisation.

The campaign was delivered on schedule and within budget, with zero recordable incidents across the scope.

The shore base operation was built around two requirements. First, continuity of cargo and crew flow between two ports several hundred kilometres apart, sequenced to the rig's operational tempo rather than the working day. Second, customs and regulatory execution capable of holding pace with that tempo. Working in lock-step with Namibian Customs and the relevant authorities, the Afrishore team managed the import, bonding, exemption and rebate processes required to keep the Deepsea Hercules on station for the duration of the campaign, avoiding unnecessary port calls and protecting rig productivity. Time-critical filings were lodged outside standard hours where the schedule required it, so that inbound critical items cleared without delaying operations.

The workforce behind the scope drew on uninterrupted Namibian shore base experience since 2022, working alongside international specialists across both ports.

For Afrishore, the Deepsea Hercules campaign for Galp is a representative example of the integrated capability Afrishore provides to Orange Basin operators: shore base logistics, materials handling, specialist offshore personnel and the customs and authority management that holds a campaign's schedule together. Subsequent campaigns and rigs were supported on exactly the same basis.`,
    featured: false,
    published: true,
  },
  {
    slug: "deepsea-mira-venus-1x",
    title: "Deepsea Mira: Venus-1x Drilling",
    client: "Odfjell Drilling / Northern Ocean LTD",
    year: "2023–2024",
    port: "Walvis Bay / Lüderitz",
    serviceTypes: ["ship-rig-agency", "supply-base"],
    vessel: "Deepsea Mira",
    assetType: "rig",
    heroImage: "/images/projects/deepsea-mira-venus-1x.jpg",
    summary: "Drilling on the Venus-1x well — first in the multi-year Deepsea Mira deployment in Namibian waters.",
    featured: false,
    published: true,
  },
  {
    slug: "deepsea-mira-tamboti-1x",
    title: "Deepsea Mira: Tamboti-1x Drilling",
    client: "Odfjell Drilling / Northern Ocean LTD",
    year: "2024–2025",
    port: "Walvis Bay / Lüderitz",
    serviceTypes: ["ship-rig-agency", "supply-base"],
    vessel: "Deepsea Mira",
    assetType: "rig",
    heroImage: "/images/projects/deepsea-mira-tamboti-1x.jpg",
    secondaryImage: {
      src: "/images/projects/deepsea-mira-tamboti-1x-luderitz.jpg",
      alt: "Afrishore quayside logistics at the Port of Lüderitz — vessel deck-plan execution and cargo preparation for the TotalEnergies Tamboti-1X campaign, Namibia",
      caption:
        "Afrishore's Lüderitz logistics in full flow: turnkey quayside management, vessel deck-plan execution and cargo preparation ahead of departure: one of two shore bases run simultaneously with Walvis Bay.",
    },
    summary: "Continued Deepsea Mira drilling campaign on the Tamboti-1x well, with Afrishore providing full onshore logistics.",
    outcome: `The TotalEnergies Tamboti-1X campaign marked another defining chapter in the unfolding story of Namibia's Orange Basin and Afrishore was proud to play a notable role in its delivery. Building on the momentum of the basin's recent discoveries, the programme called for Deepsea Mira's shore base logistics to run simultaneously out of Walvis Bay and Lüderitz, paired with crewing capability that could match the pace, scale and technical complexity of a frontier deepwater operation. From day one we mobilised an integrated package of shore base logistics, materials handling and the deployment of specialist offshore personnel, engineered to keep the rig supplied, the schedule intact and the operation moving without compromise.

What set Tamboti-1X apart was the rare combination of operational ambition and disciplined execution. The campaign was completed on schedule and within budget, underpinned by a safety record that speaks to the team's unwavering commitment to QHSE: zero recordable incidents across the entire duration of our scope in both locations. Behind those numbers stands a workforce we are particularly proud of: a high proportion of Namibian shore base personnel, developed through our local content and skills transfer programmes and now drawing on uninterrupted operational experience since 2022, working shoulder-to-shoulder with international specialists. It is tangible proof that world-class deepwater exploration and meaningful local participation are not competing objectives; they reinforce each other.

For Afrishore, Tamboti-1X was more than a successful campaign, it was a proof point for the integrated logistics and crewing model we have built specifically for Namibia's offshore sector. As the Orange Basin continues to attract some of the most ambitious exploration activity in the world, we stand ready to support the next campaign, and the one after that, with the same standards of safety, reliability and Namibian capability.`,
    featured: false,
    published: true,
  },
  {
    slug: "deepsea-mira-volans-kharas",
    title: "Deepsea Mira: Volans-1x & Kharas-1 Drilling",
    client: "Odfjell Drilling / Northern Ocean LTD",
    year: "2025–2026",
    port: "Walvis Bay",
    serviceTypes: ["ship-rig-agency", "supply-base"],
    vessel: "Deepsea Mira",
    assetType: "rig",
    heroImage: "/images/projects/deepsea-mira-volans-kharas.jpg",
    secondaryImage: {
      src: "/images/projects/deepsea-mira-volans-kharas-riser-demob.jpg",
      alt: "Deepsea Mira drilling riser joints on a PSV deck at Walvis Bay's Jetty 8 — post-campaign riser demobilisation to Afrishore's offshore supply base, Namibia",
      caption:
        "Deepsea Mira riser demobilisation after the Volans-1x and Kharas-1 campaign: riser joints shipped by PSV to Walvis Bay's Jetty 8 berth and returned to Afrishore's offshore supply base for maintenance and storage.",
      portrait: true,
    },
    summary: "Back-to-back two-well campaign on the Deepsea Mira covering Volans-1x and Kharas-1, run from Afrishore's Walvis Bay offshore supply base.",
    outcome: `When an operator changes but the rig does not, the test is whether a single day of productivity is lost in the handover. On the Deepsea Mira in Namibia's Orange Basin, across back-to-back campaigns for two different operators, none was.

Afrishore delivered the integrated shore base and crewing scope behind two consecutive programmes on the Deepsea Mira, running shore base logistics out of its Walvis Bay offshore supply base. The first was Volans-1x. The second, coming directly off it on the same rig, was Kharas-1. The defining moment sat between them: the transition. It required the exemption and rebate position to move from the outgoing operator to the incoming one. The conventional path would have called the Deepsea Mira and her supporting fleet back to Walvis Bay to complete the handover, costing schedule and rig time. Working in lock-step with Namibian Customs and operator representatives, the Afrishore team supported the exemption and rebate transfer in-field. The rig did not call port. The schedule held. The incoming operator was operational from the first hour of its scope.

The transition did not happen in isolation. It rested on the scope delivered through Volans-1x, where the same integrated package (shore base logistics, materials handling and the deployment of specialist offshore personnel) kept the rig supplied and the schedule intact through mobilisation to completion, including the import, bonding, exemption and rebate processes that keep a rig and her fleet productive in-field for a full campaign. By the time Kharas-1 began, the shore base, the systems and the workforce were already proven on that rig. The operator changed. Almost nothing else had to.

The people behind it. Both campaigns drew on a workforce with uninterrupted Namibian shore base experience since 2022, working shoulder-to-shoulder with international specialists. That continuity of people is what allowed continuity of operation.

Across the combined Volans-1x and Kharas-1 scope, both campaigns were delivered on schedule and within budget with zero recordable incidents.

For Afrishore, the Deepsea Mira programmes demonstrate what Namibia's offshore sector increasingly demands: integrated logistics, expert customs and authority management, deep local content and the ability to transition campaigns from one operator to the next without losing a single day of rig productivity. As the Orange Basin continues to attract some of the most ambitious exploration activity in the world, Afrishore stands ready to support the next campaign, and the one after that, with the same standards of safety, reliability and Namibian capability.`,
    featured: false,
    published: true,
  },
  {
    slug: "petrosa-orca-remobilisation",
    title: "PetroSA: ORCA Remobilisation Tow",
    client: "PetroSA",
    year: "2022",
    port: "Mossel Bay",
    serviceTypes: ["ship-rig-agency", "integrated-logistics"],
    heroImage: "/images/projects/petrosa-orca-remobilisation.jpg",
    summary: "Vessel remobilisation and ocean tow operations for PetroSA, coordinated from Mossel Bay.",
    featured: false,
    published: true,
  },
  {
    slug: "sbm-subsea-concrete-mattress",
    title: "SBM Offshore: Subsea Concrete Mattress",
    client: "SBM Offshore",
    year: "2015",
    port: "Mossel Bay",
    serviceTypes: ["subsea-services", "integrated-logistics"],
    heroImage: "/images/projects/sbm-subsea-concrete-mattress.jpg",
    summary: "Subsea protection works using concrete mattress installation for pipeline crossings.",
    featured: false,
    published: true,
  },
  {
    slug: "oceaneering-subsea-grout-bags",
    title: "Oceaneering: Subsea Grout Bags",
    client: "Oceaneering",
    year: "2018",
    port: "Cape Town",
    serviceTypes: ["subsea-services", "integrated-logistics"],
    heroImage: "/images/projects/oceaneering-subsea-grout-bags.jpg",
    summary: "200 subsea grout bags manufactured, certified, secured and exported from Cape Town to Angola: a single coordinated consignment.",
    tagline: "Subsea pipeline stabilisation with Afrishore's grout bag solution",
    outcome: `Oceaneering required 200 subsea grout bags for the stabilisation of subsea infrastructure offshore Angola. Each bag had to be manufactured to subsea specification, filled, certified, secured for sea freight, and exported as a single coordinated consignment.

Afrishore managed the scope end to end. Each unit was manufactured in polypropylene, subsea rated and certified, packed with 25kg grout charges and fitted with certified lifting slings. All 200 units were then individually secured and wrapped for sea freight transport. The consignment was loaded out of A-Berth at the Port of Cape Town onto a coastal liner for carriage to Angola.

Subsea grout bags are a stabilisation product where the integrity of every unit matters. The certification, the rated material and the lifting slings are not finishing touches. They are what allows a bag to be lifted, placed and to perform on the seabed. A single compromised unit is one that cannot do its job. The securing and wrapping of each of the 200 bags was therefore not incidental to the work. It was the work.

Afrishore delivered the full consignment, manufactured to specification, certified, secured and exported, through a single point of accountability from manufacture to supply onto the vessel.`,
    featured: false,
    published: true,
  },
  {
    slug: "sbm-subsea-pipelaying",
    title: "SBM Offshore: Subsea Pipelaying",
    client: "SBM Offshore",
    year: "2013",
    port: "Mossel Bay",
    serviceTypes: ["subsea-services", "integrated-logistics"],
    heroImage: "/images/projects/sbm-subsea-pipelaying.jpg",
    summary: "Subsea pipeline installation campaign — one of Afrishore's earliest documented projects.",
    featured: false,
    published: true,
  },
  {
    slug: "baker-hughes-tanzania-explosives-charter",
    title: "Baker Hughes: Tanzania Explosives Air Charter",
    client: "Baker Hughes",
    year: "2024",
    port: "Dar es Salaam via Johannesburg",
    locationLabel: "Airport",
    serviceTypes: ["integrated-logistics"],
    heroImage: "/images/projects/baker-hughes-tanzania-explosives-charter.jpg",
    summary: "Urgent multi-class explosives air charter from O.R. Tambo to Dar es Salaam, supporting Baker Hughes' gas-well intervention contract at Songo Songo Island.",
    outcome: `In October 2024 Afrishore was engaged by Baker Hughes Oil Services to plan, permit and execute the urgent air movement of a 588 kg multi-class explosives consignment from Houston, Texas to Dar es Salaam, in support of gas-well intervention operations at the Songo Songo Island gas field in Kilwa District. The original Houston–Luxembourg–Nairobi–Dar es Salaam routing through Kenya was abandoned mid-cycle when the Tanzanian import permit lapsed and the Kenyan transit permit could not be secured in time. Baker Hughes' end-client pivoted to terminate the inbound leg in Johannesburg and complete the final sector on a dedicated South African charter.

Within a fifteen-day re-plan from the route change, Afrishore renewed the Tanzanian import permit, replaced a charter aircraft that suffered an unscheduled technical failure, drafted and reissued the master air waybill twice to satisfy in-transit clearance requirements, obtained four regional overflight and landing permits across Zimbabwe, Mozambique, Malawi and Tanzania and prepared the South African Police Service dangerous-goods documentation. The four UN-classified Hazard Class 1 articles (53 pieces of electric detonators, shaped charges, detonating cord and boosters) were palletised and loaded under SAPS supervision at the Bidair dangerous-goods warehouse at O.R. Tambo International Airport.

The Afrishore-arranged charter flight departed O.R. Tambo and landed in Dar es Salaam the same afternoon, with the shipment delivered to the consignee in full and on time, with no claims and no compliance findings against any party. Two weeks later Afrishore processed a follow-on detonator shipment against the same project file with the same efficiencies met.

Five separate regulators converged into a single documentary chain: the South African Police Service Explosives Section, the Tanzanian Ministry of Minerals, the Tanzania Civil Aviation Authority and the civil aviation authorities of Zimbabwe, Mozambique and Malawi. Delivered as one project file rather than five parallel workstreams, it became a repeatable framework for the urgent movement of dangerous goods across the Southern African region.`,
    featured: true,
    published: true,
  },
];

// Helper: get only featured projects, sorted reverse-chronologically (newest first)
// Primary key: start year descending. Tiebreaker: end year descending.
export const featuredProjects = projects
  .filter(p => p.featured && p.published)
  .sort((a, b) => {
    const aParts = a.year.split(/[–-]/);
    const bParts = b.year.split(/[–-]/);
    const aStart = parseInt(aParts[0] || "0");
    const bStart = parseInt(bParts[0] || "0");
    if (bStart !== aStart) return bStart - aStart;
    const aEnd = parseInt(aParts[aParts.length - 1] || "0");
    const bEnd = parseInt(bParts[bParts.length - 1] || "0");
    return bEnd - aEnd;
  });

// Helper: get all published, sorted reverse-chronologically (newest first).
// Primary: start year desc. Tiebreaker: end year desc.
// Matches the featuredProjects sort so the homepage tile order and the
// /projects index list stay consistent.
export const allProjects = projects
  .filter(p => p.published)
  .sort((a, b) => {
    const aParts = a.year.split(/[–-]/);
    const bParts = b.year.split(/[–-]/);
    const aStart = parseInt(aParts[0] || "0");
    const bStart = parseInt(bParts[0] || "0");
    if (bStart !== aStart) return bStart - aStart;
    const aEnd = parseInt(aParts[aParts.length - 1] || "0");
    const bEnd = parseInt(bParts[bParts.length - 1] || "0");
    return bEnd - aEnd;
  });
