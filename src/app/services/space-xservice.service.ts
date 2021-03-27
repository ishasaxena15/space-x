import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpaceXParams } from '../interfaces/space-xparams';
import { SpaceXResponseType } from '../interfaces/space-xresponse-type';

@Injectable({
  providedIn: 'root'
})
export class SpaceXServiceService {
  public rootUrl = "https://api.spacexdata.com";
  public path = "/v3/launches";
  public queryParams = "";
  constructor(
		private http: HttpClient,
  ) { }

  public getSpaceXData(params: SpaceXParams): Observable<Array<SpaceXResponseType>>  {
    this.queryParams = "";
    Object.keys(params).map(item => {
      if(params[item] || params[item] === false) {
        if(this.queryParams) {
          this.queryParams += `&${item}=${params[item]}`;
        } else {
          this.queryParams += `?${item}=${params[item]}`;
        }
      }
    })
    return this.http.get<Array<SpaceXResponseType>>(`${this.rootUrl}${this.path}${this.queryParams}`);
  }
}
