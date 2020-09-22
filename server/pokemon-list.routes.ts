import { Request, Response } from 'express';
import axios from 'axios';
import { api_base_url } from './api-base-url';
import { headers } from './headers';

export async function getAllPokemons(req: Request, res: Response) {
  let response: any;

  try {
    response = await axios.get(`${api_base_url}/pokemon?offset=${req.query.offset}&limit=${req.query.limit}`, {
      headers,
    });

    const pokemonList: any[] = response.data.results;

    res.status(200).json({ payload: pokemonList });
  } catch (error) {
    console.error(error);
  }
}
