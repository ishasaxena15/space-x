import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toggle-filter',
  templateUrl: './toggle-filter.component.html',
  styleUrls: ['./toggle-filter.component.css']
})
export class ToggleFilterComponent implements OnInit {
  public buttonActive = null;
  @Input() public title: string;
  @Output() public onSelection = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  public onSelect(value) {
    this.onSelection.emit(value);
  }
}
