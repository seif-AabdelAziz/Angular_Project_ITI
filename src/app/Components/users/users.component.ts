import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDataService } from 'src/app/Services/users-data.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { DeleteComponent } from 'src/app/Components/delete/delete.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [],
})
export class UsersComponent implements OnInit {
  constructor(private getUsers: UsersDataService, private dialog: MatDialog) {}

  Users: any;
  ngOnInit(): void {
    this.getUsers.GetAllUsers().subscribe({
      next: (data: any) => {
        this.Users = data;
      },
      error: () => {},
    });
  }

  OpenPopUp() {
    const myDialog = this.dialog.open(AddUserComponent);

    myDialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
  editUser(id: any, name: any, email: any, phone: any, city: any) {
    const editUser = this.dialog.open(EditUserComponent, {
      data: { id: id, name: name, email: email, phone: phone, adrress: city },
    });

    editUser.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  deleteUser(id: any, name: any) {
    const delUser = this.dialog.open(DeleteComponent, {
      data: { id: id, name: name },
    });

    delUser.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
}
