import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { api_base_url } from '../../../../server/api-base-url';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailService {
  constructor(private http: HttpClient) {}

  retrievePokemonEvolutionChainUrl(pokemonId: number) {
    return this.http.get(`${api_base_url}/pokemon-species/${pokemonId}`);

    // Move to resolver...
    /*let evolution_chain_url: string;*/
    /*.subscribe((response: HttpResponse<any>) => {
      evolution_chain_url = response.body.results.evolution_chain.url;*/
  }

  retrievePokemonEvolution(pokemonId: number) {
    this.retrievePokemonEvolutionChainUrl(pokemonId).subscribe((response: HttpResponse<any>) => {
      const evolution_chain_url: string = response.body.results.evolution_chain.url;

      return this.http.get(`${evolution_chain_url}`);
    });
  }

  retrievePokemonDetail(id: string) {}
}

/*
response.body.results.forEach((pokemon: any) => {
  list.push({
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types,
    species: pokemon.species,
    evolution: [],
    abilities: Object.values(pokemon.abilities.ability.name),
    image_url: pokemon.sprites.front_default,
  });
});*/
