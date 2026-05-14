// Client roster — 15 direct clients (some with logos, some pending)
// Logo field: relative path under /public, null if pending

export interface Client {
  name: string;
  slug: string;
  sector: "oil-gas-major" | "drilling-contractor" | "service-contractor" | "subsea-services" | "vessel-operator" | "port-authority";
  logo: string | null;
}

export const clients: Client[] = [
  // Tier 1 — global household names
  { name: "TotalEnergies", slug: "totalenergies", sector: "oil-gas-major", logo: "/client-logos/totalenergies.png" },
  { name: "Halliburton", slug: "halliburton", sector: "service-contractor", logo: null },
  { name: "Baker Hughes", slug: "baker-hughes", sector: "service-contractor", logo: null },
  { name: "Odfjell Drilling", slug: "odfjell-drilling", sector: "drilling-contractor", logo: "/client-logos/odfjell-drilling.jpg" },
  { name: "Tidewater", slug: "tidewater", sector: "vessel-operator", logo: null },
  { name: "Bourbon", slug: "bourbon", sector: "vessel-operator", logo: null },
  { name: "Solstad", slug: "solstad", sector: "vessel-operator", logo: null },

  // Tier 2 — specialists, very strong recognition in sector
  { name: "Oceaneering", slug: "oceaneering", sector: "subsea-services", logo: null },
  { name: "SBM Offshore", slug: "sbm-offshore", sector: "subsea-services", logo: null },
  { name: "Expro", slug: "expro", sector: "service-contractor", logo: null },
  { name: "PetroSA", slug: "petrosa", sector: "oil-gas-major", logo: null },
  { name: "Northern Ocean Ltd", slug: "northern-ocean", sector: "drilling-contractor", logo: null },
  { name: "Eco Atlantic Oil & Gas", slug: "eco-atlantic", sector: "oil-gas-major", logo: "/client-logos/eco-atlantic.png" },
  { name: "LD TravOcean", slug: "ld-travocean", sector: "subsea-services", logo: "/client-logos/ld-travocean.png" },
  { name: "Piriou Naval Services", slug: "piriou", sector: "service-contractor", logo: "/client-logos/piriou.jpg" },
  { name: "Port of Réunion", slug: "port-of-reunion", sector: "port-authority", logo: null },
];
