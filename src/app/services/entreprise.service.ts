import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export const ENTREPRISE = {
  nom: 'Anemos',
  tel: '0615670267',
  siret: '123 456 789'
};

@Injectable()
export class EntrepriseService {
  entreprise = ENTREPRISE;
  service$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  setService(service: string): void {
    this.service$.next(service);
  }

  get nom(): string {
    return this.entreprise.nom;
  }
  get tel(): string {
    return this.entreprise.tel;
  }
  get siret(): string {
    return this.entreprise.siret;
  }

}
