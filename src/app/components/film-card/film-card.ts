import { Component, inject, input, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Films } from '../../services/films';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-film-card',
  imports: [NgClass],
  templateUrl: './film-card.html',
  styleUrl: './film-card.css',
})
export class FilmCard {
  router: Router = inject(Router);
  films = inject(Films);

  title = input<string>();
  description = input<string>();
  id = input<number>();
  year = input<number>();
  genre = input<string>();
  rating = input<number>();
  duration = input<number>();
  posterUrl = input<string>();
  isFavorite = input<boolean>();

  handleNavigateFilm(id: number | undefined) {
    this.router.navigate(['/film', id]);
  }

  handleAddFavorite(event: PointerEvent, id: number | undefined) {
    event.stopPropagation();
    this.films.toggleFilmFavorite(id)
  }
}
