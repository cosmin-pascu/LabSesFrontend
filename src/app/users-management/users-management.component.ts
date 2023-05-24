import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../domain/User";
import {MatTableDataSource} from "@angular/material/table";
import {UserService} from "../service/user.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {Router} from "@angular/router";
import {MatSort, Sort} from "@angular/material/sort";
import {UserMappingService} from "../service/user-mapping.service";
import {Hl7User} from "../domain/Hl7User";

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {

  usersList: User[] = [];

  displayedColumnsUsers: string[] = ['firstName', 'lastName', 'email', 'gender', 'birthDate', "address", "phone", "action"];
  dataSourceUsers: MatTableDataSource<User> = new MatTableDataSource();

  constructor(private userService: UserService,
              private _liveAnnouncer: LiveAnnouncer,
              private router: Router,
              private userMappingService: UserMappingService) { }

  @ViewChild(MatSort) sortUsers: MatSort = new MatSort();

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(result => {
      for (const key in result) {
        let hl7user: Hl7User = result[key];
        let user: User = this.userMappingService.mapHl7UserToUser(hl7user);
        user.userId = key;
        this.usersList.push(user);
      }
      this.dataSourceUsers = new MatTableDataSource<User>(this.usersList);
    });
  }

  ngAfterViewInit() {
    this.dataSourceUsers!.sort = this.sortUsers;
  }

  announceUsersSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  deleteUser(row: any, event: any) {
    this.deleteUserAction(row.userId);
  }

  editUser(row: any, event: any) {
    this.editUserAction(row.userId);
  }

  deleteUserAction(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.fakeReloadPage();
    });
  }

  editUserAction(id: string) {
    this.router.navigateByUrl('edit-user/' + id);
  }

  fakeReloadPage() {
    window.location.reload();
  }

  refreshPage($event: string) {
    this.fakeReloadPage();
  }
}
