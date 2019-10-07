import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: {
    id: string,
    text: string,
    date: any
  }[];

  constructor() { }

  ngOnInit() {
    this.logs = [
      {id: '1', text: 'Gen components', date: new Date('12/26/2019 12:54:22')},
      {id: '2', text: 'Dat new Ng', date: new Date('10/6/2019 12:58:22')},
      {id: '3', text: 'Chilling with Java', date: new Date('2/26/2019 12:50:22')}
      // props ^^
    ]
  }

}
