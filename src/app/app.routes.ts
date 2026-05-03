import { Routes } from '@angular/router';
import { Index } from './pages/index';
import { About } from './pages/about/about';
import { Film } from './pages/film/film';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {
        path: "",
        component: Index
    },
    {
        path: "about",
        component: About
    },
    {
        path: "film/:id",
        component: Film
    },
    {
        path: "**",
        component: NotFound
    }
];
