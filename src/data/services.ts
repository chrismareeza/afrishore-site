// Service landing pages — SEO-optimised for "ship / vessel / rig agency",
// "offshore supply base", "freight forwarding / customs", "crew & visa"
// across South Africa, Namibia & Mozambique.
//
// `serviceType` maps to projects.ts serviceTypes so each page can pull its
// own related case studies. heroImage is optional (gradient fallback) and
// gets filled per-page in the content-refinement pass.

export interface ServicePage {
  slug: string;
  serviceType: string;            // maps to Project.serviceTypes
  name: string;                   // short display name (matches homepage card)
  metaTitle: string;              // keyword-led <title>
  metaDescription: string;
  h1: string;                     // keyword-led page H1
  geoSub: string;                 // geo-targeted subheading under H1
  schemaServiceType: string;      // schema.org Service.serviceType
  intro: string[];                // body paragraphs (semantic, keyword-rich)
  scope: string[];                // "What we handle" detailed list
  vesselTypes?: string[];         // ship & rig agency only
  ports: string[];                // ports this service covers
  heroImage?: string;             // /public path; gradient fallback if absent
  heroAlt?: string;               // precise hero alt (else a generated default)
  secondaryImage?: {              // optional in-body proof photo (captioned)
    src: string;
    alt: string;
    caption: string;
    portrait?: boolean;           // portrait → centered, capped width
  };
}

