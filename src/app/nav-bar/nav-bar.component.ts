import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthorizationService} from "../service/authorization.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,
              private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.redirectToLogin();
  }

  redirectToLogin(): void {
    const url = 'login';
    this.router.navigateByUrl(url);
  }


  // isUserAdmin(): boolean {
  //   return this.authorizationService.isUserAdmin();
  // }

}
