import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { pages } from './pages/pagesIndex';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...pages],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Planejamento';

  ngOnInit(): void {
    
  }
}
