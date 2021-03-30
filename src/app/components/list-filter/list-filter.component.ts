import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent implements OnInit {
  @Input() public title: string;
  @Input() public key: string;
  @Input() public startYear: number;
  @Input() public endYear: number;
  @Output() public onSelection = new EventEmitter<String>();
  public list = [];
  public selectedButton = null;
  constructor() { }

  ngOnInit() {
    for(var i=0; i<(this.endYear-this.startYear+1); i++) {
      this.list.push(this.startYear + i);
    }
    if(JSON.parse(localStorage.getItem(this.key))) {
      this.selectedButton = JSON.parse(localStorage.getItem(this.key));
    }
  }

  public onSelect(value) {
    if(this.selectedButton === value) {
      this.selectedButton = null;
    } else {
      this.selectedButton = value;
    }
    this.onSelection.emit(value);
  }

}
