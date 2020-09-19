import { pokemonDetailReducer, initialPokemonDetailState, PokemonDetailState } from './pokemon-detail.reducer';

describe('PokemonDetail Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous pokemon-detail state', () => {
      const action = {} as any;

      const result = pokemonDetailReducer(initialPokemonDetailState, action);

      expect(result).toBe(initialPokemonDetailState);
    });

    it('should return the same initial pokemon-detail state', () => {
      const action = {} as any;

      const previousInitialPokemonDetailState: PokemonDetailState = {
        pokemonDetail: undefined,
      };

      const result = pokemonDetailReducer(initialPokemonDetailState, action);

      expect(result).toEqual(previousInitialPokemonDetailState);
    });
  });
});
