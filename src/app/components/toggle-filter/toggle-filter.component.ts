import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toggle-filter',
  templateUrl: './toggle-filter.component.html',
  styleUrls: ['./toggle-filter.component.css']
})
export class ToggleFilterComponent implements OnInit {
  public buttonActive = null;
  @Input() public title: string;
  @Input() public key: string;
  @Output() public onSelection = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem(this.key)) === false) {
      this.buttonActive = false;
    } else if(JSON.parse(localStorage.getItem(this.key)) === true){
      this.buttonActive = true;
    } else {
      this.buttonActive = null;
    }
  }

  public onSelect(value) {
    if(this.buttonActive === value) {
      this.buttonActive = null;
    } else {
      this.buttonActive = value;
    }
    this.onSelection.emit(value);
  }
}
