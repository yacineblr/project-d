import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PopupService {
  popup$: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  display(param: boolean) {
    this.popup$.next(param);
  }

}
