import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  fullName = input.required<string>();
  location = input.required<string>();
  email = input.required<string>();
  phone = input.required<string>();
  profile = input.required<string>();
}
