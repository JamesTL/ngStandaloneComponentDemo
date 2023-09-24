import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Film, FilmsService } from '../services/filmServices/films.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-details-view.component.html',
  styleUrls: ['./film-details-view.component.scss']
})
export class FilmDetailsViewComponent implements OnInit {

  film$!: Observable<Film>;

  constructor(readonly filmsService: FilmsService, private readonly route:ActivatedRoute){

  }

  ngOnInit():void {

    this.film$ = this.route.paramMap.pipe(map(param => {
      return this.filmsService.getFilm(param.get('index') );

    }))


  }

}
