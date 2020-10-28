import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { api_base_url } from '../../../../server/api-base-url';
import { Pokemon } from '@app/api/models';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailService {
  constructor(private http: HttpClient, private router: Router) {}

  logAndRedirectOnHttpError(error) {
    if (error.ok == false && error.name == 'HttpErrorResponse') {
      return this.router.navigateByUrl('/page-not-found');
    } else {
      return console.log(error);
    }
  }

  recursiveObjectSearch(obj, searchKey: string, results: string[] = []) {
    const r = results;
    Object.keys(obj).forEach((key) => {
      const val = obj[key];
      if (key === searchKey && typeof val === 'object') {
        r.push(val.name);
      } else if (val && typeof val === 'object') {
        this.recursiveObjectSearch(val, searchKey, r);
      }
    });
    return r;
  }

  private retrievePokemonEvolutionChainUrl(id: string) {
    return this.http.get(`${api_base_url}/pokemon-species/${id}`).toPromise();
  }

  private async retrievePokemonEvolution(id: string) {
    try {
      const response = await this.retrievePokemonEvolutionChainUrl(id);
      const evolution_chain_url: string = response['evolution_chain'].url;

      return this.http.get(`${evolution_chain_url}`).toPromise();
    } catch (error) {
      this.logAndRedirectOnHttpError(error);
    }
  }

  private retrievePokemonProfile(id: string) {
    return this.http.get(`${api_base_url}/pokemon/${id}`).toPromise();
  }

  async retrievePokemonDetail(id: string) {
    try {
      const results = await Promise.all([this.retrievePokemonProfile(id), this.retrievePokemonEvolution(id)]);
      let abilities: string[] = [];
      results[0]['abilities'].forEach((item) => {
        abilities.push(item.ability.name);
      });
      const pokemon: Pokemon = Object.assign({
        url: null,
        name: results[0]['name'],
        id: results[0]['id'],
        types: results[0]['types'],
        species: results[0]['species'],
        evolution: this.recursiveObjectSearch(results[1], 'species').reverse(),
        height: results[0]['height'],
        abilities,
        image_url: results[0]['sprites'].front_default,
      });
      return pokemon;
    } catch (error) {
      this.logAndRedirectOnHttpError(error);
    }
  }
}
