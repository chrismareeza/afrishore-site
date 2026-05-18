// Afrishore project data
// Featured 6 (full case studies) + 12 light entries
// Replace heroImage paths with real photos when available

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  port: string;
  serviceTypes: string[];
  summary: string;
  outcome?: string; // Full case study body, only for featured
  heroImage?: string; // Path under /public; falls back to gradient placeholder
  featured: boolean;
  published: boolean;
  // For end-customer references in copy (e.g. Galp, Meta)
  endCustomer?: string;
  // Optional operational details
  vessel?: string;
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
    heroImage: "/images/projects/totalenergies-brulpadda-discovery.jpg",
    summary: "Integrated onshore logistics for the Brulpadda discovery campaign — the largest gas-condensate find in South African waters in a decade.",
    outcome: `In February 2019, TotalEnergies announced the Brulpadda gas-condensate discovery — the largest hydrocarbon find in South African waters in over a decade, with estimates around one billion barrels of oil equivalent. Afrishore supported the Brulpadda Discovery Campaign (2018–2019) as the integrated onshore logistics partner, supplying the Deepsea Stavanger drilling unit throughout the campaign.

Brulpadda-1AX sits in Block 11B/12B, roughly 175 km off South Africa's southern coast — an ultra-deepwater well drilled in some of the most challenging current and weather conditions in the world (the Agulhas Current is one of the strongest western boundary currents on the planet). Afrishore handled the onshore supply base operations: temporary importation and customs clearance, warehousing and project cargo handling, rigging and waste management, crew logistics including immigration support for international specialists, vessel agency and port management, and full mobilisation/demobilisation coordination. Drilling a frontier well in 1,400 m of water demanded a shore-side operation with zero margin for error.

The Brulpadda discovery reopened South Africa's upstream story. Afrishore was the partner on the ground.`,
    featured: true,
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
    heroImage: "/images/projects/deepsea-bollsta-sps-walvis-bay.jpg",
    summary: "Integrated supply base operations for the 5-yearly recertification of the Deepsea Bollsta semi-submersible drilling unit.",
    outcome: `Mobile offshore drilling units must undergo a comprehensive Special Periodic Survey (SPS) every five years — a full hull, machinery, and safety systems recertification required by classification societies. In 2024, the Deepsea Bollsta completed its SPS at the Port of Walvis Bay, with Afrishore acting as the integrated onshore logistics partner throughout the survey period.

For the duration of the SPS, Afrishore handled the full shore-side scope: temporary importation of spare parts and project equipment, customs clearance, warehousing of project cargo, abnormal trucking for oversized components, crane and rigging coordination, waste management, and crew rotation logistics including visa and immigration for international specialist teams. The SPS scope brought multiple discipline crews to Walvis Bay simultaneously — every visa, every customs entry, every supply chain link coordinated from the Port of Walvis Bay's Oil & Gas Section, where Afrishore is permanently embedded.

The Bollsta returned to operations on schedule, recertified for another five-year operational cycle.`,
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
    heroImage: "/images/projects/deepsea-mira-sps-walvis-bay.jpg",
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
    title: "Facebook 2Africa: Subsea Cable Landing",
    client: "LD TravOcean",
    endCustomer: "Meta",
    year: "2022–2023",
    port: "Multiple SA coastal landings",
    serviceTypes: ["integrated-logistics", "crew-visa", "ship-rig-agency"],
    heroImage: "/images/projects/facebook-2africa.jpg",
    summary: "Onshore logistics for the South African landing of Meta's 2Africa subsea cable — one of the largest telecoms infrastructure projects ever built.",
    outcome: `The 2Africa subsea cable system is one of the largest telecommunications infrastructure projects ever built: 45,000 km of cable connecting 33 countries across three continents, with a design capacity of 180 Tbps. Between 2022 and 2023, Afrishore supported the South African landing operations on behalf of LD TravOcean, the specialist subsea contractor responsible for the African shore-end works.

The 2Africa project demanded a different operating model than offshore oil and gas. Afrishore coordinated onshore logistics across multiple South African landing points: customs clearance for specialist subsea equipment, temporary importation of cable-handling gear, storage and trucking arrangements, lifting and mobilisation/demobilisation, immigration for international cable specialists, accommodation and transport, crew change coordination, and cross-border freight on both sea and air. Every operation was time-bound to the cable lay sequence, work that ran 24/7 once vessels were on station and out of multiple South African ports.

Trusted by Meta's subsea contractor for one of the most significant infrastructure projects of the decade.`,
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
    heroImage: "/images/projects/totalenergies-brulpadda-2014.jpg",
    summary: "First drilling attempt at Brulpadda on the Eirik Raude rig — a campaign that laid the groundwork for the 2018–19 discovery.",
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
    heroImage: "/images/projects/deepsea-bollsta-jonker-1.jpg",
    summary: "Two-year drilling campaign on the Jonker-1 well, supported throughout from Walvis Bay.",
    featured: false,
    published: true,
  },
  {
    slug: "galp-hercules-mopane-1x",
    title: "Hercules: Mopane-1x Campaign",
    client: "Odfjell Drilling",
    endCustomer: "Galp Energia",
    year: "2023–2024",
    port: "Walvis Bay, Namibia",
    serviceTypes: ["ship-rig-agency", "supply-base", "integrated-logistics"],
    vessel: "Hercules",
    heroImage: "/images/projects/galp-hercules-mopane-1x.jpg",
    summary: "Turnkey onshore logistics for the Hercules rig operating on Galp Energia's Mopane-1x exploration well in Namibian waters.",
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
    heroImage: "/images/projects/deepsea-mira-tamboti-1x.jpg",
    summary: "Continued Deepsea Mira drilling campaign on the Tamboti-1x well, with Afrishore providing full onshore logistics.",
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
    heroImage: "/images/projects/deepsea-mira-volans-kharas.jpg",
    summary: "Current two-well campaign on the Deepsea Mira covering Volans-1x and Kharas-1, supported from Walvis Bay.",
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
    port: "Mossel Bay",
    serviceTypes: ["subsea-services", "integrated-logistics"],
    heroImage: "/images/projects/oceaneering-subsea-grout-bags.jpg",
    summary: "Subsea pipeline support and stabilisation using grout bag installations.",
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
    summary: "Subsea pipeline installation campaign — one of Afrishore's earliest documented projects.",
    featured: false,
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
