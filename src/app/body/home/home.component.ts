import { Component, OnInit } from '@angular/core';

import { EntrepriseService } from '../../services/entreprise.service';
import { CityService, City } from '../../services/city.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  ent_nom: string;
  city: City;

  constructor(private cityService: CityService,
  private entrepriseService: EntrepriseService) {
    this.ent_nom = entrepriseService.nom;
    entrepriseService.setService('home');
    cityService.$city.subscribe( c => this.city = c );
  }

  ngOnInit() {
  }

  goTo(destination: string) {
    this.cityService.redirection(destination);
  }

}
