import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {
  @Input() public cardArray;
  @Input() public loading;
  constructor() { }

  ngOnInit() {
  }

}
