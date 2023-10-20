import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NavComponent
  ],
  selector: 'napoca-pixel-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo-global-styles';
}
