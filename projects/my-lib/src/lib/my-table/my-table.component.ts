import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
})
export class MyTableComponent implements OnInit {
  @Input() title: string | any;
  @Input() gender: string | any;
  @Input() email: string | any;
  @Input() birth: string | any;
  @Input() age: string | any;
  constructor() {}

  ngOnInit(): void {}
}
