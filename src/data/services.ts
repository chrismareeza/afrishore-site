// Service landing pages – SEO-optimised for "ship / vessel / rig agency",
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
  alternateNames?: string[];      // schema.org alternateName – emitted as a
                                  // search-query disambiguation signal (e.g.
                                  // "Ship Agent", "Vessel Agent" alongside
                                  // the canonical "Vessel & Rig Agency").
  lead?: string;                  // punchy one-line opener shown above the fold;
                                  // the full `intro` then moves into a collapsed
                                  // "More about" accordion so the page doesn't
                                  // open on a wall of prose. Mirrors PortPage.lead.
  intro: string[];                // body paragraphs (semantic, keyword-rich)
  scope: string[];                // "What we handle" detailed list
  vesselTypes?: string[];         // vessel & rig agency only
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
    name: "Vessel & Rig Agency",
    metaTitle:
      "Vessel & Rig Agency: Namibia & South Africa | Afrishore",
    metaDescription:
      "Appointed ships agent and vessel agent for rigs, drillships, OSVs and tankers across South Africa, Namibia and Mozambique – clearance and husbandry.",
    h1: "Vessel & Rig Agency",
    geoSub: "Licensed vessel & rig agent – clearance, husbandry & crew across Namibia, South Africa & Mozambique",
    schemaServiceType: "Vessel & Rig Agency",
    // Canonical search-query variants for this service.
    alternateNames: [
      "Ships Agency", "Ships Agent", "Vessel Agent", "Vessel Agency",
      "Port Agent", "Port Agency", "Rig Agent",
    ],
    lead:
      "Afrishore is a licensed vessel and rig agent across Namibia, South Africa and Mozambique – one accountable team from first notice of arrival to departure clearance, for anything from a drillship on a multi-well campaign to a tanker making a single transit stop.",
    intro: [
      "Afrishore acts as appointed local representative for owners, managers and charterers of vessels, rigs and marine assets transiting territorial waters or working at anchorage. Full agency scope: port and customs clearance, berth scheduling and port-authority liaison, immigration and crew changes, husbandry and owners' protective agency, bunkering, dry docking and repairs, procurement, and full mobilisation and demobilisation. We agent rigs, drillships, semi-submersibles, OSVs, PSVs, AHTS, tankers and FPSOs across our licensed port network.",
      "Vessel and rig agency in this region is unforgiving – tight berthing windows, complex immigration for international crews, customs and classification-society deadlines, weather that does not wait. Embedded teams permanently on-call across the Southern African coast mean the master, vessel and rig management and the operator deal with one agent rather than a chain of subcontractors.",
      "As a licensed hub agent, Afrishore coordinates multi-port and multi-country calls across South Africa, Namibia and Mozambique under a single appointment – owners' protective agency (OPA), owners' husbandry agency (OHA) and charterers' nominated agency (CNA) handled as readily as full commercial agency. Husbandry covers supplies, cash to master, repairs and crew matters; every appointment opens with a clear pro forma disbursement account (PDA) and closes with a reconciled final DA, so owners and charterers see the cost of the call up front. Off Port Limits (OPL) operations extend that reach to vessels working at anchorage, delivering crew changes, spares and supply without a port call. For owners that means one accountable representative from first notice of arrival to departure clearance, whether the asset is a drillship on a multi-well campaign or a tanker making a single transit stop.",
      "On campaigns including the TotalEnergies Brulpadda discovery and the Deepsea Mira and Deepsea Bollsta drilling programmes, our rig agency ran alongside supply-base, integrated-logistics and crew operations from the same shore base. That integration is what keeps offshore schedules intact.",
    ],
    scope: [
      "Port clearance & customs formalities",
      "Berth scheduling & port-authority liaison",
      "Immigration & crew-change compliance",
      "Dry docking & repairs coordination",
      "Bunkering arrangements",
      "Procurement & technical support network",
      "Husbandry & owner's representation",
      "Disbursement accounts – PDA & final DA",
      "Medivac & emergency coordination",
      "Off Port Limits (OPL) logistics",
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
      "Cargo ships",
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
      "Aerial view of the Port of Mossel Bay, South Africa – offshore supply vessels alongside the breakwater quay where Afrishore provides vessel and rig agency services",
    secondaryImage: {
      src: "/images/services/ship-rig-agency-vessel.jpg",
      alt: "Pacific Greylag offshore supply vessel alongside in the Port of Cape Town with Table Mountain behind – Afrishore vessel and rig agency, South Africa",
      caption:
        "Pacific Greylag alongside in the Port of Cape Town. Vessel and rig agency, port clearance, immigration and husbandry handled end-to-end across South Africa, Namibia and Mozambique.",
    },
  },
  {
    slug: "offshore-supply-base",
    serviceType: "supply-base",
    name: "Offshore Supply Base",
    metaTitle:
      "Offshore Supply Base: Namibia & South Africa | Afrishore",
    metaDescription:
      "Offshore supply base operator across Namibia, South Africa and Mozambique – rigging, cranage, warehousing and project cargo in the Port of Walvis Bay.",
    h1: "Offshore Supply Base Operations",
    geoSub: "Turnkey base operator: Walvis Bay, Cape Town, Mossel Bay, Pemba & beyond.",
    schemaServiceType: "Offshore Supply Base Operations",
    lead:
      "Afrishore operates turnkey offshore supply bases – rigging, cranage, warehousing and customs – from a permanent base inside the Port of Walvis Bay's Oil & Gas Section, keeping rigs and drillships supplied and on schedule offshore.",
    intro: [
      "Afrishore operates turnkey offshore supply bases for drilling, renewable and subsea campaigns across Namibia, South Africa & Mozambique. Permanently embedded inside the Port of Walvis Bay's Oil & Gas Section and licensed across the Southern African coast, Afrishore provides the full shore-side operations an operator, rig or vessel needs to stay on schedule offshore.",
      "Running a supply base is the operational core: rigging, cranage and abnormal trucking, warehousing and laydown, temporary importation and customs clearance, project cargo handling, QHSE implementation, waste management and materials management with full reporting, all sequenced to the campaign clock. Afrishore has delivered this from inception to the Deepsea Mira and Deepsea Bollsta Special Periodic Surveys and continuous drilling, the TotalEnergies Brulpadda and Luiperd campaigns, Petronas Rovuma Basin campaign and the Eco Atlantic Gazania-1 programme.",
      "From its permanent base inside the Port of Walvis Bay's Oil & Gas Section, Afrishore activates and provisions the full shore-side operation a campaign needs: base activation and asset provisioning, laydown and warehousing, temporary importation and customs clearance, rigging, cranage and abnormal trucking, QHSE implementation, and waste and materials management with campaign-clock reporting. Because Afrishore controls the base directly rather than subcontracting it, the operator deals with one team accountable for every box, lift and movement on the quay – which is what keeps an offshore programme supplied without the gaps that fragmented logistics chains leave behind. Afrishore's Walvis Bay rigging and lifting team holds OPITO accreditation – the global energy-industry standard for safety and competency training – so every lift on the quay is performed to an internationally recognised benchmark.",
      "Because the supply base runs alongside Afrishore's vessel and rig agency, integrated logistics and crew services from the same point of accountability, operators get one coordinated shore operation instead of fragmented logistics and supplier chains.",
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
      "Freight Forwarding & Customs Clearance | Afrishore",
    metaDescription:
      "Freight forwarding, customs brokerage, project cargo and bunkering across South Africa, Namibia and Mozambique – cross-border by sea, air and road.",
    h1: "Integrated Logistics",
    geoSub: "Freight forwarding, customs & project cargo via sea, air & road.",
    schemaServiceType: "Integrated Logistics",
    lead:
      "Afrishore moves project and abnormal cargo by sea, air and road – freight forwarding, in-house customs brokerage and cross-border delivery into Namibia and Mozambique – run as one chain rather than disconnected steps.",
    intro: [
      "Afrishore provides integrated marine and project logistics across South Africa, Namibia and Mozambique: freight forwarding, customs brokerage and port clearance, project and abnormal cargo, bunkering, chandling, technical procurement and provisions supply, moving freight into location and cross-border on sea, air and road.",
      "Offshore and subsea campaigns rarely move in straight lines: equipment arrives by international freight, clears customs under bond or temporary importation, is staged and trucked and returns through the same chain in reverse, every leg time-bound to the operation. Afrishore has run exactly this for the 2Africa subsea cable landing, the Dock Titan heavy-lift to Réunion and continuous drilling-campaign supply across the Southern African coast.",
      "Cross-border movement is where the chain is tested: equipment lands by sea or air, clears customs under bond or temporary importation, then trucks onward into Namibia or Mozambique and returns through the same chain in reverse. Afrishore has run this for the 2Africa subsea cable landing at Cape Town, the Dock Titan floating-dock tow to Réunion and the Oceaneering subsea export scopes, alongside the day-to-day provisioning, bunkering and chandling that keeps a drilling campaign supplied. Every leg is sequenced to the operation it serves, so freight arrives when the vessel, rig or base actually needs it.",
      "Customs is the part that most often stalls a campaign, so Afrishore runs brokerage and clearance in-house: temporary importation and bond management, duty handling, and the documentation that lets specialised equipment enter and leave cleanly. Around it sit technical procurement and provisions supply, bonded warehousing, materials management and the bunkering and chandling a working vessel relies on – the unglamorous logistics that, done on time, never make the operations report.",
      "Delivered as one chain rather than disconnected steps, integrated logistics is what lets the supply base, rig agency and crew operations move on a single schedule.",
    ],
    scope: [
      "Customs brokerage & management",
      "International freight – sea, air & road",
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
      "Subsea cable reel on a tensioning spread at the quayside in the Port of Cape Town, an offshore supply vessel alongside – Afrishore integrated logistics and project cargo, South Africa",
    secondaryImage: {
      src: "/images/services/integrated-logistics-cargo.jpg",
      alt: "Abnormal project cargo – a large riser section on a multi-axle low-bed trailer at the quayside, Afrishore integrated logistics, Southern Africa",
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
      "Crew Logistics, Visa & Immigration Support | Afrishore",
    metaDescription:
      "Offshore crew logistics, visa and work-permit processing, immigration and medevac for vessels and rigs across South Africa, Namibia and Mozambique since 2010.",
    h1: "Crew & Visa Services",
    geoSub: "Crew rotations, visas, immigration & medivac across three countries",
    schemaServiceType: "Crew & Visa Services",
    lead:
      "Afrishore handles full crew logistics across three immigration regimes – visas, work permits, flights, accommodation and medevac – having processed over 15,000 visas to bring drill crews and specialists in on time and compliant.",
    intro: [
      "Afrishore handles full crew logistics for offshore and onshore personnel and third-party technicians across South Africa, Namibia and Mozambique: visa and work-permit processing, immigration optimisation, flight coordination, accommodation and transport, crew-change coordination and medical evacuation.",
      "Drilling and subsea campaigns bring multiple discipline crews and international specialists into the region simultaneously, each with their own visa, immigration and travel requirements against a dynamic project schedule. Afrishore coordinated exactly this through dry docking schedules, marine projects and exploration campaigns: every visa, every entry, every rotation handled so personnel arrive on time and compliant.",
      "Immigration across South Africa, Namibia and Mozambique means three distinct visa and work-permit regimes, each with its own lead times, documentation and entry rules – against a project schedule that does not bend around them. Afrishore has processed over 15,000 visas across the region, moving drill crews, subsea technicians and specialist contractors through dry-docking schedules, marine projects and exploration campaigns so personnel arrive on time and compliant. The same desk coordinates flights, accommodation, ground transport and crew-change logistics, and stands up medical-evacuation arrangements when an offshore situation demands it.",
      "Beyond the paperwork, crew logistics is a coordination problem measured in hours: a flight that slips, a permit that lands late or a crew change that misses the vessel's window can hold an offshore unit on standby at significant cost. Afrishore plans rotations backwards from the operation – immigration optimisation and compliance first, then flights, ground transport and accommodation sequenced so each person clears the airport and reaches the quay, vessel or rig on time. The same service supports third-party technicians and specialist contractors mobilising into a campaign, not only a vessel's own crew, so an operator can bring multiple disciplines into the region on one coordinated plan rather than chasing several travel desks at once.",
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
      "South African and German passports – Afrishore crew visa, work-permit and immigration processing across South Africa, Namibia and Mozambique",
  },
];
