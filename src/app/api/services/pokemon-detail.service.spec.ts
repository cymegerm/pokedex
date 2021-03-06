import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PokemonDetailService } from './pokemon-detail.service';

describe('PokemonDetailService', () => {
  let service: PokemonDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(PokemonDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
