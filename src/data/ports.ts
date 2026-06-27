// Port landing pages – local-SEO targets for "ship / vessel / rig
// agent + [port]" across Afrishore's licensed port network.
//
// Two kinds of port:
//   • office  → Afrishore has a physical office here. The page carries
//     the SAME NAP (name/address/phone) as Contact.astro and the
//     LocalBusiness @id already emitted globally in BaseLayout, so the
//     citation is consistent (critical for local pack ranking). It
//     references that LocalBusiness via `localBusinessId`.
//   • licence → agency licence / operational coverage, no office. No
//     PostalAddress/geo is fabricated; the page is a Service targeting
//     the port as areaServed.
//
// Related case studies are auto-pulled in [slug].astro by matching a
// project's `port` string (substring, case-insensitive) to `matchPort`.
//
// Content below is substantive and deploy-ready but is the FIRST DRAFT
// from existing site data – refined per-port with the client one at a
// time (same workflow as the service pages).

export interface PortOffice {
  businessName?: string;     // exact registered name (NAP – must match GBP)
  localBusinessId: string;   // matches the @id in BaseLayout's @graph
  streetAddress: string;
  addressLocality: string;
  addressRegion?: string;
  addressCountry: string;    // ISO-2
  geo: { lat: number; lng: number };
  mapsUrl?: string;          // canonical Google Business Profile / Maps link
  phoneDisplay?: string;     // per-office number (else the central one)
  phoneE164?: string;        // tel: form of the above
}

export interface PortPage {
  slug: string;
  portName: string;          // "Walvis Bay"
  country: string;           // "Namibia" | "South Africa"
  portCode?: string;         // UN/LOCODE, e.g. "ZASDB" – shown in the quick-facts strip
  kind: "office" | "licence";
  matchPort: string[];       // substrings to match Project.port on
  metaTitle: string;
  metaDescription: string;
  h1: string;
  geoSub: string;
  // Optional punchy one-line lead shown above the fold. When set, the
  // full `intro` moves into the "More about" accordion. When absent,
  // intro[0] leads and intro[1..] become the accordion detail.
  lead?: string;
  intro: string[];
  scope: string[];
  vesselTypes: string[];
  office?: PortOffice;       // present when kind === "office"
  phoneDisplay?: string;     // licence-only ports: direct line (else central)
  phoneE164?: string;        // tel: form of the above
  heroImage?: string;        // optional; gradient fallback if absent
  heroAlt?: string;
  heroCaption?: string;      // optional documentary caption overlaid on the hero
  heroPosition?: string;     // optional object-position to control the letterbox crop focus
  secondaryImage?: {         // optional in-body captioned photo
    src: string;
    alt: string;
    caption: string;
    portrait?: boolean;
  };
  // Optional port-facilities block – e.g. the graving / dry docks a
  // vessel owner weighs when planning a repair call. Rendered as a
  // titled section with one scannable spec card per facility. Distil
  // each facility to the decision-critical dimensions only.
  facilities?: {
    heading: string;        // e.g. "Ship repair & dry docking"
    intro?: string;         // optional lead-in sentence above the cards
    docks: {
      name: string;         // e.g. "Sturrock Dry Dock"
      specs: { label: string; value: string }[];
    }[];
    // Optional external write-up corroborating the work (e.g. a LinkedIn
    // post). Rendered as a quiet reference link, not a CTA.
    source?: { url: string; label: string };
  };
}

const PHONE_DISPLAY = "+27 44 691 3218";
const PHONE_E164 = "+27446913218";
const EMAIL = "info@afrishore.co";

const VESSEL_TYPES = [
  "Rigs",
  "Drillships",
  "Semi-submersibles",
  "OSVs / PSVs",
  "AHTS",
  "Tankers",
  "FPSOs",
  "Cargo ships",
];

