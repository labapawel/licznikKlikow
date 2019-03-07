import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickServiceService {
  _obs = new BehaviorSubject<number>(0);
  _count = 0;

  constructor() { }

  addClick()
  {
    this._count++;
    this._obs.next(this._count);
  }

  getCounter()
  {
    return this._obs.asObservable();
  }


}
