import { Component, OnInit } from '@angular/core';

import { CityService, City } from '../../services/city.service';
import { EntrepriseService } from '../../services/entreprise.service';

@Component({
  selector: 'app-electricite',
  templateUrl: './electricite.component.html'
})
export class ElectriciteComponent implements OnInit {
  ent_nom: string;
  city: City;

  constructor(private cityService: CityService,
  private entrepriseService: EntrepriseService) {
    this.ent_nom = entrepriseService.nom;
    entrepriseService.setService('electricite');
    cityService.$city.subscribe( c => this.city = c );
  }

  ngOnInit() {

  }

}
