export interface Pokemon {
  url: string;
  name: string;
  id?: string;
  types?: string[];
  species?: { name: string; url: string };
  evolution?: string[];
  height?: string;
  abilities?: string[];
  image_url?: string;
}
