import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { userModel } from '../user.model';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  data: any = [];
  user: userModel = {} as userModel;

  constructor(
    private http: HttpClient,
    public appservice: AppService,
    private router: ActivatedRoute
  ) {}

  // get SharedData() {
  //   return this.appservice.sharingData.name;
  // }

  // set SharedData(data: any) {
  //   this.appservice.sharingData.name = data;
  // }

  // send(name: any) {
  //   console.log(name);
  //   this.appservice.saveData(name);
  //   console.log(name);
  // }

  onSubmit(): void {
    this.appservice.UpdateProfile(this.user).subscribe((result) => {
      console.log(result);
      // console.log(localStorage.getItem('key'));
    });
  }

  ngOnInit(): void {
    this.appservice.getCurrentData().subscribe((result) => {
      this.data = result;
      this.user = this.data;
      console.log(this.user);
    });
  }
}
