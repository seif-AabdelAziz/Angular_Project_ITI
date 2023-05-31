import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersDataService } from 'src/app/Services/users-data.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: [],
})
export class EditUserComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UsersComponent>,
    private updateService: UsersDataService
  ) {}

  update(n: any, e: any, p: any, a: any) {
    if (this.updateValid.valid) {
      let updateData = {
        id: this.data.id,
        name: n,
        email: e,
        phone: p,
        address: { city: a },
      };
      this.updateService.updateUser(updateData).subscribe();

      this.dialogRef.close();
    }
  }

  updateValid = new FormGroup({
    name: new FormControl(this.data.name, Validators.required),
    email: new FormControl(this.data.email, [
      Validators.required,
      Validators.email,
    ]),
    phone: new FormControl(this.data.phone, Validators.required),
    city: new FormControl('', Validators.required),
  });
}
