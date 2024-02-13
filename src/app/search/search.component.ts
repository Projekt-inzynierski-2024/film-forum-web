import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchBar') searchBar: ElementRef;

  constructor(public dialogRef: DynamicDialogRef) {
  }

  ngAfterViewInit(): void {
    this.searchBar.nativeElement.focus();
  }

  search() {
  }
}
