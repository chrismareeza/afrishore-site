// Client roster — direct clients (some with logos, some pending)
// Logo field: relative path under /public, null if pending
// displayBoost: optional size multiplier for visually small logos (1.2 = 20% bigger)

export interface Client {
  name: string;
  slug: string;
  sector: "oil-gas-major" | "drilling-contractor" | "service-contractor" | "subsea-services" | "vessel-operator" | "port-authority";
  logo: string | null;
  displayBoost?: number;
}

export const clients: Client[] = [
  // Tier 1 — global household names
  { name: "TotalEnergies", slug: "totalenergies", sector: "oil-gas-major", logo: "/client-logos/totalenergies.png" },
  { name: "Odfjell Drilling", slug: "odfjell-drilling", sector: "drilling-contractor", logo: "/client-logos/odfjell-drilling.png" },
  { name: "Baker Hughes", slug: "baker-hughes", sector: "service-contractor", logo: "/client-logos/baker-hughes.png", displayBoost: 1.75 },
  { name: "Tidewater", slug: "tidewater", sector: "vessel-operator", logo: "/client-logos/tidewater.png" },
  { name: "Solstad", slug: "solstad", sector: "vessel-operator", logo: "/client-logos/solstad.png" },
  { name: "Expro", slug: "expro", sector: "service-contractor", logo: "/client-logos/expro.png" },
  { name: "Bourbon", slug: "bourbon", sector: "vessel-operator", logo: "/client-logos/bourbon.png" },
  { name: "Island Drilling", slug: "island-drilling", sector: "drilling-contractor", logo: "/client-logos/island-drilling.png", displayBoost: 1.2 },

  // Tier 2 — specialists, very strong recognition in sector
  { name: "Oceaneering", slug: "oceaneering", sector: "subsea-services", logo: "/client-logos/oceaneering.png" },
  { name: "United Offshore Support", slug: "uos", sector: "service-contractor", logo: "/client-logos/uos.png", displayBoost: 2.5 },
  { name: "Fugro", slug: "fugro", sector: "subsea-services", logo: "/client-logos/fugro.png" },
  { name: "Halliburton", slug: "halliburton", sector: "service-contractor", logo: "/client-logos/halliburton.png" },
  { name: "Northern Ocean Ltd", slug: "northern-ocean", sector: "drilling-contractor", logo: "/client-logos/northern-ocean.png", displayBoost: 0.75 },
  { name: "Eco Atlantic Oil & Gas", slug: "eco-atlantic", sector: "oil-gas-major", logo: "/client-logos/eco-atlantic.png", displayBoost: 1.5 },
  { name: "LD TravOcean", slug: "ld-travocean", sector: "subsea-services", logo: "/client-logos/ld-travocean.png", displayBoost: 1.5 },
  { name: "Peschaud", slug: "peschaud", sector: "service-contractor", logo: "/client-logos/peschaud.png" },
  { name: "SBM Offshore", slug: "sbm-offshore", sector: "subsea-services", logo: "/client-logos/sbm-offshore.png", displayBoost: 1.25 },
  { name: "Piriou Naval Services", slug: "piriou", sector: "service-contractor", logo: "/client-logos/piriou.png", displayBoost: 1.75 },
  { name: "Port of Réunion", slug: "port-of-reunion", sector: "port-authority", logo: "/client-logos/port-of-reunion.png", displayBoost: 3.0 },
  { name: "Vantris Energy", slug: "vantris-energy", sector: "oil-gas-major", logo: "/client-logos/vantris-energy.png", displayBoost: 2.0 },
];
