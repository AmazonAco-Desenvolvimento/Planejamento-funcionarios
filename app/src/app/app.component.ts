import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { pages } from './pages/pagesIndex';
import { CommonModule } from '@angular/common';
import { ProtheusService } from './services/api/protheus.service';
import { StoredDataService } from './services/stored-data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...pages, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private api: ProtheusService, private store: StoredDataService) {}
  title = 'Planejamento';
  ngOnInit(): void {}
}
