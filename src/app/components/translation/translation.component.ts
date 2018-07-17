import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Translations, Translation } from '../../models/translation';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit, AfterViewInit {

  translations: Translation[] = Translations;
  displayedColumns: string[] = ['language', 'id', 'translators'];

  dataSource = new MatTableDataSource<Translation>(Translations);

  filterText: string;

  @ViewChild(MatSort) sort: MatSort;

  // Set the sort after the view init since this component will be able to query its view for the initialized sort.
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor() { }

  ngOnInit() {
  }
}
