// Afrishore project data
// Featured 6 (full case studies) + 12 light entries
// Replace heroImage paths with real photos when available

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  port: string;
  // Override the "Port" label shown on the case-study metadata block –
  // e.g. "Airport" for an air-charter project. Falls back to "Port".
  locationLabel?: string;
  serviceTypes: string[];
  summary: string;
  // SEO overrides for high-intent pages. metaTitle replaces the <title>
  // (lead with the SEARCH TERM, not the client, when they differ);
  // metaDescription replaces summary as the meta description. Both fall
  // back gracefully when unset — display title / H1 are unaffected.
  metaTitle?: string;
  metaDescription?: string;
  tagline?: string; // Optional gold sub-headline under the H1 (case-study page)
  outcome?: string; // Full case study body, only for featured
  heroImage?: string; // Path under /public; falls back to gradient placeholder
  // Optional hand-written alt for the hero image; falls back to a
  // string generated from title/vessel/port/year. Used both as the
  // page-level <img alt> and as og:image:alt for social shares.
  heroAlt?: string;
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
  // Optional in-body MP4 – self-hosted via /public/videos/. Rendered with
  // an HTML5 <video> tag, lazy poster, and a VideoObject schema node.
  videoEmbed?: {
    src: string;            // path under /public, e.g. /videos/foo.mp4
    posterSrc?: string;     // poster image path; falls back to heroImage
    description: string;    // schema/SEO description (VideoObject.description,
                            //  alt-equivalent for the player). Not rendered
                            //  on the page – kept invisible to readers.
    durationISO: string;    // ISO 8601 duration for schema, e.g. "PT30S"
    width?: number;         // intrinsic pixel width (default 1280)
    height?: number;        // intrinsic pixel height (default 720)
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
    summary: "Integrated onshore logistics for the Brulpadda discovery campaign – the largest gas-condensate find in South African waters in a decade.",
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

For the duration of the SPS, Afrishore handled the full shore-side scope: temporary importation of spare parts and project equipment, customs clearance, warehousing of project cargo, abnormal trucking for oversized components, crane and rigging coordination, waste management and crew rotation logistics including visa and immigration for international specialist teams. The SPS scope brought multiple discipline crews to Walvis Bay simultaneously and every visa, every customs entry and every supply chain link was coordinated from the Port of Walvis Bay's Oil & Gas Section, where Afrishore is permanently embedded. A highlight of the project was being involved in the assembly and shipping out of 15-tonne Stevshark MK5 anchors in collaboration with Delmar Systems.

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
      alt: "Decommissioned Deepsea Mira blowout preventer (BOP), 130+ tonnes, on a multi-axle heavy-lift low-bed trailer at the Port of Walvis Bay for breakbulk export – Afrishore heavy-lift logistics",
      caption:
        "The decommissioned Deepsea Mira BOP – 130+ tonnes – on a multi-axle heavy-lift low-bed trailer at the Port of Walvis Bay, prepared for its return-to-origin sailing on a breakbulk liner: the outbound leg of a BOP exchange Afrishore coordinated end-to-end.",
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
    summary: "Onshore logistics for the South African landing of the 2Africa subsea cable – one of the largest telecoms infrastructure projects ever built.",
    metaTitle: "2Africa Subsea Cable Landing: South Africa | Afrishore",
    metaDescription: "Onshore logistics for the South African landing of the 2Africa subsea cable – 45,000 km / 180 Tbps across 33 countries. Customs, lifting, crew and cross-border freight by Afrishore.",
    outcome: `The 2Africa subsea cable system is one of the largest telecommunications infrastructure projects ever built: 45,000 km of cable connecting 33 countries across three continents, with a design capacity of 180 Tbps. Between 2022 and 2023, Afrishore supported the South African landing operations on behalf of LD TravOcean, the specialist subsea contractor responsible for the African shore-end works.

The 2Africa project demanded a different operating model than offshore oil and gas. Afrishore coordinated onshore logistics across multiple South African landing points: customs clearance for specialist subsea equipment, temporary importation of cable-handling gear, storage and trucking arrangements, lifting and mobilisation/demobilisation, immigration for international cable specialists, accommodation and transport, crew change coordination, and cross-border freight on both sea and air. Every operation was time-bound to the cable lay sequence, work that ran 24/7 once vessels were on station and out of multiple South African ports.

Trusted by LD TravOcean across every South African landing of the 45,000 km system.`,
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
    videoEmbed: {
      src: "/videos/dock-titan-cape-town-reunion.mp4",
      // Optimised WebP poster – see Orca entry for rationale.
      posterSrc: "/images/projects/dock-titan-cape-town-reunion.webp",
      description: "The Titan Floating Dock being uplifted by Boskalis's semi-submersible heavy-lift vessel MV Transshelf at the Port of Cape Town, 2025 – onshore coordination by Afrishore for Piriou Naval Services and the Port of Réunion.",
      durationISO: "PT52S",
      width: 1280,
      height: 720,
    },
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
    summary: "First drilling attempt at Brulpadda on the Eirik Raude rig – a campaign that laid the groundwork for the 2018–19 discovery.",
    outcome: `The Brulpadda campaign marked Afrishore's first appointment as offshore supply base operator, under the direction of TotalEnergies.

The mandate covered operation of the Mossel Bay offshore supply base in support of the initial Brulpadda drilling campaign. TotalEnergies' operational standards, logistical methodologies and supply base disciplines were transferred to Afrishore over the course of the campaign and applied directly in the running of the base.

The proof of that transfer came at close-out: Afrishore performed a turnkey demobilisation of the campaign out of the Port of Cape Town, executed to the standards established during the operation, with zero safety-related incidents across the project.

The disciplines established on that first appointment became the operating template for every Afrishore supply base since – including the base behind the 2018–2019 campaign that delivered the Brulpadda discovery.`,
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
    year: "2022–2023",
    port: "Cape Town",
    serviceTypes: ["ship-rig-agency", "supply-base", "integrated-logistics"],
    vessel: "Island Innovator",
    assetType: "rig",
    heroImage: "/images/projects/eco-atlantic-gazania-1.jpg",
    tagline: "Turnkey campaign logistics · Block 2B, West Coast · Port of Cape Town",
    summary: "Turnkey project logistics and exclusive offshore supply base management from the Port of Cape Town for Eco Atlantic's first South African drilling campaign – the Gazania-1 exploration well on Block 2B.",
    outcome: `Gazania-1 was Eco Atlantic Oil & Gas's first South African drilling campaign: an exploration well on Block 2B, off the country's west coast. Afrishore was appointed to oversee turnkey project logistics for the campaign's stakeholders – Island Drilling's semi-submersible Island Innovator, AMSOL's support vessel Umkhuseli, Baker Hughes and NRG Group – one accountable logistics partner across the rig, marine and services contractors.

The offshore supply base for the campaign was managed exclusively by Afrishore out of the Port of Cape Town for the three-month duration. The base ran the full quayside scope: quayside management and berth scheduling, anchor spooling, pipe storage, mobilisation and bunkering – every port-side movement sequenced to the offshore schedule. Alongside the port operation, Afrishore managed full customs compliance for all project cargo moved on- and offshore, in and out of South Africa, across the campaign.

For a first-time operator in South African waters, Gazania-1 demonstrated the value of a single point of accountability: one base, one team and one coordination point between operator, rig and service contractors – the same integrated model Afrishore runs for drilling campaigns across the region.`,
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
    endCustomer: "TotalEnergies",
    year: "2023–2024",
    port: "Walvis Bay / Lüderitz",
    serviceTypes: ["ship-rig-agency", "supply-base", "crew-visa"],
    vessel: "Deepsea Mira",
    assetType: "rig",
    heroImage: "/images/projects/deepsea-mira-venus-1x.jpg",
    tagline: "Venus-1X re-entry, side-track & DST · Dual-base support · Walvis Bay & Lüderitz",
    summary: "Shore base logistics for the Deepsea Mira's re-entry, side-track and drill stem test of TotalEnergies' Venus-1X well in Namibia's Orange Basin – run on a dual-base model out of Walvis Bay and a dedicated Lüderitz satellite base.",
    outcome: `Venus-1x opened the Deepsea Mira's multi-year Namibian deployment – and established the dual-base shore operation Afrishore has run for the rig ever since. The primary offshore supply base at Walvis Bay supported the campaign while simultaneously servicing the Deepsea Bollsta, two rigs supplied concurrently from a single base, while a dedicated satellite offshore supply base at Lüderitz, operated by Afrishore exclusively for the Deepsea Mira, put quayside support closer to the well. All cargo moving between the two ports, and on and offshore, ran under full chain-of-custody compliance.

The well operation itself was a milestone in the appraisal of TotalEnergies' landmark Venus discovery. The Deepsea Mira re-entered the Venus-1X well, side-tracked it and conducted a crucial drill stem test (DST) – the flow test that converts a discovery into measured reservoir performance – which yielded highly positive flow results. Throughout, Afrishore's shore base logistics kept the rig supplied across both ports.

Crew rotation ran as its own coordinated chain. Afrishore consolidated crews in Windhoek, wherefrom they subsequently flew south by fixed-wing charter to the helicopter base at Oranjemund for offshore crew changes. Full crew movement control, from arrival in Namibia to handover at the heliport, managed end to end.

The dual-base model proven on Venus-1x carried directly into the Deepsea Mira's subsequent campaigns at Tamboti-1x, Volans-1x and Kharas-1 – the start of an unbroken run of Afrishore shore base support behind the rig's Namibian programme.`,
    featured: false,
    published: true,
  },
  {
    slug: "deepsea-mira-tamboti-1x",
    title: "Deepsea Mira: Tamboti-1x Drilling",
    client: "Odfjell Drilling / Northern Ocean LTD",
    endCustomer: "TotalEnergies",
    year: "2024–2025",
    port: "Walvis Bay / Lüderitz",
    serviceTypes: ["ship-rig-agency", "supply-base"],
    vessel: "Deepsea Mira",
    assetType: "rig",
    heroImage: "/images/projects/deepsea-mira-tamboti-1x.jpg",
    secondaryImage: {
      src: "/images/projects/deepsea-mira-tamboti-1x-luderitz.jpg",
      alt: "Afrishore quayside logistics at the Port of Lüderitz – vessel deck-plan execution and cargo preparation for the TotalEnergies Tamboti-1X campaign, Namibia",
      caption:
        "Afrishore's Lüderitz logistics in full flow: turnkey quayside management, vessel deck-plan execution and cargo preparation ahead of departure: one of two shore bases run simultaneously with Walvis Bay.",
    },
    summary: "Continued Deepsea Mira drilling campaign on the Tamboti-1x well, with Afrishore providing full onshore logistics.",
    outcome: `The Tamboti-1X exploration well – drilled by the Deepsea Mira for TotalEnergies in Namibia's Orange Basin – required shore base logistics running simultaneously out of Walvis Bay and Lüderitz, paired with crewing capable of matching the pace and technical complexity of a frontier deepwater operation. Afrishore mobilised the integrated package from day one: shore base operations, materials handling and the deployment of specialist offshore personnel, sequenced to keep the rig supplied and the drilling schedule intact across both ports.

The campaign completed on schedule and within budget, with zero recordable incidents across the full Afrishore scope in both locations. The shore base workforce was predominantly Namibian – personnel developed through Afrishore's local content and skills transfer programmes, carrying uninterrupted Orange Basin operational experience since 2022 – working alongside international specialists.

Tamboti-1X proved the dual-port logistics and crewing model Afrishore built for Namibia's offshore sector. The same team, systems and infrastructure carried directly into the Deepsea Mira's next campaigns at Volans-1x and Kharas-1.`,
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
      alt: "Deepsea Mira drilling riser joints on a PSV deck at Walvis Bay's Jetty 8 – post-campaign riser demobilisation to Afrishore's offshore supply base, Namibia",
      caption:
        "Deepsea Mira riser demobilisation after the Volans-1x and Kharas-1 campaign: riser joints shipped by PSV to Walvis Bay's Jetty 8 berth and returned to Afrishore's offshore supply base for maintenance and storage.",
      portrait: true,
    },
    summary: "Back-to-back two-well campaign on the Deepsea Mira covering Volans-1x and Kharas-1, run from Afrishore's Walvis Bay offshore supply base.",
    outcome: `When an operator changes but the rig does not, the test is whether a single day of productivity is lost in the handover. On the Deepsea Mira in Namibia's Orange Basin, across back-to-back campaigns for two different operators, none was.

Afrishore delivered the integrated shore base and crewing scope behind two consecutive programmes on the Deepsea Mira, running shore base logistics out of its Walvis Bay offshore supply base. The first was Volans-1x. The second, coming directly off it on the same rig, was Kharas-1. The defining moment sat between them: the transition. It required the exemption and rebate position to move from the outgoing operator to the incoming one. The conventional path would have called the Deepsea Mira and her supporting fleet back to Walvis Bay to complete the handover, costing schedule and rig time. Working in lock-step with Namibian Customs and operator representatives, the Afrishore team supported the exemption and rebate transfer in-field. The rig did not call port. The schedule held. The incoming operator was operational from the first hour of its scope.

The transition did not happen in isolation. It rested on the scope delivered through Volans-1x, where the same integrated package (shore base logistics, materials handling and the deployment of specialist offshore personnel) kept the rig supplied and the schedule intact through mobilisation to completion, including the import, bonding, exemption and rebate processes that keep a rig and her fleet productive in-field for a full campaign. By the time Kharas-1 began, the shore base, the systems and the workforce were already proven on that rig. The operator changed. Almost nothing else had to.

The people behind it. Both campaigns drew on a workforce with uninterrupted Namibian shore base experience since 2022, working shoulder-to-shoulder with international specialists. That continuity of people is what allowed continuity of operation.

Both wells closed out to schedule and to budget, with the team's recordable-incident-free record – unbroken since Namibian operations began in 2022 – carried through both campaigns.

For Afrishore, the Deepsea Mira programmes demonstrate what Namibia's offshore sector increasingly demands: integrated logistics, expert customs and authority management, deep local content and the ability to transition campaigns from one operator to the next without losing a single day of rig productivity. As the Orange Basin continues to attract some of the most ambitious exploration activity in the world, Afrishore stands ready to support the next campaign, and the one after that, with the same standards of safety, reliability and Namibian capability.`,
    featured: false,
    published: true,
  },
  {
    slug: "petrosa-orca-remobilisation",
    title: "Logistica: Orca Single-Voyage Tow to Alang",
    client: "Logistica Inc.",
    year: "2022",
    port: "Mossel Bay",
    serviceTypes: ["ship-rig-agency", "integrated-logistics"],
    vessel: "Orca",
    assetType: "rig",
    heroImage: "/images/projects/petrosa-orca-remobilisation.jpg",
    tagline: "Single-voyage delivery tow · Mossel Bay → Alang · February 2022",
    summary: "Five parallel regulatory workstreams cleared inside a 23-day window for the semi-submersible Orca's single-voyage delivery tow from Mossel Bay to Alang, India.",
    videoEmbed: {
      src: "/videos/orca-mossel-bay-alang-2022.mp4",
      // Use the optimised WebP poster (16% lighter than the JPG hero
      // and explicitly preloaded in <head> via BaseLayout – closes the
      // LCP discovery delay that otherwise had this poster firing at
      // ~3.5 s in Cloudflare RUM).
      posterSrc: "/images/projects/petrosa-orca-remobilisation.webp",
      description: "The Orca semi-submersible under tow by AHTS Hulk II out of Mossel Bay anchorage, February 2022 – start of the single-voyage delivery to Alang, India.",
      durationISO: "PT30S",
      width: 1280,
      height: 720,
    },
    outcome: `In early 2022 Afrishore was engaged by Logistica Inc. to coordinate and secure the full regulatory clearance chain required to extract the semi-submersible Mobile Offshore Unit Orca from anchorage off Mossel Bay and dispatch her on a single-voyage delivery tow to Alang, India for recycling. Ownership had just transferred to Logistica from the previous custodian; the contracted towing vessel AHTS Hulk II was already en route at significant daily cost; and a 23-day operational window had been imposed on the rig's continued anchorage. Every outstanding approval, sub-sea preparation and tow handover had to fit inside that envelope.

Within the window Afrishore took ownership of five parallel regulatory workstreams: South African maritime authority clearances culminating in the Certificate of Inspection for tow; coastal-environmental endorsement of the underwater cleaning methodology – a scope with no recent precedent in Mossel Bay waters for an operation of this scale; Class and Flag re-issuance under a new Palau Certificate of Registry following the ownership transfer; appointment and approval of an experienced Marine Warranty Surveyor; and the full pre-tow document chain – towage manual, stability calculations, 49.6-day passage plan via Port Louis, bollard-pull and tow-wire records, magnetic-particle inspection of the tow-point welds, and Hull, P&I, Wreck Removal and Bunker Pollution insurance certificates. Most of these items had to be built from scratch in days rather than weeks, and several called for novel positioning where the regulator had no recent precedent of comparable scale to reference.

Every approval landed inside window. The coastal-environmental endorsement was secured on the day of the ownership transfer itself – a direct function of pre-positioning the technical case with the regulator weeks before handover. Class and tow certificates followed within days. The Marine Warranty Surveyor's Certificate of Approval and the maritime authority Certificate of Inspection were both issued on the same morning the tow departed – twelve days inside the SAMSA deadline. AHTS Hulk II picked up the tow that afternoon, with daily progress reporting maintained until the unit was clear of 200 nautical miles of the South African coast.

Compressed-timeline rig extractions from South African waters remain achievable where the contracting agent holds standing relationships with the maritime, coastal-environmental, class and warranty bodies involved, and where the underwater preparation scope can be defensibly limited to the minimum needed for safe towage. The Orca campaign was carried by the depth of those relationships and by the pre-positioning of the technical package weeks before the formal ownership transfer.`,
    featured: false,
    published: true,
  },
  {
    slug: "sbm-subsea-concrete-mattress",
    title: "SBM Offshore: Subsea Concrete Mattress Installation",
    client: "SBM Offshore",
    year: "2015",
    port: "Mossel Bay",
    serviceTypes: ["subsea-services", "integrated-logistics"],
    heroImage: "/images/projects/sbm-subsea-concrete-mattress.jpg",
    tagline: "Concrete mattress installation · Mossel Bay, South Africa · 2015",
    summary: "Concrete mattress installation for subsea pipeline protection – SBM Offshore's pipeline crossing campaign supported by Afrishore at the Port of Mossel Bay, South Africa.",
    metaTitle: "Subsea Concrete Mattress Installation | Afrishore",
    metaDescription: "Concrete mattress installation for subsea pipeline and cable protection – pre-cast articulated blocks lowered to the seabed. SBM Offshore campaign, Port of Mossel Bay.",
    outcome: `Afrishore supported SBM Offshore on a 2015 concrete mattress installation campaign for subsea pipeline crossing protection, working out of the Port of Mossel Bay on the South African south coast. Concrete mattresses are pre-cast articulated concrete blocks linked by polypropylene rope, lowered onto the seabed to protect submarine pipelines, umbilicals and subsea structures from anchor strikes, fishing gear, seabed scour and dropped objects. In South African waters the technique is the standard method for hardening pipeline crossings and seabed infrastructure against the mechanical risks of the offshore environment.

The Mossel Bay scope brought a mix of project cargo, customs and quayside coordination challenges into a single window. Concrete mattress consignments are heavy, dimensionally awkward and time-critical: each mattress weighs in the order of three tonnes, requires specialised lifting and slinging, and has to arrive cleared, surveyed and pre-rigged for the installation window agreed with the contracting vessel. Mossel Bay is not a project port by default, which makes pre-positioning of cranage, laydown and stevedoring decisive – delays at the quay translate directly into vessel standby cost offshore.

Afrishore handled the integrated-logistics scope on the South African side of the campaign: project cargo handling and abnormal-load coordination for the inbound concrete mattress consignment, customs clearance and temporary importation documentation, port agency at Mossel Bay covering berth scheduling and port-authority liaison, immigration and crew change for the technical team accompanying the spread, and quayside coordination from arrival through to vessel mobilisation alongside SBM Offshore's marine spread. The campaign also drew on the established Mossel Bay supply-base relationships Afrishore had built operating the TotalEnergies Brulpadda and Luiperd campaigns out of the same port.

The campaign sits alongside Afrishore's wider subsea installation track record in South Africa and Namibia, which spans concrete mattress installation, subsea pipelaying, grout-bag protection and subsea cable landing operations. Operators contracting subsea protection work into South African waters use Afrishore as the integrated logistics, customs and port-agency point of accountability – the seam between the inbound consignment, the contracting vessel and the SAMSA-regulated South African port system.`,
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
    summary: "Subsea grout bag installation logistics: 200 subsea grout bags manufactured, certified, secured and exported by Afrishore from Cape Town, South Africa to offshore Angola for Oceaneering – single coordinated consignment for subsea infrastructure stabilisation.",
    metaTitle: "Subsea Grout Bags – Certified Manufacture & Supply | Afrishore",
    metaDescription: "Subsea grout bags for pipeline, free-span and subsea-structure stabilisation – manufactured, certified, sling-rigged and exported from Cape Town. 200-unit Oceaneering campaign.",
    tagline: "Subsea grout bag installation · Cape Town, South Africa · 2018",
    outcome: `Oceaneering required 200 subsea grout bags for the stabilisation of subsea infrastructure offshore Angola. Each bag had to be manufactured to subsea specification, filled, certified, secured for sea freight, and exported as a single coordinated consignment out of South Africa.

Subsea grout bags are flexible polypropylene fabric units, charged with high-strength grout and lowered onto the seabed to stabilise pipelines, free spans, manifolds, jumpers and other subsea structures. In service they conform to the contours of the seabed and harden into a load-bearing support – the standard solution where rigid mattresses cannot follow the topography.

Afrishore managed the scope end to end. Each unit was manufactured in polypropylene, subsea rated and certified, packed with 25 kg grout charges and fitted with certified lifting slings. All 200 units were then individually secured and wrapped for sea freight transport. The consignment was loaded out of A-Berth at the Port of Cape Town, South Africa onto a coastal liner for carriage to Angola.

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
    summary: "Subsea pipeline installation campaign – one of Afrishore's earliest documented projects.",
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
    heroAlt:
      "Multi-class explosives charter consignment on the cargo loader at Dar es Salaam, late afternoon 11 October 2024 – minutes after off-load from the Afrishore-arranged South African charter; urgent air movement of Hazard Class 1 articles from O.R. Tambo to Tanzania for Baker Hughes.",
    summary: "Urgent multi-class explosives air charter from Houston, via O.R. Tambo to Dar es Salaam, supporting Baker Hughes' gas-well intervention contract.",
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
