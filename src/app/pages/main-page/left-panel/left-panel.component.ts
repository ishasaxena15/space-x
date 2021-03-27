import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  public startYear = 2006;
  public endYear = 2020;
  @Output() public setPatams = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }

  public getParams(value, param) {
    let obj:any = {[param]: value};
    this.setPatams.emit(obj);
  }

}
