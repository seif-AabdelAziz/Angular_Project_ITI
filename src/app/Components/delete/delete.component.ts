import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersComponent } from '../users/users.component';
import { UsersDataService } from '../../Services/users-data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styles: [],
})
export class DeleteComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UsersComponent>,
    private deleteService: UsersDataService
  ) {}

  Delete() {
    this.deleteService.deleteUser(this.data.id).subscribe();
    this.Cancel();
  }

  Cancel() {
    this.dialogRef.close();
  }
}
