import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MyLibService } from 'projects/my-lib/src/public-api';

@Component({
  selector: 'app-library-implementation',
  templateUrl: './library-implementation.component.html',
  styleUrls: ['./library-implementation.component.css'],
})
export class LibraryImplementationComponent implements OnInit {
  user: any;
  constructor(public libservice: MyLibService) {}

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.libservice.getData().subscribe((res) => {
      this.user = res;
      console.log(this.user);
      console.log(this.user.results[0].name.first);
    });
  }
}
