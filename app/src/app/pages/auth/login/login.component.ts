import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  pass?: string;
  email?: string;
  showpass: boolean = false;
  showPassword() {
    const pass = document.getElementById('userPassword');
    this.showpass = this.showpass ? false : true;

    if (this.showpass) {
      pass?.setAttribute('type', 'text');
    } else {
      pass?.setAttribute('type', 'password');
    }
  }
}
