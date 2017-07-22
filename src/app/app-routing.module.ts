import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './body/home/home.component';
import { SerrurerieComponent } from './body/serrurerie/serrurerie.component';
import { PlomberieComponent } from './body/plomberie/plomberie.component';
import { ElectriciteComponent } from './body/electricite/electricite.component';
import { MentionsLegalesComponent } from './body/mentions-legales/mentions-legales.component';
import { SurveyComponent } from './body/survey/survey.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'serrurerie', component: SerrurerieComponent },
  { path: 'plomberie', component: PlomberieComponent },
  { path: 'electricite', component: ElectriciteComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'home/:city', component: HomeComponent },
  { path: 'serrurerie/:city', component: SerrurerieComponent },
  { path: 'plomberie/:city', component: PlomberieComponent },
  { path: 'electricite/:city', component: ElectriciteComponent },
  { path: 'mentions-legales/city', component: MentionsLegalesComponent },
  { path: 'survey', component: SurveyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
