import {Component, OnInit} from '@angular/core';
import {User} from "../domain/User";
import {UserService} from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User = new User();

  genders: string[] = ["None", "Male", "Female"];

  userId?: string;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.userService.getUserById(this.userId!).subscribe(result => {
      this.user = result;
    });
  }


  onSubmit() {
    this.userService.editUser(this.userId!, this.user).subscribe(() => {
      this.router.navigateByUrl('users-management');
    })
  }


}
