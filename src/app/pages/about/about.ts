import { Component, computed } from '@angular/core';
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";

@Component({
  selector: 'app-about',
  imports: [Breadcrumbs],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  breadcrumbs = computed(() => [
    {
      label: "About",
      url: "/about"
    }
  ])
}
