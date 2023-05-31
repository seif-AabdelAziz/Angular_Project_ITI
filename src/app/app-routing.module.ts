import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './Components/users/users.component';
import { UserAlbumsComponent } from './Components/user-albums/user-albums.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { PhotosComponent } from './Components/photos/photos.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user/edit/:id', component: EditUserComponent },
  { path: ':/remove/:id', component: UserAlbumsComponent },
  { path: 'users/:id/albums/:Num/Photos', component: PhotosComponent },
  { path: 'users/:id', component: UserAlbumsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
