import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsViewComponent } from './film-details-view.component';

describe('FilmDetailsViewComponent', () => {
  let component: FilmDetailsViewComponent;
  let fixture: ComponentFixture<FilmDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilmDetailsViewComponent]
    });
    fixture = TestBed.createComponent(FilmDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
