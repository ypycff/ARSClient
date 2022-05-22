import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IServiceResponse } from 'src/app/data/service-response';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Placement{
  groupImg: '/assets/img/marble-cake-thumb.jpg';
  leaderSoeid: string;
  leaderName: string;
  organization: string;
  position: string;
  skill: string;
}

export interface ISurvey {
  id: number;
  title: string;
  detail: string;
  category: string;
  status: string;
  label: string;
  labelColor: string;
  date: string;
  questions?: IQuestion[];
}

export interface IQuestion {
  id: number;
  title: string;
  question: string;
  answerType: number;
  answers?: IAnswer[];
}

export interface IAnswer {
  value: number;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }


  getSurveyItems(): Observable<ISurvey[]> {
    const url = `${environment.apiUrl}/surveys`;
    return this.http.get(url)
      .pipe(
        map((res: IServiceResponse<ISurvey>) => {
          // console.log("response[survey.service][getSurveyItems]", res);
          return res.data;
        })
      );
  }

}
