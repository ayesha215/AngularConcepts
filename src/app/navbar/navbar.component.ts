import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { userModel } from '../user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  name: any;
  isLoggedIn = false;
  user: userModel = {} as userModel;
  userInfo: any;
  constructor(private appservice: AppService, public router: Router) {}

  usersubscription: Subscription | undefined;

  ngOnInit(): void {
    this.appservice.getCurrentData().subscribe((data) => {
      this.userInfo = data;
      this.user = this.userInfo;
    });
    //////////
    this.isLoggedIn = this.appservice.isLoggedIn();
    console.log(this.isLoggedIn);
  }

  logout() {
    localStorage.removeItem('key');
    console.log('token removed');
    this.router.navigateByUrl('/login');
    window.location.reload();
  }
  redirect() {
    this.router.navigateByUrl('/register');
  }
}
