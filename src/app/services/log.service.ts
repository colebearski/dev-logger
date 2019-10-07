import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable }  from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});

  selectedLog = this.logSource.asObservable();

  constructor() { 
    this.logs = [
      {id: '1', text: 'Gen components', date: new Date('12/26/2019 12:54:22')},
      {id: '2', text: 'Dat new Ng', date: new Date('10/6/2019 12:58:22')},
      {id: '3', text: 'Chilling with Java', date: new Date('2/26/2019 12:50:22')}
    ]
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    // unshift (similar to push) places item at beginning of array
    this.logs.unshift(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((current, index) => {
      if (log.id === current.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }
}
