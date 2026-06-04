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
    country: "Namibia",
    kind: "office",
    matchPort: ["Walvis Bay"],
    metaTitle:
      "Vessel & Rig Agent: Port of Walvis Bay, Namibia | Afrishore",
    metaDescription:
      "Afrishore is a licensed vessel and rig agent in the Port of Walvis Bay, Namibia – permanently embedded in the Oil & Gas Section. Port clearance, immigration, husbandry, supply base and offshore logistics for rigs, drillships, OSVs and tankers.",
    h1: "Vessel & Rig Agent: Port of Walvis Bay",
    geoSub: "Licensed agency embedded in the Port of Walvis Bay's Oil & Gas Section, Namibia",
    intro: [
      "Afrishore holds its own port agency licence at Walvis Bay and is permanently embedded inside the Port of Walvis Bay's Oil & Gas Section, the only deep-water commercial port in Namibia and the primary shore base for the country's offshore exploration boom. From here Afrishore acts as full vessel and rig agent for rigs, drillships, semi-submersibles, OSVs, PSVs, AHTS, tankers and FPSOs.",
      "Walvis Bay agency is unforgiving: frontier drilling campaigns, international crews, customs and classification deadlines and a port working at capacity. Afrishore's on-the-ground team handles port clearance and port-authority liaison, immigration and crew changes, husbandry, dry docking and repairs coordination, bunkering, procurement and the full offshore supply base: one accountable agent and centralised communication for all owners, vessel managers and crews.",
      "Afrishore ran the Deepsea Bollsta and Deepsea Mira Special Periodic Surveys from this base and uninterrupted drilling support for Northern Ocean & Odfjell Drilling's ongoing campaigns. That integration of agency, supply base, logistics and crew from a single point of accountability is what keeps Walvis Bay campaigns on schedule.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Berth scheduling & port-authority liaison",
      "Immigration & crew-change compliance",
      "Offshore supply base operations",
      "Dry docking & repairs coordination",
      "Bunkering & husbandry",
      "Procurement & technical support",
      "Off Port Limits (OPL) logistics",
      "Mobilisation / demobilisation",
    ],
    vesselTypes: VESSEL_TYPES,
    heroImage: "/images/ports/walvis-bay-hero.jpg",
    heroAlt:
      "Riser joints laid down with a mobile crane on the port apron at the Port of Walvis Bay, Namibia – Afrishore offshore supply base and vessel & rig agency",
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
      mapsUrl: "https://maps.app.goo.gl/rrigVze54LhREuQ3A",
      phoneDisplay: "+264 81 767 3069",
      phoneE164: "+264817673069",
    },
  },
  {
    slug: "luderitz",
    portName: "Lüderitz",
    country: "Namibia",
    kind: "licence",
    matchPort: ["Lüderitz", "Luderitz"],
    metaTitle:
      "Vessel & Rig Agent: Port of Lüderitz, Namibia | Afrishore",
    metaDescription:
      "Afrishore is a licensed vessel and rig agent for the Port of Lüderitz, Namibia – port clearance, immigration, husbandry and offshore support for the Orange Basin exploration frontier. Run alongside our Walvis Bay base.",
    h1: "Vessel & Rig Agent: Port of Lüderitz",
    geoSub: "Multipurpose port handling oil & gas, general cargo, fishing and ore",
    lead: "Afrishore holds an active port agency licence for the Port of Lüderitz, Namibia's southernmost commercial port and the closest harbour to the offshore Orange Basin.",
    intro: [
      "From Lüderitz, Afrishore acts as full vessel and rig agent for the rigs, drillships, OSVs, PSVs and survey vessels working the Orange Basin, alongside the general-cargo, fishing and ore traffic the port itself handles. The port works two commercial berths to a maximum draft of 8.75 m, with a maximum quayside lift of 28 mt, and Afrishore plans every call and cargo operation around those parameters so vessels berth, work and sail without surprises.",
      "Lüderitz sits on an exposed stretch of the southern Namibian coast and is subject to the prevailing winds, so vessel movements there are occasionally weather-restricted. Afrishore's local team schedules berthing and cargo work around the available weather windows and keeps owners, masters and operators informed throughout – turning a well-known regional factor into a managed part of the plan rather than a disruption.",
      "Co-ordinated with Afrishore's Walvis Bay base and the wider licensed network, Lüderitz coverage gives operators one accountable agent across the whole Namibian coast: port clearance and port-authority liaison, immigration and crew rotation, husbandry and provisions, bunkering coordination and offshore logistics, all from a single point of accountability.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Port-authority liaison",
      "Immigration & crew-change compliance",
      "Husbandry & owner's representation",
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
  },
  {
    slug: "cape-town",
    portName: "Cape Town",
    country: "South Africa",
    kind: "office",
    matchPort: ["Cape Town"],
    metaTitle:
      "Cape Town Shipping & Logistics Company | Vessel Agent | Afrishore",
    metaDescription:
      "Afrishore is a Cape Town shipping company, freight forwarder and licensed vessel & rig agent – Woodstock office, Port of Cape Town. Customs clearance, freight forwarding, immigration, husbandry, dry docking, project cargo and heavy-lift coordination for rigs, OSVs, tankers and liners.",
    h1: "Vessel & Rig Agent: Port of Cape Town",
    geoSub: "Multipurpose port focussed on repair, cargo, projects and transit stops",
    lead: "Afrishore holds an active port agency licence for the Port of Cape Town, which remains a premier option for transiting vessels, ship-repair, project-cargo and offshore project support.",
    intro: [
      "Afrishore holds its own port agency licence at Cape Town and operates from its office in Woodstock. The Port of Cape Town is South Africa's premier repair, project-cargo and offshore-support port, and Afrishore acts as full vessel and rig agent here for rigs, drillships, OSVs, PSVs, AHTS, tankers, FPSOs (in transit) and cargo ships. As a major international sea-freight gateway with Cape Town International Airport close by, it offers a strong value proposition for project custodians, operators and vessels in transit alike.",
      "Cape Town agency spans tight repair-quay and dry-dock windows, complex immigration, heavy-lift project cargo and bunkering, all against a port that does not wait. Afrishore handles port clearance and port-authority liaison, immigration and crew changes, dry docking and repairs coordination, husbandry, bunkering, project and abnormal cargo and full mobilisation/demobilisation.",
      "Cape Town is also one of the southern hemisphere's major ship-repair ports, with two graving docks and a syncrolift shiplift that vessel owners weigh when planning a docking. The Sturrock Dry Dock takes vessels up to 360 m through a 45.1 m entrance with 13.7 m of water over the sill at high water, large enough for drillships, semi-submersibles and the biggest tankers and bulk carriers working the coast; the smaller Robinson Dry Dock handles vessels to 161.2 m, and the syncrolift lifts vessels up to 80 m onto dedicated repair lanes. Afrishore has coordinated dry dockings here before – including the simultaneous docking of the Titan floating dock for the Port of Réunion, GH Discovery for United Offshore Support and Normand Energy for Solstad – managing the port-authority, ship-repair yard, classification-society survey and crew interfaces around the docking window so each vessel clears the dock on schedule.",
      "Beyond vessel agency, Afrishore operates as a Cape Town logistics company and freight forwarder for the offshore and project-cargo sector – sea, air and road freight, customs clearance, bonded warehousing, cross-border transport and technical procurement, all routed through the Port of Cape Town and Cape Town International Airport. Operators and rig owners use the same accountable team for ships agent, logistics company and freight forwarder at Cape Town, which removes the hand-off seams that normally cost time on a fast schedule.",
      "From Cape Town Afrishore delivered the Dock Titan heavy-lift to Réunion and handled rig anchorage, PSV and OSV calls, the 2Africa subsea cable-landing staging and the Oceaneering subsea grout-bag export. Integrated agency, logistics and crew from one point of accountability is what holds those schedules together.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Berth scheduling & port-authority liaison",
      "Immigration & crew-change compliance",
      "Dry docking & repairs coordination",
      "Project & abnormal / heavy-lift cargo",
      "Bunkering & husbandry",
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
    office: {
      businessName: "Afrishore",
      localBusinessId: "#cape-town",
      streetAddress: "Unit 213, Buchanan Square",
      addressLocality: "Woodstock, Cape Town",
      addressRegion: "Western Cape",
      addressCountry: "ZA",
      geo: { lat: -33.9280523, lng: 18.4369372 },
      mapsUrl: "https://maps.app.goo.gl/4mbkkrdewg3erXhA7",
      phoneDisplay: "+27 87 092 0949",
      phoneE164: "+27870920949",
    },
  },
  {
    slug: "saldanha",
    portName: "Saldanha",
    country: "South Africa",
    kind: "licence",
    matchPort: ["Saldanha"],
    metaTitle:
      "Vessel & Rig Agent: Port of Saldanha Bay, South Africa | Afrishore",
    metaDescription:
      "Afrishore is a licensed vessel and rig agent for the Port of Saldanha Bay, South Africa – the country's deepest natural port. Port clearance, immigration, husbandry, bulk, project cargo and offshore/rig support.",
    h1: "Vessel & Rig Agent: Port of Saldanha Bay",
    geoSub: "South Africa's largest natural deep-water port – iron ore, oil & gas, projects and fisheries",
    lead: "Afrishore holds an active port agency licence for the Port of Saldanha, South Africa's largest natural deep-water port and the country's primary iron-ore export terminal.",
    intro: [
      "Saldanha Bay is South Africa's largest natural deep-water harbour, built around the iron-ore export terminal that handles ore railed in from the Northern Cape. Afrishore acts as full vessel and rig agent here for bulk carriers, tankers, rigs, OSVs, PSVs and AHTS, handling port clearance and port-authority liaison, immigration and crew changes, husbandry and bunkering coordination across the bulk, tanker and offshore disciplines the port works across.",
      "Beyond iron ore, Saldanha holds oil & gas and project-cargo facilities that remain underutilised – spare deep-water capacity that makes the port a strong, uncongested option for offshore mobilisations, heavy-lift and project work. Quayside ship repair can be actioned alongside, and the bay supports an extensive fishing industry, so a single port call can combine bulk, project, repair and crew scopes under one accountable agent.",
      "Run alongside Afrishore's Cape Town office and the wider licensed network, Saldanha coverage gives operators an effective West Coast deep-water option in close proximity to Cape Town, with one accountable agent across the entire South African west coast.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Port-authority liaison",
      "Immigration & crew-change compliance",
      "Husbandry & owner's representation",
      "Bunkering coordination",
      "Project & abnormal cargo",
      "Quayside ship-repair coordination",
      "Off Port Limits (OPL) logistics",
      "Offshore mobilisation / demobilisation",
    ],
    vesselTypes: VESSEL_TYPES,
    facilities: {
      heading: "The Port of Saldanha at a glance",
      intro:
        "What the port offers, and where Afrishore sees spare capacity:",
      docks: [
        {
          name: "Port of Saldanha",
          specs: [
            { label: "Port type", value: "Natural deep-water" },
            { label: "Primary trade", value: "Iron-ore export" },
            { label: "Also handles", value: "Oil & gas · Project cargo · Fisheries" },
            { label: "Ship repair", value: "Quayside" },
          ],
        },
      ],
    },
    heroImage: "/images/ports/saldanha-port.jpg",
    heroAlt:
      "Operations vantage over Saldanha Bay, South Africa at last light: vessel-tracking and electronic-chart monitors with the bay, moored craft and headland beyond, where Afrishore coordinates west-coast port calls",
  },
  {
    slug: "mossel-bay",
    portName: "Mossel Bay",
    country: "South Africa",
    kind: "office",
    matchPort: ["Mossel Bay"],
    metaTitle:
      "Afrishore Mossel Bay HQ – Vessel & Rig Agency, Offshore Supply Base",
    metaDescription:
      "Afrishore head office, Mossel Bay – 58 Bland Street. Vessel & rig agency, customs, immigration, husbandry, offshore supply base operations. Operated the Brulpadda & Luiperd supply base for TotalEnergies on Block 11B/12B since 2010.",
    h1: "Vessel & Rig Agent: Port of Mossel Bay",
    geoSub: "Afrishore's founding base & head office – operated the Brulpadda & Luiperd supply base",
    intro: [
      "Afrishore was founded in Mossel Bay and holds its own port agency licence here, with its head office at 58 Bland Street. Mossel Bay hosted the shore base for South Africa's most significant offshore gas play to date, Block 11B/12B (Brulpadda and Luiperd), and Afrishore acts as full vessel and rig agent here for rigs, drillships, OSVs, PSVs, AHTS and tankers, on the owners and charterers side.",
      "Mossel Bay agency means running an offshore supply base to the rhythm of a deep-water drilling campaign: port clearance and port-authority liaison, immigration and crew changes, husbandry, rigging and project cargo, bunkering and full mobilisation/demobilisation with zero margin for error 175 km offshore.",
      "From Mossel Bay Afrishore operated the supply base and rig agency for the TotalEnergies Brulpadda discovery and Luiperd campaigns and the earlier Eirik Raude drilling campaign, closing out cleanly through Cape Town. It is where Afrishore's integration-as-design model was proven and is applied to anything from tanker calls, transit stops, medivacs and project scopes.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Berth scheduling & port-authority liaison",
      "Immigration & crew-change compliance",
      "Offshore supply base operations",
      "Rigging, cranage & project cargo",
      "Bunkering & husbandry",
      "Procurement & technical support",
      "Off Port Limits (OPL) logistics",
      "Mobilisation / demobilisation",
    ],
    vesselTypes: VESSEL_TYPES,
    heroImage: "/images/ports/mossel-bay-port.jpg",
    heroAlt:
      "Aerial view of the Port of Mossel Bay, South Africa: breakwater, harbour basin and quay; Afrishore's founding base and head office, where it operated the Block 11B/12B (Brulpadda/Luiperd) offshore supply base and runs its vessel & rig agency",
    office: {
      businessName: "Afrishore",
      localBusinessId: "#mossel-bay",
      streetAddress: "58 Bland Street",
      addressLocality: "Mossel Bay",
      addressRegion: "Western Cape",
      addressCountry: "ZA",
      geo: { lat: -34.1818225, lng: 22.14746 },
      mapsUrl: "https://maps.app.goo.gl/LDPwrZL4eLqARBwNA",
    },
  },
  {
    slug: "durban",
    portName: "Durban",
    country: "South Africa",
    kind: "office",
    matchPort: ["Durban"],
    metaTitle:
      "Vessel & Rig Agent: Port of Durban, South Africa | Afrishore",
    metaDescription:
      "Afrishore is a licensed vessel and rig agent in the Port of Durban, South Africa, with an office in Yellowwood Park. Port clearance, immigration, husbandry, dry docking and project cargo for rigs, OSVs, tankers and liners on the east coast.",
    h1: "Vessel & Rig Agent: Port of Durban",
    geoSub: "Licensed agency with a Durban office – Africa's busiest port, east-coast hub",
    intro: [
      "Afrishore holds its own port agency licence at Durban and operates from an office in Yellowwood Park. The Port of Durban is the busiest container and multi-purpose port in sub-Saharan Africa and Afrishore's east-coast hub, acting as full vessel and rig agent for rigs, drillships, OSVs, PSVs, AHTS, tankers, FPSOs and cargo ships.",
      "Durban agency means working one of Africa's most congested ports to schedule: port clearance and port-authority liaison, immigration and crew changes, dry docking and repairs coordination, husbandry, bunkering, project and abnormal cargo and full mobilisation/demobilisation.",
      "Run alongside Afrishore's west- and south-coast licensed network and the Walvis Bay base, the Durban office extends the same single point of accountability across the East African seaboard, toward the Mozambique Channel.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Berth scheduling & port-authority liaison",
      "Immigration & crew-change compliance",
      "Dry docking & repairs coordination",
      "Project & abnormal cargo",
      "Bunkering & husbandry",
      "Procurement & technical support",
      "Off Port Limits (OPL) logistics",
      "Mobilisation / demobilisation",
    ],
    vesselTypes: VESSEL_TYPES,
    heroImage: "/images/ports/durban-hero.jpg",
    heroAlt:
      "The offshore support vessel Pacific Gosling alongside the quay at the Port of Durban, South Africa: Afrishore vessel and rig agency on the east coast",
    office: {
      businessName: "Afrishore",
      localBusinessId: "#durban",
      streetAddress: "33 Wagtail Walk, Yellowwood Park",
      addressLocality: "Durban",
      addressRegion: "KwaZulu-Natal",
      addressCountry: "ZA",
      geo: { lat: -29.9181951, lng: 30.9365181 },
      mapsUrl: "https://share.google/xVkGsN7QUKWdDGqFN",
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
