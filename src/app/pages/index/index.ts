import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmCard } from '../../components/film-card/film-card';
import { Films } from '../../services/films';
import { FormsModule } from '@angular/forms';
import { AutoFocus } from '../../directives/auto-focus';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-index',
  imports: [
    CommonModule,
    FilmCard,
    FormsModule,
    AutoFocus,
    Breadcrumbs
  ],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {
  filmsService = inject(Films);
  searchQuery = signal("");

  films = computed(() => {
    return this.filmsService.filterFilms(this.searchQuery())
  })

  breadcrumbs = computed(() => [
    {
      label: 'Home',
      url: '/',
    }
  ])
}
