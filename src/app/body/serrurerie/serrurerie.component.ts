import { Component, OnInit } from '@angular/core';

import { CityService, City } from '../../services/city.service';
import { EntrepriseService } from '../../services/entreprise.service';

@Component({
  selector: 'app-serrurerie',
  templateUrl: './serrurerie.component.html'
})
export class SerrurerieComponent implements OnInit {
  ent_nom: string;
  city: City;

  constructor(private cityService: CityService,
  private entrepriseService: EntrepriseService) {
    this.ent_nom = entrepriseService.nom;
    entrepriseService.setService('serrurerie');
    cityService.$city.subscribe( c => this.city = c );
  }

  ngOnInit() {

  }

}