export const ports: PortPage[] = [
  {
    slug: "walvis-bay",
    portName: "Walvis Bay",
    portCode: "NAWVB",
    country: "Namibia",
    kind: "office",
    matchPort: ["Walvis Bay"],
    metaTitle:
      "Vessel & Rig Agent: Port of Walvis Bay, Namibia | Afrishore",
    metaDescription:
      "Licensed vessel and rig agent in the Port of Walvis Bay, Namibia – embedded in the Oil & Gas Section: clearance, husbandry and supply base support.",
    h1: "Vessel & Rig Agent: Port of Walvis Bay",
    geoSub: "Licensed agency embedded in the Port of Walvis Bay's Oil & Gas Section, Namibia",
    intro: [
      "Afrishore holds its own port agency licence at Walvis Bay and is permanently embedded inside the Port of Walvis Bay's Oil & Gas Section, the only deep-water commercial port in Namibia and the primary shore base for the country's offshore exploration boom. From here Afrishore acts as full vessel and rig agent for rigs, drillships, semi-submersibles, OSVs, PSVs, AHTS, tankers and FPSOs.",
      "Walvis Bay agency is unforgiving: frontier drilling campaigns, international crews, customs and classification deadlines and a port working at capacity. Afrishore's on-the-ground team handles port clearance and port-authority liaison, immigration and crew changes, husbandry, dry docking and repairs coordination, bunkering, procurement and the full offshore supply base: one accountable agent and centralised communication for all owners, vessel managers and crews. Afrishore's Walvis Bay rigging and lifting crew is OPITO-accredited – the global energy-industry benchmark for safety and competency training – so every lift on the base is handled to an internationally recognised standard.",
      "Afrishore ran the Deepsea Bollsta and Deepsea Mira Special Periodic Surveys from this base and uninterrupted drilling support for Northern Ocean & Odfjell Drilling's ongoing campaigns. That integration of agency, supply base, logistics and crew from a single point of accountability is what keeps Walvis Bay campaigns on schedule.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Berth scheduling & port-authority liaison",
      "Immigration & crew-change compliance",
      "Offshore supply base operations",
      "Dry docking & repairs coordination",
      "Ship husbandry & bunkering",
      "Procurement & technical support",
      "Off Port Limits (OPL) logistics",
      "Mobilisation / demobilisation",
    ],
    vesselTypes: VESSEL_TYPES,
    heroImage: "/images/ports/walvis-bay-hero.jpg",
    heroAlt:
      "Riser joints laid down with a mobile crane on the port apron at the Port of Walvis Bay, Namibia – Afrishore offshore supply base and vessel & rig agency",
    heroCaption: "Riser laydown · Afrishore offshore supply base · Port of Walvis Bay",
    heroPosition: "center 72%",
    secondaryImage: {
      src: "/images/ports/walvis-bay-base.jpg",
      alt: "Afrishore's Walvis Bay logistics base – mobile crane and rigging spread handling rig tubulars on the Port of Walvis Bay apron, Namibia",
      caption:
        "Afrishore's Walvis Bay logistics base in operation – crane and rigging spread handling rig tubulars on the port apron, the commercial quay beyond. Turnkey shore-side support embedded in the Port of Walvis Bay's Oil & Gas Section.",
      portrait: true,
    },
    office: {
      businessName: "Afrishore",
      localBusinessId: "#walvis-bay",
      // No civic street address – sited in the port's Oil & Gas Section.
      // Google Plus Code 2FRM+HW Walvis Bay; precise location is the
      // geo coords below + the Maps link.
      streetAddress: "Oil & Gas Section, Port of Walvis Bay",
      addressLocality: "Walvis Bay",
      addressCountry: "NA",
      geo: { lat: -22.9585384, lng: 14.4848436 },
      mapsUrl: "https://www.google.com/maps/place/Afrishore+Logistics+Base/@-22.9585383,14.479978,986m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1c76ef004954c6e7:0x922329006f6e942d!8m2!3d-22.9585384!4d14.4848436!16s%2Fg%2F11y97bbphz",
      phoneDisplay: "+264 81 767 3069",
      phoneE164: "+264817673069",
    },
  },
  {
    slug: "luderitz",
    portName: "Lüderitz",
    portCode: "NALUD",
    country: "Namibia",
    kind: "licence",
    matchPort: ["Lüderitz", "Luderitz"],
    metaTitle:
      "Vessel & Rig Agent: Port of Lüderitz, Namibia | Afrishore",
    metaDescription:
      "Licensed vessel and rig agent for the Port of Lüderitz, Namibia – clearance, immigration, husbandry and offshore support for the Orange Basin frontier.",
    h1: "Vessel & Rig Agent: Port of Lüderitz",
    geoSub: "Multipurpose port handling oil & gas, general cargo, fishing and ore",
    lead: "Afrishore holds an active port agency licence for the Port of Lüderitz, Namibia's southernmost commercial port and the closest harbour to the offshore Orange Basin.",
    intro: [
      "From Lüderitz, Afrishore acts as full vessel and rig agent for the rigs, drillships, OSVs, PSVs and survey vessels working the Orange Basin, alongside the general-cargo, fishing and ore traffic the port itself handles. The port works two commercial berths to a maximum draft of 8.75 m, with a maximum quayside lift of 28 mt, and Afrishore plans every call and cargo operation around those parameters so vessels berth, work and sail without surprises.",
      "Lüderitz sits on an exposed stretch of the southern Namibian coast and is subject to the prevailing winds, so vessel movements there are occasionally weather-restricted. Afrishore's local team schedules berthing and cargo work around the available weather windows and keeps owners, masters and operators informed throughout – turning a well-known regional factor into a managed part of the plan rather than a disruption.",
      "Coordinated with Afrishore's Walvis Bay base and the wider licensed network, Lüderitz coverage gives operators one accountable agent across the whole Namibian coast: port clearance and port-authority liaison, immigration and crew rotation, husbandry and provisions, bunkering coordination and offshore logistics, all from a single point of accountability.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Port-authority liaison",
      "Immigration & crew-change compliance",
      "Ship husbandry & owner's representation",
      "Bunkering coordination",
      "Offshore & survey-vessel support",
      "Off Port Limits (OPL) logistics",
      "Mobilisation / demobilisation",
    ],
    vesselTypes: VESSEL_TYPES,
    facilities: {
      heading: "Berths & handling at Lüderitz",
      intro:
        "Key parameters for planning a commercial call at the Port of Lüderitz:",
      docks: [
        {
          name: "Commercial quay",
          specs: [
            { label: "Commercial berths", value: "2" },
            { label: "Maximum draft", value: "8.75 m" },
            { label: "Maximum lift (load-bearing)", value: "28 mt" },
          ],
        },
      ],
    },
    phoneDisplay: "+264 81 767 3069",
    phoneE164: "+264817673069",
    heroImage: "/images/ports/luderitz-fugro-supporter.jpg",
    heroAlt:
      "The survey vessel Fugro Supporter alongside the quay at the Port of Lüderitz, Namibia: Afrishore port agency and quayside support for an Orange Basin survey campaign",
    heroCaption: "Survey vessel alongside · Port of Lüderitz",
    heroPosition: "center 35%",
  },
  {
    slug: "cape-town",
    portName: "Cape Town",
    portCode: "ZACPT",
    country: "South Africa",
    kind: "office",
    matchPort: ["Cape Town"],
    metaTitle:
      "Cape Town Shipping & Logistics | Vessel Agent | Afrishore",
    metaDescription:
      "Cape Town shipping company, freight forwarder and licensed vessel & rig agent at the Port of Cape Town – customs, immigration, husbandry and project cargo.",
    h1: "Vessel & Rig Agent: Port of Cape Town",
    geoSub: "Multipurpose port focussed on repair, cargo, projects and transit stops",
    lead: "Afrishore holds an active port agency licence for the Port of Cape Town, which remains a premier option for transiting vessels, ship-repair, project-cargo and offshore project support.",
    intro: [
      "Afrishore runs its Cape Town agency from an office in Woodstock, holding its own port agency licence at the Port of Cape Town. From here Afrishore acts as full vessel and rig agent – for rigs, drillships, OSVs, PSVs, AHTS, tankers, FPSOs in transit and cargo ships – giving operators a permanent, accountable local team at one of South Africa's busiest repair, project-cargo and offshore-support ports, with Cape Town International Airport close by for crew and time-critical freight.",
      "Cape Town does not wait, and Afrishore's local team is built around that. Afrishore handles port clearance and port-authority liaison, immigration and crew changes, dry docking and repairs coordination, husbandry, bunkering, project and abnormal cargo and full mobilisation/demobilisation – worked through tight repair-quay and dry-dock windows and complex immigration without dropping the schedule.",
      "Dry docking is where Afrishore's Cape Town team earns its keep. The port's two graving docks and syncrolift shiplift (full dimensions below) take anything from an OSV to a drillship, semi-submersible or the largest tankers and bulk carriers on the coast – but the value is in coordinating the docking. Afrishore has run complex ones here, including the simultaneous docking of the Titan floating dock for the Port of Réunion, GH Discovery for United Offshore Support and Normand Energy for Solstad, holding the port-authority, ship-repair yard, classification-society survey and crew interfaces together around each docking window so every vessel cleared the dock on schedule.",
      "Beyond vessel agency, Afrishore is a Cape Town logistics company and freight forwarder for the offshore and project-cargo sector – sea, air and road freight, customs clearance, bonded warehousing, cross-border transport and technical procurement, all routed through the Port of Cape Town and Cape Town International Airport. Operators and rig owners use the same accountable Afrishore team for agency, logistics and freight forwarding at Cape Town, which removes the hand-off seams that normally cost time on a fast schedule.",
      "That integrated model is what holds Afrishore's Cape Town schedules together – the Dock Titan heavy-lift to Réunion, rig anchorage, PSV and OSV calls, the 2Africa subsea cable-landing staging and the Oceaneering subsea grout-bag export, each run as one job from a single point of accountability.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Berth scheduling & port-authority liaison",
      "Immigration & crew-change compliance",
      "Dry docking & repairs coordination",
      "Project & abnormal / heavy-lift cargo",
      "Ship husbandry & bunkering",
      "Procurement & technical support",
      "Off Port Limits (OPL) logistics",
      "Mobilisation / demobilisation",
    ],
    vesselTypes: VESSEL_TYPES,
    facilities: {
      heading: "Ship repair & dry docking at Cape Town",
      intro:
        "The Port of Cape Town has two graving docks and a syncrolift shiplift. These are the gating dimensions a vessel owner uses to confirm a vessel will fit before planning a repair call:",
      docks: [
        {
          name: "Sturrock Dry Dock",
          specs: [
            { label: "Overall docking length", value: "360 m" },
            { label: "Width at entrance", value: "45.1 m" },
            { label: "Width at coping (beam)", value: "47.5 m" },
            { label: "Depth on entrance sill (HWOST)", value: "13.7 m" },
          ],
        },
        {
          name: "Robinson Dry Dock",
          specs: [
            { label: "Overall docking length", value: "161.2 m" },
            { label: "Width at entrance", value: "20.7 m" },
            { label: "Width at coping (beam)", value: "27.4 m" },
            { label: "Depth on entrance sill (HWOST)", value: "8.3 m" },
          ],
        },
        {
          name: "Syncrolift Shiplift",
          specs: [
            { label: "Overall docking length", value: "80 m" },
            { label: "Maximum beam", value: "14 m" },
            { label: "Depth over entrance sill", value: "15.9 m" },
            { label: "Repair lanes", value: "2 × 70 m · 1 × 55 m · 2 × 75 m" },
          ],
        },
      ],
      source: {
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7355516686390726656/",
        label: "See the simultaneous docking on LinkedIn",
      },
    },
    secondaryImage: {
      src: "/images/ports/ship-repair-cape-town.jpg",
      alt: "The Titan floating dock and offshore support vessels alongside the ship-repair quay at the Port of Cape Town at sunrise – a simultaneous dry docking coordinated by Afrishore",
      caption:
        "A simultaneous Cape Town dry docking coordinated by Afrishore: the Titan floating dock (Port of Réunion), GH Discovery (United Offshore Support) and Normand Energy (Solstad) at the ship-repair quay.",
    },
    heroImage: "/images/ports/cape-town-hero.jpg",
    heroAlt:
      "Aerial view of the Port of Cape Town, South Africa with Table Mountain behind: the repair, project-cargo and offshore-support harbour where Afrishore acts as vessel and rig agent",
    heroCaption: "Heavy-lift discharge · Port of Cape Town · Ben Schoeman Dock",
    heroPosition: "center 28%",
    office: {
      businessName: "Afrishore",
      localBusinessId: "#cape-town",
      streetAddress: "Unit 213, Buchanan Square",
      addressLocality: "Woodstock, Cape Town",
      addressRegion: "Western Cape",
      addressCountry: "ZA",
      geo: { lat: -33.9280523, lng: 18.4369372 },
      mapsUrl: "https://www.google.com/maps/place/Afrishore+Cape+Town/@-33.9280523,18.4343569,889m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1dcc5cc43ee6c321:0x6566444213830163!8m2!3d-33.9280523!4d18.4369372!16s%2Fg%2F1pzr1wjwr",
      phoneDisplay: "+27 87 092 0949",
      phoneE164: "+27870920949",
    },
  },
  {
    slug: "saldanha",
    portName: "Saldanha",
    portCode: "ZASDB",
    country: "South Africa",
    kind: "licence",
    matchPort: ["Saldanha"],
    metaTitle:
      "Vessel & Rig Agent: Port of Saldanha Bay | Afrishore",
    metaDescription:
      "Licensed vessel and rig agent for the Port of Saldanha Bay, South Africa – the country's deepest port: clearance, husbandry, bulk and project cargo.",
    h1: "Vessel & Rig Agent: Port of Saldanha Bay",
    geoSub: "South Africa's largest natural deep-water port – iron ore, oil & gas, projects and fisheries",
    lead: "Afrishore holds an active port agency licence for the Port of Saldanha, South Africa's largest natural deep-water port and the country's primary iron-ore export terminal.",
    intro: [
      "Saldanha Bay is South Africa's largest natural deep-water harbour, built around the iron-ore export terminal that handles ore railed in from the Northern Cape. Afrishore acts as full vessel and rig agent here for bulk carriers, tankers, rigs, OSVs, PSVs and AHTS, handling port clearance and port-authority liaison, immigration and crew changes, husbandry and bunkering coordination across the bulk, tanker and offshore disciplines the port works across.",
      "Beyond iron ore, Saldanha holds extensive oil & gas and project infrastructure that remains underutilised – including a dedicated Offshore Supply Base precinct and the Mossgas Quay, with quayside warehousing, workshops and cranage suited to offshore mobilisations, heavy-lift and project work. The spare deep-water capacity makes the port a strong, uncongested option for these scopes. Quayside ship repair can be actioned alongside, and the bay supports an extensive fishing industry, so a single port call can combine bulk, project, repair and crew scopes under one accountable agent.",
      "Run alongside Afrishore's Cape Town office and the wider licensed network, Saldanha coverage gives operators an effective West Coast deep-water option in close proximity to Cape Town, with one accountable agent across the entire South African west coast.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Port-authority liaison",
      "Immigration & crew-change compliance",
      "Ship husbandry & owner's representation",
      "Bunkering coordination",
      "Project & abnormal cargo",
      "Quayside ship-repair coordination",
      "Off Port Limits (OPL) logistics",
      "Offshore mobilisation / demobilisation",
    ],
    vesselTypes: VESSEL_TYPES,
    facilities: {
      heading: "Berths & facilities at the Port of Saldanha",
      intro:
        "South Africa's deepest natural port: the entrance channel is dredged to 23 m at chart datum and the port accepts vessels to 20.5 m draught (21.5 m by arrangement). The gating berth and facility data:",
      docks: [
        {
          name: "Iron Ore Terminal",
          specs: [
            { label: "Berths", value: "2" },
            { label: "Permitted draught", value: "21.25 m" },
            { label: "Vessels", value: "Capesize / VLOC" },
          ],
        },
        {
          name: "Multi-Purpose Terminal",
          specs: [
            { label: "Berths", value: "201–203" },
            { label: "Quay length", value: "874 m" },
            { label: "Max draught", value: "12–13.4 m" },
          ],
        },
        {
          name: "Tanker Berth",
          specs: [
            { label: "Length", value: "365 m" },
            { label: "Permitted draught", value: "21.25 m" },
          ],
        },
        {
          name: "Offshore Supply Base & Mossgas Quay",
          specs: [
            { label: "Mossgas Quay design depth", value: "7.9 m" },
            { label: "Quayside", value: "Warehousing & cranage" },
            { label: "Suited to", value: "Project cargo & laydown" },
          ],
        },
      ],
      source: {
        url: "https://www.transnet.net/",
        label: "Berth data: Transnet National Ports Authority",
      },
    },
    heroImage: "/images/ports/saldanha-port.jpg",
    heroAlt:
      "Operations vantage over Saldanha Bay, South Africa at last light: vessel-tracking and electronic-chart monitors with the bay, moored craft and headland beyond, where Afrishore coordinates west-coast port calls",
    heroCaption: "Operations vantage · Saldanha Bay",
    heroPosition: "center 40%",
  },
  {
    slug: "mossel-bay",
    portName: "Mossel Bay",
    portCode: "ZAMZY",
    country: "South Africa",
    kind: "office",
    matchPort: ["Mossel Bay"],
    metaTitle:
      "Vessel & Rig Agent: Port of Mossel Bay | Afrishore HQ",
    metaDescription:
      "Vessel and rig agent at the Port of Mossel Bay – Afrishore's HQ since 2010, and the supply base behind TotalEnergies' Brulpadda and Luiperd campaigns.",
    h1: "Vessel & Rig Agent: Port of Mossel Bay",
    geoSub: "Afrishore's founding base and head office – vessel & rig agency for the Brulpadda & Luiperd gas fields",
    lead: "Afrishore holds an active port agency licence for the Port of Mossel Bay, its founding base and head office, and acts as vessel and rig agent for the ships, oil rigs and supply vessels working South Africa's Block 11B/12B gas fields offshore.",
    intro: [
      "Afrishore was founded in Mossel Bay and holds its own port agency licence here, with its head office at 60 Bland Street. Mossel Bay hosted the shore base for South Africa's most significant offshore gas play to date, Block 11B/12B (Brulpadda and Luiperd), and Afrishore acts as full vessel and rig agent at the port for oil rigs, drillships, OSVs, PSVs, AHTS, tankers and supply vessels, on the owners' and charterers' side.",
      "Mossel Bay agency means running an offshore supply base to the rhythm of a deep-water drilling campaign: port clearance and port-authority liaison, immigration and crew changes, husbandry, rigging and project cargo, bunkering and full mobilisation/demobilisation with zero margin for error 175 km offshore.",
      "From Mossel Bay Afrishore operated the supply base and rig agency for the TotalEnergies Brulpadda discovery and Luiperd campaigns – supporting the Deepsea Stavanger drilling rig offshore – and the earlier Eirik Raude campaign, closing out cleanly through Cape Town. It is where Afrishore's integration-as-design model was proven, and is applied to anything from tanker calls and transit stops to medivacs and project scopes.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Berth scheduling & port-authority liaison",
      "Immigration & crew-change compliance",
      "Offshore supply base operations",
      "Rigging, cranage & project cargo",
      "Ship husbandry & bunkering",
      "Procurement & technical support",
      "Off Port Limits (OPL) logistics",
      "Mobilisation / demobilisation",
    ],
    vesselTypes: VESSEL_TYPES,
    heroImage: "/images/ports/mossel-bay-port.jpg",
    heroAlt:
      "Aerial view of the Port of Mossel Bay, South Africa: breakwater, harbour basin and quay; Afrishore's founding base and head office, where it operated the Block 11B/12B (Brulpadda/Luiperd) offshore supply base and runs its vessel & rig agency",
    heroCaption: "Harbour & quayside · Port of Mossel Bay · Afrishore HQ",
    heroPosition: "center 45%",
    office: {
      businessName: "Afrishore",
      localBusinessId: "#mossel-bay",
      streetAddress: "60 Bland Street",
      addressLocality: "Mossel Bay",
      addressRegion: "Western Cape",
      addressCountry: "ZA",
      geo: { lat: -34.1818225, lng: 22.14746 },
      mapsUrl: "https://www.google.com/maps/place/Afrishore/@-34.181818,22.1448851,939m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1dd66a0335dc5e5f:0x4149c2415844479e!8m2!3d-34.1818225!4d22.14746!16s%2Fg%2F1pztnmp64",
    },
  },
  {
    slug: "durban",
    portName: "Durban",
    portCode: "ZADUR",
    country: "South Africa",
    kind: "office",
    matchPort: ["Durban"],
    metaTitle:
      "Vessel & Rig Agent: Port of Durban, South Africa | Afrishore",
    metaDescription:
      "Licensed vessel and rig agent in the Port of Durban, South Africa – clearance, immigration, husbandry, dry docking and project cargo on the east coast.",
    h1: "Vessel & Rig Agent: Port of Durban",
    geoSub: "South Africa's largest port – import/export hub for fruit, grain, sugar, fertiliser and chemicals",
    lead: "Afrishore holds an active port agency licence for the Port of Durban, the largest and busiest port in South Africa and the country's principal import and export gateway.",
    intro: [
      "The Port of Durban is the largest and busiest port in South Africa, a high-volume import and export gateway moving fruit, grain, sugar, fertiliser, chemicals and general cargo alongside its container and bulk traffic. From its Yellowwood Park office Afrishore acts as full vessel and rig agent here for tankers, bulk carriers, container ships, rigs, OSVs, PSVs and AHTS, handling port clearance and port-authority liaison, immigration and crew changes, husbandry, bunkering coordination and project and abnormal cargo.",
      "Durban also carries one of the largest ship-repair capabilities on the coast. The Prince Edward Graving Dock takes vessels up to 352.04 m through a 33.52 m entrance with 12.56 m on the sill, and can be divided into two independent sections of 206.9 m and 138.68 m for simultaneous dockings, with a privately operated floating dock handling smaller tonnage alongside. Afrishore coordinates the port-authority, repair-yard, classification-society and crew interfaces around the docking window so each vessel clears the dock on schedule.",
      "Run alongside Afrishore's west- and south-coast licensed network and the Walvis Bay base, the Durban office extends the same single point of accountability across the East African seaboard, toward the Mozambique Channel.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Berth scheduling & port-authority liaison",
      "Immigration & crew-change compliance",
      "Dry docking & repairs coordination",
      "Project & abnormal cargo",
      "Ship husbandry & bunkering",
      "Procurement & technical support",
      "Off Port Limits (OPL) logistics",
      "Mobilisation / demobilisation",
    ],
    vesselTypes: VESSEL_TYPES,
    facilities: {
      heading: "Ship repair & dry docking at Durban",
      intro:
        "Durban's Prince Edward Graving Dock is one of the largest dry docks on the South African coast, with a privately operated floating dock alongside for smaller tonnage:",
      docks: [
        {
          name: "Prince Edward Graving Dock",
          specs: [
            { label: "Overall docking length", value: "352.04 m" },
            { label: "Width at entrance", value: "33.52 m" },
            { label: "Depth on entrance", value: "12.56 m" },
            { label: "Divisible into", value: "206.9 m · 138.68 m" },
          ],
        },
      ],
    },
    heroImage: "/images/ports/durban-hero.jpg",
    heroAlt:
      "The offshore support vessel Pacific Gosling alongside the quay at the Port of Durban, South Africa: Afrishore vessel and rig agency on the east coast",
    heroCaption: "OSV alongside · Port of Durban",
    heroPosition: "center 65%",
    office: {
      businessName: "Afrishore",
      localBusinessId: "#durban",
      streetAddress: "33 Wagtail Walk, Yellowwood Park",
      addressLocality: "Durban",
      addressRegion: "KwaZulu-Natal",
      addressCountry: "ZA",
      geo: { lat: -29.9204198, lng: 30.9372028 },
      mapsUrl: "https://www.google.com/maps/place/Afrishore/@-29.9204198,30.9372028,17z/data=!4m6!3m5!1s0x1ef7ab2dc625884f:0x36f1e4ca67a3bfe8!8m2!3d-29.9204198!4d30.9372028",
      phoneDisplay: "+27 79 695 9816",
      phoneE164: "+27796959816",
    },
  },
];

export const portContact = {
  phoneDisplay: PHONE_DISPLAY,
  phoneE164: PHONE_E164,
  email: EMAIL,
};
