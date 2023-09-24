import { Injectable } from '@angular/core';

export interface Film {
  title: string;
  director: string;
  releaseYear: number;
  thumbnail: string;
}


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor() { }

  getFilms(){

      return myFilmLIst;

  }

  getFilm(index: any): Film{

    return myFilmLIst[parseInt(index)];

  }
}

const myFilmLIst = [
  {
    "title": "Inception",
    "director": "Christopher Nolan",
    "releaseYear": 2010,
    "thumbnail": "https://example.com/inception-thumbnail.jpg"
  },
  {
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "releaseYear": 1994,
    "thumbnail": "https://example.com/shawshank-redemption-thumbnail.jpg"
  },
  {
    "title": "Pulp Fiction",
    "director": "Quentin Tarantino",
    "releaseYear": 1994,
    "thumbnail": "https://example.com/pulp-fiction-thumbnail.jpg"
  },
  {
    "title": "The Godfather",
    "director": "Francis Ford Coppola",
    "releaseYear": 1972,
    "thumbnail": "https://example.com/the-godfather-thumbnail.jpg"
  },
  {
    "title": "The Dark Knight",
    "director": "Christopher Nolan",
    "releaseYear": 2008,
    "thumbnail": "https://example.com/the-dark-knight-thumbnail.jpg"
  },
  {
    "title": "Forrest Gump",
    "director": "Robert Zemeckis",
    "releaseYear": 1994,
    "thumbnail": "https://example.com/forrest-gump-thumbnail.jpg"
  },
  {
    "title": "Fight Club",
    "director": "David Fincher",
    "releaseYear": 1999,
    "thumbnail": "https://example.com/fight-club-thumbnail.jpg"
  },
  {
    "title": "Gladiator",
    "director": "Ridley Scott",
    "releaseYear": 2000,
    "thumbnail": "https://example.com/gladiator-thumbnail.jpg"
  },
  {
    "title": "The Matrix",
    "director": "The Wachowskis",
    "releaseYear": 1999,
    "thumbnail": "https://example.com/the-matrix-thumbnail.jpg"
  },
  {
    "title": "Schindler's List",
    "director": "Steven Spielberg",
    "releaseYear": 1993,
    "thumbnail": "https://example.com/schindlers-list-thumbnail.jpg"
  },
  {
    "title": "Avatar",
    "director": "James Cameron",
    "releaseYear": 2009,
    "thumbnail": "https://example.com/avatar-thumbnail.jpg"
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "director": "Peter Jackson",
    "releaseYear": 2001,
    "thumbnail": "https://example.com/lotr-fellowship-thumbnail.jpg"
  },
  {
    "title": "Titanic",
    "director": "James Cameron",
    "releaseYear": 1997,
    "thumbnail": "https://example.com/titanic-thumbnail.jpg"
  },
  {
    "title": "The Silence of the Lambs",
    "director": "Jonathan Demme",
    "releaseYear": 1991,
    "thumbnail": "https://example.com/silence-of-the-lambs-thumbnail.jpg"
  },
  {
    "title": "Goodfellas",
    "director": "Martin Scorsese",
    "releaseYear": 1990,
    "thumbnail": "https://example.com/goodfellas-thumbnail.jpg"
  },
  {
    "title": "The Departed",
    "director": "Martin Scorsese",
    "releaseYear": 2006,
    "thumbnail": "https://example.com/the-departed-thumbnail.jpg"
  },
  {
    "title": "Inglourious Basterds",
    "director": "Quentin Tarantino",
    "releaseYear": 2009,
    "thumbnail": "https://example.com/inglourious-basterds-thumbnail.jpg"
  },
  {
    "title": "The Green Mile",
    "director": "Frank Darabont",
    "releaseYear": 1999,
    "thumbnail": "https://example.com/green-mile-thumbnail.jpg"
  },
  {
    "title": "Saving Private Ryan",
    "director": "Steven Spielberg",
    "releaseYear": 1998,
    "thumbnail": "https://example.com/saving-private-ryan-thumbnail.jpg"
  },
  {
    "title": "The Revenant",
    "director": "Alejandro González Iñárritu",
    "releaseYear": 2015,
    "thumbnail": "https://example.com/the-revenant-thumbnail.jpg"
  }
]