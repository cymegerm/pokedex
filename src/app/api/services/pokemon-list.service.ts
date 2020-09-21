import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  constructor(private http: HttpClient) {}

  retrievePokemonList(offset: number, limit: number) {
    return this.http.get(`/api/pokemons?offset=${offset}&limit=${limit}`);
  }
}
