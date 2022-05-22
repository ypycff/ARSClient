import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Person, Profile, Placement, Interview, Preference } from './Module';

@Injectable({ providedIn: 'root' })
export class SelectDataService {
    getMyInterview(soeid: string) {
        return this.http.get(`/api/getMyInterview/${soeid}`);
    }
    getOneSkills(soeid: string) {
        return this.http.get(`/api/getOneSkills/${soeid}`);
    }
    constructor(private http: HttpClient) { }
    getUrl(url:string){
        return '/api'+url;
    }

    public register(person:Person){
        return this.http.post(this.getUrl('/register'),person);
    }

    public addProfile(profile:Profile){
        return this.http.post(this.getUrl('/addProfile'),profile);
    }

    public updateProfile(profile:Profile){
        return this.http.post(this.getUrl('/updateProfile'),profile);
    }

    public submitProfile(profile:Profile){
        return this.http.post(this.getUrl('/submitProfile'),profile);
    }

    public updatePlacement(placement:Placement){
        return this.http.post(this.getUrl('/updatePlacement'),placement);
    }

    public addPlacement(placement:Placement){
        return this.http.post(this.getUrl('/addPlacement'),placement);
    }

    public submitPlacement(placement:Placement){
        return this.http.post(this.getUrl('/submitPlacement'),placement);
    }

    public getPlacementsList(){
        return this.http.get(this.getUrl('/getPlacementsList'));
    }

    public getProfilesList(){
        return this.http.get(this.getUrl('/getProfilesList'))
    }

    public addInterviews(interview:Interview[]){
        return this.http.post(this.getUrl('/addInterviews'),interview);
    }

    public updateInterviews(interview:Interview[]){
        return this.http.post(this.getUrl('/updateInterviews'),interview);
    }

    public submitInterviews(interview:Interview[]){
        return this.http.post(this.getUrl('/submitInterviews'),interview);
    }

    public addPreference(preference:Preference[]){
        return this.http.post(this.getUrl('/addPreference'),preference);
    }

    public updatePreference(preference:Preference[]){
        return this.http.post(this.getUrl('/updatePreference'),preference);
    }

    public submitPreference(preference:Preference[]){
        return this.http.post(this.getUrl('/submitPreference'),preference);
    }

    public match (){
        return this.http.get(this.getUrl('/match'));
    }

    public getMatchResult(){
        return this.http.get(this.getUrl('/getMatchResult'));
    }

    public getRecommendation(soeid:string){
        return this.http.get(this.getUrl('/getRecommendation'));
    }

    public getMyPreference(soeid:string){
        return this.http.get(this.getUrl('/getMyPreference'+`/${soeid}`));
    }
    public getOneProfile(soeid:string){
        return this.http.get(this.getUrl('/getOneProfile')+`/${soeid}`);
    }
    public getOnePlacement(soeid:string){
        return this.http.get(this.getUrl('/getOnePlacement')+`/${soeid}`);
    }
}