export const servicePages: ServicePage[] = [
  {
    slug: "ship-rig-agency",
    serviceType: "ship-rig-agency",
    name: "Ship & Rig Agency",
    metaTitle:
      "Ship, Vessel & Rig Agency | Namibia, South Africa & Mozambique | Afrishore",
    metaDescription:
      "Afrishore is a licensed ship, vessel and rig agency in South Africa, Namibia and Mozambique — port clearance, berth scheduling, immigration, husbandry and crew rotation for rigs, drillships, OSVs, PSVs, tankers and FPSOs at Walvis Bay, Cape Town, Durban, Mossel Bay, Saldanha and Lüderitz.",
    h1: "Ship, Vessel & Rig Agency",
    geoSub: "Maritime agency covering Namibia, South Africa & Mozambique",
    schemaServiceType: "Ship & Rig Agency",
    intro: [
      "Afrishore holds its own port agency licences in and at Walvis Bay, Lüderitz, Saldanha, Cape Town, Mossel Bay and Durban with extensive logistical experience in the ports of Gqeberha, Coega and Pemba in addition. Afrishore operates as a full ship, vessel and rig agency for rigs, drillships, semi-submersibles, OSVs, PSVs, AHTS, tankers, FPSOs and passenger liners. From a single accountable point of contact, every call is cleared and operational on arrival for marine assets in transit or temporarily imported for operations.",
      "Vessel and rig agency in this region is unforgiving: tight berthing windows, complex immigration for international crews, customs and classification-society deadlines and weather that does not wait. Afrishore's embedded teams, permanently on-call across the Southern African coast, handle port clearance, berth scheduling and port-authority liaison, immigration compliance, dry docking and repairs coordination, bunkering arrangements, procurement, provisions supply and a technical support network and full husbandry, so the master, vessel/rig management and the operator deal with one agent rather than a chain of subcontractors.",
      "On campaigns including the TotalEnergies Brulpadda discovery and the Deepsea Mira and Deepsea Bollsta drilling programmes, Afrishore's rig agency ran alongside supply-base, integrated-logistics and crew operations from the same shore base. That integration, not a single service in isolation, is what keeps offshore schedules intact.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Berth scheduling & port-authority liaison",
      "Immigration & crew-change compliance",
      "Dry docking & repairs coordination",
      "Bunkering arrangements",
      "Procurement & technical support network",
      "Husbandry & owner's representation",
      "Medivac & emergency coordination",
      "Full mobilisation / demobilisation",
    ],
    vesselTypes: [
      "Rigs",
      "Drillships",
      "Semi-submersibles",
      "OSVs / PSVs",
      "AHTS",
      "Tankers",
      "FPSOs",
      "Passenger liners",
    ],
    ports: [
      "Walvis Bay",
      "Lüderitz",
      "Cape Town",
      "Saldanha",
      "Mossel Bay",
      "Durban",
      "Gqeberha",
      "Coega",
      "East London",
      "Pemba",
    ],
    heroImage: "/images/services/ship-rig-agency-hero.jpg",
    heroAlt:
      "Aerial view of the Port of Mossel Bay, South Africa — offshore supply vessels alongside the breakwater quay where Afrishore provides ship, vessel and rig agency services",
    secondaryImage: {
      src: "/images/services/ship-rig-agency-vessel.jpg",
      alt: "Pacific Greylag offshore supply vessel alongside in the Port of Cape Town with Table Mountain behind — Afrishore vessel and rig agency, South Africa",
      caption:
        "Pacific Greylag alongside in the Port of Cape Town. Vessel and rig agency, port clearance, immigration and husbandry handled end-to-end across South Africa, Namibia and Mozambique.",
    },
  },
  {
    slug: "offshore-supply-base",
    serviceType: "supply-base",
    name: "Offshore Supply Base",
    metaTitle:
      "Offshore Supply Base Operator — Namibia, South Africa & Mozambique | Afrishore",
    metaDescription:
      "Turnkey offshore supply base operator for drilling, renewable and subsea campaigns across Namibia, South Africa and Mozambique — rigging, cranage, abnormal trucking, warehousing, project cargo, QHSE, waste and materials management. Permanently embedded in the Port of Walvis Bay's Oil & Gas Section.",
    h1: "Offshore Supply Base Operations",
    geoSub: "Turnkey base operator: Walvis Bay, Cape Town, Mossel Bay, Pemba & beyond.",
    schemaServiceType: "Offshore Supply Base Operations",
    intro: [
      "Afrishore operates turnkey offshore supply bases for drilling, renewable and subsea campaigns across Namibia, South Africa & Mozambique. Permanently embedded inside the Port of Walvis Bay's Oil & Gas Section and licensed across the Southern African coast, Afrishore provides the full shore-side operations an operator, rig or vessel needs to stay on schedule offshore.",
      "Running a supply base is the operational core: rigging, cranage and abnormal trucking, warehousing and laydown, temporary importation and customs clearance, project cargo handling, QHSE implementation, waste management and materials management with full reporting, all sequenced to the campaign clock. Afrishore has delivered this from inception to the Deepsea Mira and Deepsea Bollsta Special Periodic Surveys and continuous drilling, the TotalEnergies Brulpadda and Luiperd campaigns, Petronas Rovuma Basin campaign and the Eco Atlantic Gazania-1 programme.",
      "Because the supply base runs alongside Afrishore's ship and rig agency, integrated logistics and crew services from the same point of accountability, operators get one coordinated shore operation instead of fragmented logistics and supplier chains.",
    ],
    scope: [
      "Base activation & operational asset provisioning",
      "Rigging, cranage & abnormal trucking",
      "Warehousing & laydown",
      "Project & abnormal cargo handling",
      "Temporary importation & customs clearance",
      "Waste management",
      "Materials management & reporting",
      "Quayside & stakeholder management",
      "QHSE implementation",
    ],
    ports: [
      "Walvis Bay",
      "Lüderitz",
      "Cape Town",
      "Saldanha",
      "Mossel Bay",
      "Durban",
      "Gqeberha",
      "Coega",
      "Pemba",
    ],
    heroImage: "/images/services/offshore-supply-base-hero.jpg",
    heroAlt:
      "Subsea riser sections rigged with crane slings at Afrishore's offshore supply base laydown yard in the Port of Walvis Bay, Namibia",
    secondaryImage: {
      src: "/images/services/offshore-supply-base-team.jpg",
      alt: "Afrishore team at the offshore supply base inside the Port of Walvis Bay's Oil & Gas Section, Namibia",
      caption:
        "Afrishore's management visit to their Walvis Bay offshore supply base, the turnkey supply base behind successful drilling campaigns for Deepsea Mira, Deepsea Bollsta and Hercules.",
      portrait: true,
    },
  },
  {
    slug: "integrated-logistics",
    serviceType: "integrated-logistics",
    name: "Integrated Logistics",
    metaTitle:
      "Freight Forwarding & Customs Clearance — Marine Logistics, Southern Africa | Afrishore",
    metaDescription:
      "Freight forwarding, customs brokerage, project cargo, bunkering, chandling and technical procurement across South Africa, Namibia and Mozambique — cross-border on sea, air and road for oil & gas, subsea, telecoms and heavy lift.",
    h1: "Integrated Logistics",
    geoSub: "Freight forwarding, customs & project cargo via sea, air & road.",
    schemaServiceType: "Integrated Logistics",
    intro: [
      "Afrishore provides integrated marine and project logistics across South Africa, Namibia and Mozambique: freight forwarding, customs brokerage and port clearance, project and abnormal cargo, bunkering, chandling, technical procurement and provisions supply, moving freight into location and cross-border on sea, air and road.",
      "Offshore and subsea campaigns rarely move in straight lines: equipment arrives by international freight, clears customs under bond or temporary importation, is staged and trucked and returns through the same chain in reverse, every leg time-bound to the operation. Afrishore has run exactly this for the Facebook/Meta 2Africa subsea cable landing, the Dock Titan heavy-lift to Réunion and continuous drilling-campaign supply across the Southern African coast.",
      "Delivered as one chain rather than disconnected steps, integrated logistics is what lets the supply base, rig agency and crew operations move on a single schedule.",
    ],
    scope: [
      "Customs brokerage & management",
      "International freight — sea, air & road",
      "Project & abnormal cargo",
      "Bunkering & chandling",
      "Technical procurement & provisions supply",
      "Materials management",
      "Cross-border freight coordination",
    ],
    ports: [
      "Walvis Bay",
      "Lüderitz",
      "Cape Town",
      "Saldanha",
      "Mossel Bay",
      "Durban",
      "Gqeberha",
      "Coega",
      "East London",
      "Pemba",
    ],
    heroImage: "/images/services/integrated-logistics-hero.jpg",
    heroAlt:
      "Subsea cable reel on a tensioning spread at the quayside in the Port of Cape Town, an offshore supply vessel alongside — Afrishore integrated logistics and project cargo, South Africa",
    secondaryImage: {
      src: "/images/services/integrated-logistics-cargo.jpg",
      alt: "Abnormal project cargo — a large riser section on a multi-axle low-bed trailer at the quayside, Afrishore integrated logistics, Southern Africa",
      caption:
        "Abnormal project cargo under tow at the quayside: international freight, customs clearance and heavy-lift trucking moved as one chain across South Africa, Namibia and Mozambique.",
      portrait: true,
    },
  },
  {
    slug: "crew-visa-services",
    serviceType: "crew-visa",
    name: "Crew & Visa Services",
    metaTitle:
      "Expat Crew Logistics, Visa & Immigration Support | NAM, SA & MOZ | Afrishore",
    metaDescription:
      "Offshore and onshore crew logistics, visa and work-permit processing, immigration optimisation and medical evacuation coordination across South Africa, Namibia and Mozambique — for crews and third-party technicians.",
    h1: "Crew & Visa Services",
    geoSub: "Crew rotations, visas, immigration & medivac across three countries",
    schemaServiceType: "Crew & Visa Services",
    intro: [
      "Afrishore handles full crew logistics for offshore and onshore personnel and third-party technicians across South Africa, Namibia and Mozambique: visa and work-permit processing, immigration optimisation, flight coordination, accommodation and transport, crew-change coordination and medical evacuation.",
      "Drilling and subsea campaigns bring multiple discipline crews and international specialists into the region simultaneously, each with their own visa, immigration and travel requirements against a dynamic project schedule. Afrishore coordinated exactly this through dry docking schedules, marine projects and exploration campaigns: every visa, every entry, every rotation handled so personnel arrive on time and compliant.",
      "Run alongside Afrishore's agency, supply-base and logistics operations, crew and visa services close the loop on a fully integrated shore-side operation.",
    ],
    scope: [
      "Visa & work-permit processing",
      "Immigration optimisation & compliance",
      "Flight coordination",
      "Accommodation & ground transport",
      "Crew-change coordination",
      "Medical evacuation coordination",
      "Third-party technician support",
    ],
    ports: [
      "Walvis Bay",
      "Lüderitz",
      "Cape Town",
      "Saldanha",
      "Mossel Bay",
      "Durban",
    ],
    heroImage: "/images/services/crew-visa-services-hero.jpg",
    heroAlt:
      "South African and German passports — Afrishore crew visa, work-permit and immigration processing across South Africa, Namibia and Mozambique",
  },
];
