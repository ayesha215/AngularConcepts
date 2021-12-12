import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { PhoneNoValidatorDirective } from './directives/phone-no-validator.directive';
import { UserNameValidatorDirective } from './directives/user-name-validator.directive';
import { EmailValidatorDirectiveDirective } from './directives/email-validator-directive.directive';
import { CardComponent } from './projectionExample/card/card.component';
import { Component1Component } from './projectionExample/component1/component1.component';
import { Component2Component } from './projectionExample/component2/component2.component';
import { HooksComponent } from './hooks/hooks.component';
import { ChildComponentComponent } from './hooks/child-component/child-component.component';
import { ParentComponent } from './hooks/parent/parent.component';
import { Child1Component } from './child-component/child1/child1.component';
import { AgePipePipe } from './Pipe_Implementation/age-pipe.pipe';
import { DataComponent } from './data/data.component';
import { ProductsComponent } from './products/products.component';
import { RegisterWithReactiveFormsComponent } from './register-with-reactive-forms/register-with-reactive-forms.component';
import { MyLibModule } from 'my-lib';
import { MyTableComponent } from 'projects/my-lib/src/lib/my-table/my-table.component';
import { LibraryImplementationComponent } from './library-implementation/library-implementation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ProfileComponent,
    UpdateProfileComponent,
    PhoneNoValidatorDirective,
    UserNameValidatorDirective,
    EmailValidatorDirectiveDirective,
    CardComponent,
    Component1Component,
    Component2Component,
    HooksComponent,
    ChildComponentComponent,
    ParentComponent,
    Child1Component,
    AgePipePipe,
    DataComponent,
    ProductsComponent,
    RegisterWithReactiveFormsComponent,
    MyTableComponent,
    LibraryImplementationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MyLibModule,
  ],

  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
