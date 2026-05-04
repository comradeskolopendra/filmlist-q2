import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Films } from '../../services/films';
import { TimePipe } from '../../pipes/time-pipe';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-film',
  imports: [RouterLink, TimePipe, Breadcrumbs],
  templateUrl: './film.html',
  styleUrl: './film.css',
})
export class Film {
  route = inject(ActivatedRoute);
  router = inject(Router);
  films = inject(Films);

  filmId = this.route.snapshot.paramMap.get("id");

  currentFilm = this.films.getFilmById(Number(this.filmId));

  breadcrumbs = computed(() => [
    {
      label: "Home",
      url: "/"
    }, {
      label: this.currentFilm?.title || "No film",
      url: `/film/${this.filmId}`
    }
  ])
}
