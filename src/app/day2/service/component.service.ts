
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  private passingData$ = new BehaviorSubject<any>(null);

  constructor(
  ) { }
  getValue() {
    return this.passingData$.asObservable();
  }
  setValue(data:any) {
    this.passingData$.next(data);
  }


}
