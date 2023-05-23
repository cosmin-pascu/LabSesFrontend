import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {NewUserComponent} from "./new-user/new-user.component";
import {UsersManagementComponent} from "./users-management/users-management.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

const routes: Routes = [
  {path: '', redirectTo: 'users-management', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: 'users-management', component: UsersManagementComponent},
  {path: 'edit-user/:id', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
