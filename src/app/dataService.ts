import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService{
    constructor(private http: HttpClient) { }
    userSoeid:string;
    userRole:string;

    public getUserRole(soeid:string){
        return this.http.get(`/api/getRoleBySoeid/${soeid}`);
    }
}