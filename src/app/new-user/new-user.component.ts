import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../domain/User";
import {UserMappingService} from "../service/user-mapping.service";

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
              private userService: UserService,
              private userMappingService: UserMappingService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let hl7user = this.userMappingService.mapUserToHl7User(this.user);

    this.userService.createUser(hl7user).subscribe(() => {
      this.newItemEvent.emit("orice");
      this.fakeReloadPage();
    });
  }

  fakeReloadPage() {
    const url = this.router.url;
    this.router.navigateByUrl('/').then(() => this.router.navigateByUrl(url));
  }

}
