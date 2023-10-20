import { Route } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { FirstGridExampleComponent } from './pages/first-grid-example/first-grid-example.component';
import { SecondGridExampleComponent } from './pages/second-grid-example/second-grid-example.component';
import { ThirdGridExampleComponent } from './pages/third-grid-example/third-grid-example.component';

export const appRoutes: Route[] = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'intro'
  },
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: 'first-grid-example',
    component: FirstGridExampleComponent
  },
  {
    path: 'second-grid-example',
    component: SecondGridExampleComponent
  },
  {
    path: 'third-grid-example',
    component: ThirdGridExampleComponent
  },
  {
    path: '**',
    component: IntroComponent,
  },
];
