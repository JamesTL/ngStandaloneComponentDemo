import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from 'src/app/services/filmServices/films.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-film-summary-card',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './film-summary-card.component.html',
  styleUrls: ['./film-summary-card.component.scss']
})
export class FilmSummaryCardComponent {

  @Input()
  film!: Film;
  @Input()
  index?: number

}
