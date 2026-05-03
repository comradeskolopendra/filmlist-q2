import { computed, Injectable, signal } from '@angular/core';
import { MOCK_FILMS } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class Films {
  private films = signal(MOCK_FILMS);

  getFilmById(id: number) {
    return this.films().find(film => film.id === id);
  }

  filterFilms(title: string) {
    return this.films().filter(film => film.title.toLowerCase().includes(title.toLowerCase()));
  }

  toggleFilmFavorite(id: number | undefined) {
    this.films.update(films => {
      return films.map(film => {
        
        if (film.id === id) {
          film.isFavorite = !film.isFavorite;
        }

        return film;
      })
    });
  }
}
