import * as express from 'express';
import { Application } from 'express';
import bodyParser = require('body-parser');
import { getAllPokemons } from './pokemon-list.routes';
import { getPokemon, getPokemonEvolution, getPokemonSpecies } from './pokemon-detail.routes';

const app: Application = express();
app.use(bodyParser.json());

app.route('/api/pokemons').get(getAllPokemons);
app.route('/api/pokemon').get(getPokemon);
app.route('/api/pokemon-species').get(getPokemonSpecies);
app.route('/api/pokemon-evolution').get(getPokemonEvolution);

const httpServer: any = app.listen(3000, () => {
  console.log(`HTTP REST API Server running at http://localhost:${httpServer.address().port}`);
});
