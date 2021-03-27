import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent implements OnInit {
  @Input() public title: string;
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
  }

  public onSelect(value) {
    this.onSelection.emit(value);
  }

}
