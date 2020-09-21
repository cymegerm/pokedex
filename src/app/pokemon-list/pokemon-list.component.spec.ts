import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { AppState } from '@app/state/app.reducers';
import { PokemonListComponent } from './pokemon-list.component';
import { initialPokemonListState } from './state/pokemon-list.reducer';
import * as pokemonListSelectors from './state/pokemon-list.selectors';
import * as fakePokemonList from './test/fakePokemonList.json';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    try {
      await TestBed.configureTestingModule({
        declarations: [PokemonListComponent],
        imports: [RouterTestingModule],
        providers: [
          provideMockStore({
            initialState: initialPokemonListState,
            selectors: [
              { selector: pokemonListSelectors.pokemonListParams, value: { offset: '0', limit: '10' } },
              { selector: pokemonListSelectors.pokemonList, value: fakePokemonList },
              { selector: pokemonListSelectors.pokemonListRetrieved, value: true },
            ],
          }),
        ],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(PokemonListComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
        });
    } catch (error) {
      console.error(error);
    }
    store = TestBed.inject(Store);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
