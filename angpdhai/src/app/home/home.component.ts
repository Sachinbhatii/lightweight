import { Component } from '@angular/core';
import { ReverseString } from '../pipes/reverse-string.pipe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ReverseString = ReverseString;
}
