import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { pages } from './pages/pagesIndex';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...pages, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Planejamento';

  ngOnInit(): void {
    
  }
}
