import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmCard } from '../../components/film-card/film-card';
import { Films } from '../../services/films';
import { FormsModule } from '@angular/forms';
import { AutoFocus } from '../../directives/auto-focus';

@Component({
  selector: 'app-index',
  imports: [
    CommonModule,
    FilmCard,
    FormsModule,
    AutoFocus
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
}
