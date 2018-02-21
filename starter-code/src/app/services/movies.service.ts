import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
  movies: Array<Object> = [];

  constructor() { }

  getMovies(){
    return this.movies;
  }

  getMovies(id){
    return this.movies[id];
  }
}