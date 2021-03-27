import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpaceXServiceService {
  public rootUrl = "https://api.spacexdata.com";
  public path = "/v3/launches";
  constructor(
		private http: HttpClient,
  ) { }

  public getSpaceXData(params): Observable<any>  {
    return this.http.get(`${this.rootUrl}${this.path}`);
  }
}
