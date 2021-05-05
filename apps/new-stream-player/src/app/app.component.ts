import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'new-stream-player';

  dummyClick(name: string) {
    alert(`dummy action: ${name}`);
  }
}
