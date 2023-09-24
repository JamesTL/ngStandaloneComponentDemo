import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film, FilmsService } from '../services/filmServices/films.service';
import { FilmSummaryCardComponent } from '../shared/film-summary-card/film-summary-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [CommonModule, FilmSummaryCardComponent, RouterModule],
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit{

  filmsList: Film[] = []


 constructor(readonly filmsService: FilmsService){}
 ngOnInit(): void {
   this.filmsList = this.filmsService.getFilms();
 }

}
