export interface CoinInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags: Tag[];
  team: Team[];
  description: string;
  message: string;
  open_source: boolean;
  started_at: Date;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: Links;
  links_extended: LinksExtended[];
  whitepaper: Whitepaper;
  first_data_at: Date;
  last_data_at: Date;
}

export interface Links {
  explorer: string[];
  facebook: string[];
  reddit: string[];
  source_code: string[];
  website: string[];
  youtube: string[];
}

export interface LinksExtended {
  url: string;
  type: string;
  stats?: Stats;
}

export interface Stats {
  subscribers?: number;
  contributors?: number;
  stars?: number;
  followers?: number;
}

export interface Tag {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}

export interface Team {
  id: string;
  name: string;
  position: string;
}

export interface Whitepaper {
  link: string;
  thumbnail: string;
}

export interface CoinPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: string;
  price_usd: string;
  price_btc: string;
  volume_24h_usd: string;
  market_cap_usd: string;
  circulating_supply: string;
  total_supply: string;
  max_supply: string;
  percent_change_1h: string;
  percent_change_24h: string;
  percent_change_7d: string;
  last_updated: string;
}
