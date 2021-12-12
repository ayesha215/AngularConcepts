import { Component, Input, OnInit } from '@angular/core';
import { userModel } from '../user.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  user: userModel = {} as userModel;
  date: string | undefined;
  teams: any = [
    {
      name: 'xyz',
      city: 'Islamabad',
      salary: 25000,
      dob: '10/05/1997',
    },
    {
      name: 'abc',
      city: 'Lahore',
      salary: 80000,
      dob: '12/05/1985',
    },
    {
      name: 'def',
      city: 'Rawalpindi',
      salary: 150000,
      dob: '10/10/1991',
    },
    {
      name: 'ghi',
      city: 'Karachi',
      salary: 55000,
      dob: '12/18/1987',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
