import { Component, OnInit } from '@angular/core';
import { SpaceXServiceService } from '../../services/space-xservice.service';
import { SpaceXParams } from '../../interfaces/space-xparams';
import { SpaceXResponseType } from '../../interfaces/space-xresponse-type';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public cardArray: SpaceXResponseType[];
  public getSpaceXParams: SpaceXParams = {
    limit: 100,
    launch_success: null,
    land_success: null,
    launch_year: null
  };
  public loading = false;
  constructor(
    public spaceXService: SpaceXServiceService,
  ) { }

  ngOnInit() {
    this.setCardData();
  }

  public setFilter(filterOject) {
    this.getSpaceXParams[Object.keys(filterOject)[0]] = filterOject[Object.keys(filterOject)[0]];
    this.setCardData();
  }

  public getCardData(): Observable<Array<SpaceXResponseType>> {
    return this.spaceXService.getSpaceXData(this.getSpaceXParams)
  }

  public setCardData() {
    this.loading = true;
    this.getCardData()
    .subscribe(
      result=> {
        this.loading = false;
        this.cardArray = result;
      }, 
      error => {
        console.log("error", error);
    })
  }
}
