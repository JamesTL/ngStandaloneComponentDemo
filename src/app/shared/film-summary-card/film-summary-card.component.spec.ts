import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSummaryCardComponent } from './film-summary-card.component';

describe('FilmSummaryCardComponent', () => {
  let component: FilmSummaryCardComponent;
  let fixture: ComponentFixture<FilmSummaryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilmSummaryCardComponent]
    });
    fixture = TestBed.createComponent(FilmSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
