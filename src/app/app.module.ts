import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from "./angular-material.module";
import {AppRoutingModule} from './app-routing.module';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {NewUserComponent} from "./new-user/new-user.component";
import {MatNativeDateModule} from "@angular/material/core";
import {DatePipe} from "@angular/common";
import {NgxMaterialRatingModule} from "ngx-material-rating";
import {MatDialogModule} from "@angular/material/dialog";
import {UsersManagementComponent} from "./users-management/users-management.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    NewUserComponent,
    UsersManagementComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    NgxMaterialRatingModule,
    MatDialogModule
  ],
  providers: [
    HttpClientModule,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
