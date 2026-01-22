import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CatalogService } from './catalog-service/catalog-service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CatalogService],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-app');
}
