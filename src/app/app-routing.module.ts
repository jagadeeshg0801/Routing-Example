import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'templateDriven', component: TemplateDrivenFormsComponent},
  {path:'login',component:LoginFormComponent},
  {path: 'reactive', component: ReactiveFormComponent},
  {path: 'register', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
