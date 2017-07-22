import { Component, ElementRef, ViewChild } from '@angular/core';
import { Title }  from '@angular/platform-browser';

import { CityService, City } from './services/city.service';
import { EntrepriseService } from './services/entreprise.service';
import { PopupService } from './services/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('obfuscator') obfuscatorRef: ElementRef;
  @ViewChild('main') mainRef: ElementRef;
  @ViewChild('drawer') drawerRef: ElementRef;
  @ViewChild('menuMobile') menuMobileRef: ElementRef;
  @ViewChild('footer') footerRef: ElementRef;
  @ViewChild('popup') popupRef: ElementRef;

  tel: string;

  visibility_popup: boolean = false;

  toggle_menu: boolean = false;
  userOnTop: boolean = true;

  service: string;
  themes_service = {
    home: false,
    serrurerie: false,
    plomberie: false,
    electricite: false,
    contact: false
  };

  size = {
    pc: false,
    mobile: false
  };

  constructor(private cityService: CityService,
  private entrepriseService: EntrepriseService,
  private title: Title,
  private popupService: PopupService) {
    this.tel = entrepriseService.tel;
    entrepriseService.service$.subscribe( s => {
      // console.log('Service: ', s);
      this.service = s;
      if (s === '') {return false; };
      this.selectTheme(this.service);
      this.setTitle(this.service);
    });
    cityService.$city.subscribe((c: City) => this.setTitle(this.service, c.name) );
    popupService.popup$.subscribe( res =>{
      this.visibility_popup = res;
    });

    // window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('load', this.onResize.bind(this));
  }

  private firstLetterToUpperCase( str: string ) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
  }

  private setTitle(newtitle: string, city?: string ) {
    if (newtitle === 'home') { newtitle = this.entrepriseService.nom; }
    if (!city) {
      this.title.setTitle(this.firstLetterToUpperCase(newtitle));
    } else {
      this.title.setTitle( `${this.firstLetterToUpperCase(newtitle)} | ${city}` );
    }
  }

  private selectTheme(theme: string) {
    let object = this.themes_service;
    // tslint:disable-next-line:forin
    for (let key in object) {
        object[key] = false;
    }
    object[theme] = true;
    this.themes_service = object;
    // console.log('Themes: ', this.themes_service);
  }

  closePopup(event: Event) {
    if (event.target === this.popupRef.nativeElement) {
      this.popupService.display(false);
      // console.log('c% Close popup', 'color: red;');
    }
  }

  activeMenu() {
    this.toggle_menu = !this.toggle_menu;
  }

  goTo(destination: string) {
    this.cityService.redirection(destination);
    this.toggle_menu = false;
  }

  onScroll() {
    let main: HTMLElement = this.mainRef.nativeElement;
    // let menuMobile = this.menuMobileRef;
    // console.log(main.scrollTop);
    if(main.scrollTop > 182) {
      this.userOnTop = false;
      this.toggle_menu = false;
    } else {
      this.userOnTop = true;
    }
  }

  onResize() {
    let window_width = window.innerWidth;
    console.log('Width: ', window_width)

    if (window_width > 900) { // PC
      this.size.pc = true;
      this.size.mobile = false;
    } else { // MOBILE
      this.size.mobile = true;
      this.size.pc = false;
    }
  }


  classForLayout() {
    let classes = {
      'mdl-layout': true,
      'mdl-js-layout': true,
      // 'mdl-layout--fixed-header': true,
      'theme-default': this.themes_service.home,
      'theme-serrurerie': this.themes_service.serrurerie,
      'theme-plomberie': this.themes_service.plomberie,
      'theme-electricite': this.themes_service.electricite
    };
    return classes;
  }
  classForDrawer() {
    let classes = {
      'drawer': true,
      'menu-clicked': this.toggle_menu,
      'drawer-hidden': this.toggle_menu
    };
    return classes;
  }
  classForMenuMobile() {
    let classes = {
      'mdl-layout__drawer is-visible': true,
      'menu-mobile': true,
      'is-visible': this.toggle_menu
    };
    return classes;
  }
  classForObfuscator() {
    let classes = {
      'mdl-layout__obfuscator': true,
      'is-visible': this.toggle_menu
    }
    return classes;
  }
  classForMain() {
    let classes = {
      'mdl-layout__content': true,
      'content': true,
      // 'mgtop': this.userOnTop
    };
    return classes;
  }
  classForHeader() {
    let classes = {
      'mdl-layout__header': true,
      'header-fixed-bar': true,
      'is-casting-shadow': true,
      // 'header-hidden': !this.userOnTop
    };
    return classes;
  }
  classForFooter() {
    let classes = {
      'display-footer': !this.userOnTop
      // 'display-footer': true
    };
    return classes;
  }
  classForPopup() {
    let classes = {
      'popup': true,
      'popup-is-visible': this.visibility_popup
    };
    return classes;
  }

}
