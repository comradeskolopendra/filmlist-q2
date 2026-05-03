import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Films } from '../../services/films';
import { TimePipe } from '../../pipes/time-pipe';

@Component({
  selector: 'app-film',
  imports: [RouterLink, TimePipe],
  templateUrl: './film.html',
  styleUrl: './film.css',
})
export class Film {
  route = inject(ActivatedRoute);
  router = inject(Router);
  films = inject(Films);

  filmId = this.route.snapshot.paramMap.get("id");

  currentFilm = this.films.getFilmById(Number(this.filmId));
}
