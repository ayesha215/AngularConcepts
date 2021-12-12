import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { userModel } from '../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userInfo: any = [];
  user: userModel = {} as userModel;

  subscription: Subscription | undefined;

  constructor(private http: HttpClient, public appservice: AppService) {}

  ngOnInit(): void {
    this.appservice.ShowProfile().subscribe((data) => {
      this.userInfo = data;
      this.user = this.userInfo;
      console.log(this.user);
      console.log(this.user.name);
    });

   
  }
}
