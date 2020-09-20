import { pokemonListReducer, initialPokemonListState, PokemonListState } from './pokemon-list.reducer';

describe('PokemonList Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous pokemon-list state', () => {
      const action = {} as any;

      const result = pokemonListReducer(initialPokemonListState, action);

      expect(result).toBe(initialPokemonListState);
    });

    it('should return the same initial pokemon-list state', () => {
      const action = {} as any;

      const previousInitialPokemonListState: PokemonListState = {
        retrieved: false,
        data: null,
      };

      const result = pokemonListReducer(initialPokemonListState, action);

      expect(result).toEqual(previousInitialPokemonListState);
    });
  });
});
