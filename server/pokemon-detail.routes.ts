import { Request, Response } from 'express';
import axios from 'axios';
import { api_base_url } from './api-base-url';
import { headers } from './headers';

export async function getPokemonSpecies(req: Request, res: Response) {
  let response: any;

  try {
    response = await axios.get(`${api_base_url}/pokemon-species/${req.query.id}}`, {
      headers,
    });

    const pokemonSpecies: any[] = response.data.results;

    res.status(200).json({ payload: pokemonSpecies });
  } catch (error) {
    console.error(error);
  }
}

export async function getPokemonEvolution(req: Request, res: Response) {
  let response: any;

  try {
    response = await axios.get(`${req.query.url}`, {
      headers,
    });

    const pokemonEvolution: any[] = response.data.results;

    res.status(200).json({ payload: pokemonEvolution });
  } catch (error) {
    console.error(error);
  }
}

export async function getPokemon(req: Request, res: Response) {
  let response: any;

  try {
    response = await axios.get(`${api_base_url}/pokemon/${req.query.id}}`, {
      headers,
    });

    const pokemon: any[] = response.data.results;

    res.status(200).json({ payload: pokemon });
  } catch (error) {
    console.error(error);
  }
}
