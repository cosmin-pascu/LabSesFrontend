import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthorizationService} from "../service/authorization.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail?: string;

  password?: string;

  errorMessage?: string;

  constructor(private router: Router,
              private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    this.redirectToUsersManamegemnt();
    // if (!this.validateEmailAndPassword()) {
    //   this.errorMessage = 'Invalid format. Please type valid email/password.'
    // }

    // this.authService
    //   .loginUser(this.userEmail!, this.password!)
    //   .then((result) => {
    //     this.authorizationService.setUserRole(this.userEmail!);
    //     this.handleLoginSuccess();
    //   })
    //   .catch((error) => {
    //     this.handleLoginError();
    //   })
  }

  handleLoginSuccess(): void {
    this.redirectToUsersManamegemnt();
  }

  handleLoginError(): void {
    this.errorMessage = "Login failed. Please check credentials.";
  }

  redirectToUsersManamegemnt(): void {
    this.router.navigateByUrl('users-management');
  }

  validateEmailAndPassword(): boolean {
    return this.userEmail != null && this.userEmail.length > 0 &&
      this.password != null && this.password.length > 0;
  }


}
