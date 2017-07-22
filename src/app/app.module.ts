import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { MdButtonModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';

import { Title } from '@angular/platform-browser';
import { CityService } from './services/city.service';
import { EntrepriseService } from './services/entreprise.service';
import { CallService } from './services/call.service';
import { PopupService } from './services/popup.service';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SerrurerieComponent } from './body/serrurerie/serrurerie.component';
import { PlomberieComponent } from './body/plomberie/plomberie.component';
import { CallbarComponent } from './callbar/callbar.component';
import { HomeComponent } from './body/home/home.component';
import { AssuranceComponent } from './body/features/assurance/assurance.component';
import { OnlineComponent } from './body/features/online/online.component';
import { ElectriciteComponent } from './body/electricite/electricite.component';
import { PhonePipe } from './pipes/phone.pipe';
import { CompetenceComponent } from './body/features/competence/competence.component';
import { MentionsLegalesComponent } from './body/mentions-legales/mentions-legales.component';
import { DemandeRappelComponent } from './body/features/demande-rappel/demande-rappel.component';
import { SurveyComponent } from './body/survey/survey.component';


export class MyHammerConfig {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SerrurerieComponent,
    PlomberieComponent,
    CallbarComponent,
    HomeComponent,
    AssuranceComponent,
    OnlineComponent,
    ElectriciteComponent,
    PhonePipe,
    CompetenceComponent,
    MentionsLegalesComponent,
    DemandeRappelComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    Title,
    CityService,
    CallService,
    EntrepriseService,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
