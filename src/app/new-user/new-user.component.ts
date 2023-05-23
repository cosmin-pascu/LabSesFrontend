import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../domain/User";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user: User = new User();

  @Output() newItemEvent = new EventEmitter<string>();

  errorMessage?: string;
  genders: string[] = ["None", "Male", "Female"];

  constructor(private router: Router,
              private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.createUser(this.user).subscribe(() => {
      this.newItemEvent.emit("orice");
      this.fakeReloadPage();
    });
  }

  fakeReloadPage() {
    const url = this.router.url;
    this.router.navigateByUrl('/').then(() => this.router.navigateByUrl(url));
  }

}
