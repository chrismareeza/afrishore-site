// Port landing pages — local-SEO targets for "ship / vessel / rig
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
// from existing site data — refined per-port with the client one at a
// time (same workflow as the service pages).

export interface PortOffice {
  businessName?: string;     // exact registered name (NAP — must match GBP)
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
  intro: string[];
  scope: string[];
  vesselTypes: string[];
  office?: PortOffice;       // present when kind === "office"
  heroImage?: string;        // optional; gradient fallback if absent
  heroAlt?: string;
  secondaryImage?: {         // optional in-body captioned photo
    src: string;
    alt: string;
    caption: string;
    portrait?: boolean;
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
  "Passenger liners",
];

export const ports: PortPage[] = [
  {
    slug: "walvis-bay",
    portName: "Walvis Bay",
    country: "Namibia",
    kind: "office",
    matchPort: ["Walvis Bay"],
    metaTitle:
      "Ship, Vessel & Rig Agent – Port of Walvis Bay, Namibia | Afrishore",
    metaDescription:
      "Afrishore is a licensed ship, vessel and rig agent in the Port of Walvis Bay, Namibia — permanently embedded in the Oil & Gas Section. Port clearance, immigration, husbandry, supply base and offshore logistics for rigs, drillships, OSVs and tankers.",
    h1: "Ship, Vessel & Rig Agent – Port of Walvis Bay",
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
      "Riser joints laid down with a mobile crane on the port apron at the Port of Walvis Bay, Namibia — Afrishore offshore supply base and ship & rig agency",
    secondaryImage: {
      src: "/images/ports/walvis-bay-base.jpg",
      alt: "Afrishore's Walvis Bay logistics base — mobile crane and rigging spread handling rig tubulars on the Port of Walvis Bay apron, Namibia",
      caption:
        "Afrishore's Walvis Bay logistics base in operation — crane and rigging spread handling rig tubulars on the port apron, the commercial quay beyond. Turnkey shore-side support embedded in the Port of Walvis Bay's Oil & Gas Section.",
      portrait: true,
    },
    office: {
      businessName: "Afrishore",
      localBusinessId: "#walvis-bay",
      // No civic street address — sited in the port's Oil & Gas Section.
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
      "Ship, Vessel & Rig Agent – Port of Lüderitz, Namibia | Afrishore",
    metaDescription:
      "Afrishore is a licensed ship, vessel and rig agent for the Port of Lüderitz, Namibia — port clearance, immigration, husbandry and offshore support for the Orange Basin exploration frontier. Run alongside our Walvis Bay base.",
    h1: "Ship, Vessel & Rig Agent – Port of Lüderitz",
    geoSub: "Licensed agency for the Port of Lüderitz — gateway to the Orange Basin, Namibia",
    intro: [
      "Afrishore holds a port agency licence for Lüderitz, the southern Namibian port closest to the Orange Basin — the most active deep-water exploration frontier in the region. Afrishore acts as ship, vessel and rig agent here for rigs, drillships, OSVs, PSVs and survey vessels supporting Orange Basin campaigns.",
      "Lüderitz is a small, weather-exposed port where margins are tight and local knowledge decides outcomes. Afrishore handles port clearance and port-authority liaison, immigration and crew rotation, husbandry, bunkering coordination and offshore logistics — co-ordinated with the Walvis Bay base so a single agent covers the whole Namibian coast.",
      "Run alongside Afrishore's Walvis Bay agency, supply-base and crew operations, Lüderitz coverage closes the loop on a fully integrated Namibian shore-side operation.",
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
  },
  {
    slug: "cape-town",
    portName: "Cape Town",
    country: "South Africa",
    kind: "office",
    matchPort: ["Cape Town"],
    metaTitle:
      "Ship, Vessel & Rig Agent – Port of Cape Town, South Africa | Afrishore",
    metaDescription:
      "Afrishore is a licensed ship, vessel and rig agent in the Port of Cape Town, South Africa, with an office in Woodstock. Port clearance, immigration, husbandry, dry docking, project cargo and heavy-lift coordination for rigs, OSVs, tankers and liners.",
    h1: "Ship, Vessel & Rig Agent – Port of Cape Town",
    geoSub: "Licensed agency with a Cape Town office — repair, project-cargo and offshore hub",
    intro: [
      "Afrishore holds its own port agency licence at Cape Town and operates from an office in Woodstock. The Port of Cape Town is South Africa's premier repair, project-cargo and offshore-support port, and Afrishore acts as full ship, vessel and rig agent here for rigs, drillships, OSVs, PSVs, AHTS, tankers, FPSOs and passenger liners.",
      "Cape Town agency spans tight repair-quay and dry-dock windows, complex immigration, heavy-lift project cargo and bunkering — all against a port that does not wait. Afrishore handles port clearance and port-authority liaison, immigration and crew changes, dry docking and repairs coordination, husbandry, bunkering, project and abnormal cargo, and full mobilisation/demobilisation.",
      "From Cape Town Afrishore delivered the Dock Titan heavy-lift to Réunion, the Pacific Greylag and other OSV calls, the Facebook/Meta 2Africa subsea cable landing and the Oceaneering subsea grout-bag export. Integrated agency, logistics and crew from one point of accountability is what holds those schedules together.",
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
    office: {
      businessName: "Afrishore",
      localBusinessId: "#cape-town",
      streetAddress: "Unit 213, Buchanan Square",
      addressLocality: "Woodstock, Cape Town",
      addressRegion: "Western Cape",
      addressCountry: "ZA",
      geo: { lat: -33.9280523, lng: 18.4369372 },
      mapsUrl: "https://maps.app.goo.gl/4mbkkrdewg3erXhA7",
    },
  },
  {
    slug: "saldanha",
    portName: "Saldanha",
    country: "South Africa",
    kind: "licence",
    matchPort: ["Saldanha"],
    metaTitle:
      "Ship, Vessel & Rig Agent – Port of Saldanha Bay, South Africa | Afrishore",
    metaDescription:
      "Afrishore is a licensed ship, vessel and rig agent for the Port of Saldanha Bay, South Africa — the country's deepest natural port. Port clearance, immigration, husbandry, bulk, project cargo and offshore/rig support.",
    h1: "Ship, Vessel & Rig Agent – Port of Saldanha Bay",
    geoSub: "Licensed agency for Saldanha Bay — South Africa's deepest natural port",
    intro: [
      "Afrishore holds its own port agency licence at Saldanha Bay, South Africa's deepest natural harbour and a designated oil & gas and bulk port. Afrishore acts as ship, vessel and rig agent here for rigs, drillships, OSVs, PSVs, AHTS, tankers and bulk carriers.",
      "Saldanha's scale — deep draught, iron-ore and crude handling, and a growing offshore-support mandate — demands an agent who can move between bulk, tanker and rig disciplines. Afrishore handles port clearance and port-authority liaison, immigration and crew changes, husbandry, bunkering coordination, project and abnormal cargo and offshore mobilisation.",
      "Run alongside Afrishore's Cape Town office and the wider licensed network, Saldanha coverage gives operators one accountable agent across the entire South African west coast.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Port-authority liaison",
      "Immigration & crew-change compliance",
      "Husbandry & owner's representation",
      "Bunkering coordination",
      "Project & abnormal cargo",
      "Off Port Limits (OPL) logistics",
      "Offshore mobilisation / demobilisation",
    ],
    vesselTypes: VESSEL_TYPES,
  },
  {
    slug: "mossel-bay",
    portName: "Mossel Bay",
    country: "South Africa",
    kind: "office",
    matchPort: ["Mossel Bay"],
    metaTitle:
      "Ship, Vessel & Rig Agent – Port of Mossel Bay, South Africa | Afrishore",
    metaDescription:
      "Afrishore is a licensed ship, vessel and rig agent in the Port of Mossel Bay, South Africa — head office at 58 Bland Street. Offshore supply base, port clearance, immigration and husbandry for the Block 11B/12B (Brulpadda / Luiperd) gas play.",
    h1: "Ship, Vessel & Rig Agent – Port of Mossel Bay",
    geoSub: "Afrishore head office — supply base for the Brulpadda & Luiperd gas play",
    intro: [
      "Afrishore was founded in Mossel Bay and holds its own port agency licence here, with its head office at 58 Bland Street. Mossel Bay is the shore base for South Africa's most significant offshore gas play, Block 11B/12B (Brulpadda and Luiperd), and Afrishore acts as full vessel and rig agent for rigs, drillships, OSVs, PSVs, AHTS and tankers supporting it on the owners and charterers side.",
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
    office: {
      businessName: "Afrishore",
      localBusinessId: "#mossel-bay",
      streetAddress: "58 Bland Street",
      addressLocality: "Mossel Bay",
      addressRegion: "Western Cape",
      addressCountry: "ZA",
      geo: { lat: -34.1841336, lng: 22.1474263 },
      mapsUrl: "https://maps.app.goo.gl/oZZ7X5m96RPtTNUA6",
    },
  },
  {
    slug: "durban",
    portName: "Durban",
    country: "South Africa",
    kind: "office",
    matchPort: ["Durban"],
    metaTitle:
      "Ship, Vessel & Rig Agent – Port of Durban, South Africa | Afrishore",
    metaDescription:
      "Afrishore is a licensed ship, vessel and rig agent in the Port of Durban, South Africa, with an office in Yellowwood Park. Port clearance, immigration, husbandry, dry docking and project cargo for rigs, OSVs, tankers and liners on the east coast.",
    h1: "Ship, Vessel & Rig Agent – Port of Durban",
    geoSub: "Licensed agency with a Durban office — Africa's busiest port, east-coast hub",
    intro: [
      "Afrishore holds its own port agency licence at Durban and operates from an office in Yellowwood Park. The Port of Durban is the busiest container and multi-purpose port in sub-Saharan Africa and Afrishore's east-coast hub, acting as full ship, vessel and rig agent for rigs, drillships, OSVs, PSVs, AHTS, tankers, FPSOs and passenger liners.",
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
    office: {
      businessName: "Afrishore",
      localBusinessId: "#durban",
      streetAddress: "33 Wagtail Walk, Yellowwood Park",
      addressLocality: "Durban",
      addressRegion: "KwaZulu-Natal",
      addressCountry: "ZA",
      geo: { lat: -29.9249, lng: 30.9389 },
    },
  },
];

export const portContact = {
  phoneDisplay: PHONE_DISPLAY,
  phoneE164: PHONE_E164,
  email: EMAIL,
};
