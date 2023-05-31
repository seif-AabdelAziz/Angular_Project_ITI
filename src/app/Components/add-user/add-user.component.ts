import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersComponent } from '../users/users.component';
import { UsersDataService } from 'src/app/Services/users-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [],
})
export class AddUserComponent {
  constructor(
    private dialogRef: MatDialogRef<UsersComponent>,
    private addService: UsersDataService
  ) {}

  close(e: any) {
    this.addService.AddUser(e).subscribe();
    this.dialogRef.close();
  }

  AddUser() {
    if (this.myFormValid.valid) {
      this.close({
        name: this.myFormValid.value.name,
        email: this.myFormValid.value.email,
        phone: this.myFormValid.value.phone,
        address: { city: this.myFormValid.value.city },
      });
    }
  }

  myFormValid = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
  });
}
