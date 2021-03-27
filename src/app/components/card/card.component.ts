import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public cardInfo: any;
  public successfullLanding = false;

  constructor() { }

  ngOnInit() {
    this.successfullLanding = this.cardInfo.rocket.first_stage.cores.filter(item => item.land_success === false || item.land_success === null).length ? false : true;
  }

}
