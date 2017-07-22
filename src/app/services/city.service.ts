import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import {BehaviorSubject} from 'rxjs';

export class City {
  departement_code: string;
  id: string;
  latitude: string;
  libelle: string;
  longitude: string;
  name: string;
  zipcode: string;
}

@Injectable()
export class CityService {
  // url_server = 'https://aprixdor.com/api/getcity.php';
  url_server = 'http://dev69.local/api/location/getcity.php';
  city: City;

  $city: EventEmitter<City> = new EventEmitter<City>();

  constructor(private http: Http,
  private router: Router) {
    router.events.subscribe((e) => {
        if ( router.routerState.root.firstChild ) {
            router.routerState.root.firstChild.params.subscribe((v) => {
              if (!v['city']) { return false; }
              this.getCity(v['city']).subscribe( response => {
                this.city = response.json();
                this.$city.next(this.city);
              });
            });
        }
    });
  }

  getCity(city): Observable<any> {
    // return this.http.get(this.url_server + '?action=getcity&zipcode=' + zipcode);
    if (isNaN(city)) {
      return this.http.get(this.url_server + '?action=getcity&libelle=' + city);
    } else {
      return this.http.get(this.url_server + '?action=getcity&zipcode=' + city);
    }
  }

  redirection(destination: string) {
    if (this.city) {
      this.router.navigate([destination, this.city.zipcode]);
    } else {
      this.router.navigate([destination]);
    }
  }


}
