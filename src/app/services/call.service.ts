import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp } from '@angular/http';

export class SMS {
  phone: string;
  time: string;
}

@Injectable()
export class CallService {
  url_free: string = 'https://smsapi.free-mobile.fr/sendmsg';
  // user: string = '12116850';
  // pass: string = 'i00oW8PpGaNVS8';
  user: string = '39447596';
  pass: string = 'ZJibmZEGVhyU0R';

  constructor(private http: Http, private jsonp: Jsonp) {
    // this.sendMessage('Test Message Angular');
  }

  createSMS(obj: SMS) {
    console.log('Message: ', obj);
    let msg = `RAPPEL - ${obj.phone} - ${obj.time}`;
    this.sendSMS(msg);
  }

  sendSMS(msg: string) {
    if (!msg || msg === '' || msg.length < 1) {return false; }

    msg = encodeURI(msg);

      this.jsonp
      .request(`${this.url_free}?user=${this.user}&pass=${this.pass}&msg=${msg}&callback=JSONP_CALLBACK`, { method: 'Get' })
      .subscribe((res) => {
        // console.log(res);
      }, (error) => {
        // error
      });

  }
}
