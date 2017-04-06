import { Routes, RouterModule } from '@angular/router';
import {DictionaryComponent} from "./component/dictionary/dictionary.component";

const routes: Routes = [
  { path: 'home', component: DictionaryComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);
