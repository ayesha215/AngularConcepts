import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { userModel } from '../user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: userModel = {} as userModel;
  userinfo: any;
  disable = false;

  constructor(
    private http: HttpClient,
    public appservice: AppService,
    public router: Router
  ) {}

  onSubmit() {
    this.appservice.Register(this.user).subscribe((data) => {
      this.userinfo = data;
      this.user = this.userinfo;
      console.log(this.user);
    });
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {}
}
