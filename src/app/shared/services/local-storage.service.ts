import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() { 
    this.storage = window.localStorage;
  }

  set(key: string, value: string){
    return this.storage.setItem(key, JSON.stringify(value));
  }

  get(key: string){
    return this.storage.getItem(key);
  }
}
