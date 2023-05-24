import {Component, OnInit} from '@angular/core';
import {User} from "../domain/User";
import {UserService} from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserMappingService} from "../service/user-mapping.service";

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
              private router: Router,
              private userMappingService: UserMappingService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.userService.getUserById(this.userId!).subscribe(result => {
      let hl7user = result;

      this.user = this.userMappingService.mapHl7UserToUser(hl7user);
    });
  }


  onSubmit() {
    let hl7user = this.userMappingService.mapUserToHl7User(this.user);

    this.userService.editUser(this.userId!, hl7user).subscribe(() => {
      this.router.navigateByUrl('users-management');
    })
  }


}
