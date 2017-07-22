import { Component, OnInit } from '@angular/core';

import { EntrepriseService } from '../services/entreprise.service';
import { CallService } from '../services/call.service';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-callbar',
  templateUrl: './callbar.component.html'
})
export class CallbarComponent implements OnInit {
  tel: string;

  constructor(private entrepriseService: EntrepriseService,
  private callService: CallService,
  private popupService: PopupService) {
    this.tel = entrepriseService.tel;
  }

  ngOnInit() {
  }

  displayPopup(){
    this.popupService.display(true);
  }

}
