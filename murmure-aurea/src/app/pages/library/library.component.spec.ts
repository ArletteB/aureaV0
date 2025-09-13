import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraryComponent } from './library.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryComponent, FormsModule, RouterTestingModule.withRoutes([])]
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component and initialize filteredWritings', () => {
    expect(component).toBeTruthy();
    // Par défaut, tous les écrits sont affichés
    expect(component.filteredWritings.length).toBe(component.allWritings.length);
  });

  it('should filter writings by type', () => {
    component.setFilter('Poème');
    fixture.detectChanges();

    expect(component.selectedFilter).toBe('Poème');
    expect(component.filteredWritings.every(w => w.type === 'Poème')).toBeTrue();
  });

  it('should filter writings by search query', () => {
    // Recherche d'un titre connu
    component.onSearch('Aube');
    fixture.detectChanges();

    expect(component.searchQuery).toBe('Aube');
    // Seuls les écrits dont le titre ou l'extrait contient "Aube"
    expect(component.filteredWritings.every(w =>
      w.title.includes('Aube') || w.excerpt.includes('Aube')
    )).toBeTrue();

    // Recherche qui ne correspond à rien
    component.onSearch('inexistant');
    fixture.detectChanges();
    expect(component.filteredWritings.length).toBe(0);
  });

  it('should navigate to reading page on card click', () => {
    spyOn(router, 'navigate');

    // Affiche tous les écrits
    component.setFilter('Tous');
    fixture.detectChanges();

    // Prend le premier card
    const cardDebug = fixture.debugElement.queryAll(By.css('.writing-card'))[0];
    cardDebug.triggerEventHandler('click', null);
    fixture.detectChanges();

    const expectedId = component.filteredWritings[0].id;
    expect(router.navigate).toHaveBeenCalledWith(['/lecture', expectedId]);
  });
});