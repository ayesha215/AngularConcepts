import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { Component1Component } from './projectionExample/component1/component1.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { Component2Component } from './projectionExample/component2/component2.component';
import { HooksComponent } from './hooks/hooks.component';
import { ChildComponentComponent } from './hooks/child-component/child-component.component';
import { ParentComponent } from './hooks/parent/parent.component';
import { DataComponent } from './data/data.component';
import { ProductsComponent } from './products/products.component';
import { RegisterWithReactiveFormsComponent } from './register-with-reactive-forms/register-with-reactive-forms.component';
import { LibraryImplementationComponent } from './library-implementation/library-implementation.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-profile',
    component: UpdateProfileComponent,
  },
  {
    path: 'component1',
    component: Component1Component,
  },
  {
    path: 'component2',
    component: Component2Component,
  },
  {
    path: 'hooks',
    component: HooksComponent,
  },
  {
    path: 'child-component',
    component: ChildComponentComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'data',
    component: DataComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'register-with-reactive-forms',
    component: RegisterWithReactiveFormsComponent,
  },
  {
    path: 'library-implementation',
    component: LibraryImplementationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
