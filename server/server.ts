import * as express from 'express';
import { Application } from 'express';
import bodyParser = require('body-parser');
import { getAllPokemons } from './pokemon-list.route';

const app: Application = express();
app.use(bodyParser.json());

app.route('/api/pokemons').get(getAllPokemons);

const httpServer: any = app.listen(3000, () => {
  console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
