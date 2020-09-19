export interface Pokemon {
  name: string;
  url: string;
  id?: number;
  types?: string[];
  species?: { name: string; url: string };
  evolution?: string[];
  abilities?: string[];
  image_url?: string;
}

// Recursive Object Search Solution
/*const ev = {
  baby_trigger_item: null,
  chain: {
    evolution_details: [],
    evolves_to: [
      {
        evolution_details: [
          {
            gender: null,
            held_item: null,
            item: null,
            known_move: null,
            known_move_type: null,
            location: null,
            min_affection: null,
            min_beauty: null,
            min_happiness: null,
            min_level: 7,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: '',
            trade_species: null,
            trigger: { name: 'level-up', url: 'https://pokeapi.co/api/v2/evolution-trigger/1/' },
            turn_upside_down: false,
          },
        ],
        evolves_to: [
          {
            evolution_details: [
              {
                gender: null,
                held_item: null,
                item: null,
                known_move: null,
                known_move_type: null,
                location: null,
                min_affection: null,
                min_beauty: null,
                min_happiness: null,
                min_level: 10,
                needs_overworld_rain: false,
                party_species: null,
                party_type: null,
                relative_physical_stats: null,
                time_of_day: '',
                trade_species: null,
                trigger: { name: 'level-up', url: 'https://pokeapi.co/api/v2/evolution-trigger/1/' },
                turn_upside_down: false,
              },
            ],
            evolves_to: [],
            is_baby: false,
            species: { name: 'butterfree', url: 'https://pokeapi.co/api/v2/pokemon-species/12/' },
          },
        ],
        is_baby: false,
        species: { name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon-species/11/' },
      },
    ],
    is_baby: false,
    species: { name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon-species/10/' },
  },
  id: 4,
};

const recursiveObjectSearch = (obj, searchKey: string, results: string[] = []) => {
  const r = results;
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (key === searchKey && typeof val === 'object') {
      r.push(val.name);
    } else if (val && typeof val === 'object') {
      recursiveObjectSearch(val, searchKey, r);
    }
  });
  return r;
};

console.log(recursiveObjectSearch(ev, 'species'));*/
