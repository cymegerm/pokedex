import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@app/shared/shared.module';
import { PokemonDetailComponent } from './pokemon-detail.component';

// Providing a mock `pokemon-detail service` will fix the `circular json` issue
xdescribe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async () => {
    try {
      await TestBed.configureTestingModule({
        declarations: [PokemonDetailComponent],
        imports: [RouterTestingModule, SharedModule],
      }).compileComponents();
    } catch (error) {
      console.error(error);
    }
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
