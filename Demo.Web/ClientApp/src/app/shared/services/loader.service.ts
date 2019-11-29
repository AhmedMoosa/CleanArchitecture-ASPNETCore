import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private _isLoading: boolean;
  constructor() { }


  get isLoading() {
    return this._isLoading;
  }

  set isLoading(value) {
    this._isLoading = value;
  }
  
}
