import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
    storage: Storage;
    constructor(){
        this.storage = localStorage;
    }

    clean(){
        this.storage.clear()
    }

    getItem(key:string){
        return this.storage.getItem(key);
    }

    setItem(key:string,value:string){
        this.storage.setItem(key,value);
    }
}
