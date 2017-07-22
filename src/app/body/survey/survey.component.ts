import { Component, OnInit } from '@angular/core';
import { find } from 'lodash';

interface Survey {
  display?: string;
  question?: string;
  reponses?: any[]
}

interface Survey2 {
  display?: string;
  question?: string;
  reponses?: [{
    indexNextSurvey: number;
    display: string;
  }]
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  lastSurveyForBack: Survey;
  survey: Survey;

  constructor() {
    this.survey = this.initSurvey();
    this.lastSurveyForBack = this.survey;
  }

  ngOnInit() {
  }

  initSurvey(): Survey {
    return {
      question: 'Quelle est l’origine de votre problème ?',
      reponses: [{
        display: 'Plomberie',
        question: 'Quel est votre probleme?',
        reponses: [{
            display: 'Remplacer une element'
          }, {
            display: 'Fuite'
          }, {
            display: 'Equipement sanitaire bouché'
          }, {
            display: 'Réparation / diagnostic compteur d\' eau'
          }
        ]
      }, {
        display: 'Electicite',
      }, {
        display: 'Serrurie'
      }]
    };
  }

  initSurvey2(): void {
    /*
    let plomberie: Survey2[] = [
      {
        question: 'Quel est votre probleme?',
        reponses: [{
            display: 'Remplacer une element'
          }, {
            display: 'Fuite'
          }, {
            display: 'Equipement sanitaire bouché'
          }, {
            display: 'Réparation / diagnostic compteur d\' eau'
          }
        ]
      }
    ]*/
  }

  chooseReponse(survey: Survey): void {
    this.lastSurveyForBack = this.survey;
    this.survey = survey;
  }

  backSurvey(): void {
    this.survey = this.lastSurveyForBack;
  }

}
