import { Component, OnInit } from '@angular/core';
import { Translations, Translation } from '../../models/translation';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  translations: Translation[] = Translations;

  constructor() { }

  ngOnInit() {
  }

}
