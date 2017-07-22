import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';

import { CallService, SMS } from '../../../services/call.service';
import { PopupService } from '../../../services/popup.service';

@Component({
  selector: 'app-demande-rappel',
  templateUrl: './demande-rappel.component.html',
  styleUrls: ['./demande-rappel.component.scss']
})
export class DemandeRappelComponent implements OnInit {
  @ViewChild('form') formRef: ElementRef;
  @ViewChild('inputSelect') inputSelectRef: ElementRef;
  @ViewChild('inputNumber') inputNumberRef: ElementRef;
  @ViewChild('buttonSubmit') buttonSubmitRef: ElementRef;
  formCallback: FormGroup;
  time = [
    '5-10 minutes',
    '30 minutes',
    '1 heures',
    '2 heures',
    '3 heures',
    'Soirée'
  ];
  inputNumber = {
    'mdl-textfield': true,
    'mdl-js-textfield': true,
    'mdl-textfield--floating-label': true,
    'is-invalid': false
  };

  constructor(private fb: FormBuilder,
  private callService: CallService,
  private popupService: PopupService) {
    this.formCallback = this.fb.group({
      phone: '',
      time: '5-10 minutes'
    });
  }

  ngOnInit() {
  }

  private toggleClass(): void|boolean {
    let input: HTMLElement = this.inputSelectRef.nativeElement;
    if (input.classList.contains('is-dirty')) { return false; }
    input.classList.add('is-dirty');
  }

  private checkLength(input){
    return input.length === 2 ||
        input.length === 5 ||
        input.length === 8 ||
        input.length === 11 ? true : false;
  }

  classForInputNumber(): Object {
    return this.inputNumber;
  }

  checkNumber(input: String[], event: KeyboardEvent): void|boolean {
    let key = event.key;
    // console.log('event: ', event);
    if (key === 'Backspace' && input.length > 0) {
      this.formCallback.patchValue({phone: this.formCallback.value.phone.slice(0, -1) });
    }
    if (key === ' ' && input.length > 0) {
      if (this.checkLength(input)) {
        this.formCallback.patchValue({phone: this.formCallback.value.phone + ' ' });
        // console.log('checkLength', input.length);
      }
      return false;
    }
    if (key === 'Shift' || key === 'Backspace' ) {return false;}
    if (this.checkLength(input)) {
          this.formCallback.patchValue({phone: this.formCallback.value.phone + ' ' }
    ); }
  }
  checkAfterBlur(input) {
    // console.log('input.length: ', input.length);
    let submit: HTMLElement = this.buttonSubmitRef.nativeElement;
    let number = 0;
    for (let i = 0; i < input.length; i++) {
      if (/^\d+$/.test(input[i])) { // Si l'item est un nombre
        number++;
        // console.log(input[i], ' is a Number' );
      }
    }
    if (number < 10) {
      this.inputNumber['is-invalid'] = true;
      submit.setAttribute('disabled', 'true');
      // console.log('%c Invalid', 'color: red;');
    } else {
      this.inputNumber['is-invalid'] = false;
      submit.removeAttribute('disabled');
      // console.log('%c Valid', 'color: green;');
    }
    // console.log(this.inputNumber);
  }

  selectTime(item): void {
    this.formCallback.patchValue({ time: this.time[item] });
    this.toggleClass();
  }

  submit(): void {
    this.callService.createSMS(this.formCallback.value);
  }


  closePopup() { // for mobile only
    this.popupService.display(false);
  }



}
