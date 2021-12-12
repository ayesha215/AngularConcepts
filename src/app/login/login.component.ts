import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  token: any;
  data: any;
  constructor(
    private http: HttpClient,
    public appservice: AppService,
    public router: Router
  ) {}

  sub = new Subject();

  onSubmit(data: any) {
    //console.log(data);
    const profile = {
      email: data.email,
      password: data.password,
    };

    this.appservice.login(profile).subscribe((data) => {
      this.token = data;
      console.log(this.token);
      localStorage.setItem('key', this.token.token);
    });

    if (this.token != null) {
      this.router.navigateByUrl('/profile');
    }
  }

  IsLoggedIn() {
    let token = localStorage.getItem('key');
    if (token == null) {
      return false;
    } else {
      return true;
    }
  }

  ngOnInit(): void {
    this.sub.subscribe((v) => console.log('Subject =>1', v));
    this.sub.subscribe((m) => console.log('Subject =>2', m));
    this.sub.subscribe((n) => console.log('Subject =>3', n));
    this.sub.next('heloo');
    this.sub.next('ayesha');
    this.sub.subscribe((n) => console.log('Subject =>4', n));

    this.sub.next('fatima');
    this.sub.next('tree');

    let obs = new Observable((observer) => {
      observer.next(Math.random());
    });

    obs.subscribe((v) => console.log('Observable v=>1', v));
    obs.subscribe((v) => console.log('Observable v=>2', v));
  }
}
