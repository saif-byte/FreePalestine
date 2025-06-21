import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectDateComponent } from './select-date/select-date.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SelectDateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FreePalestine';
}
