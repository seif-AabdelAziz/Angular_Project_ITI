import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  constructor(private usersService: HttpClient) {}

  private dbURL = 'https://jsonplaceholder.typicode.com/users';

  private serverURL = 'http://localhost:3000/Users';

  GetAllUsers() {
    return this.usersService.get(this.serverURL);
  }

  AddUser(addUser: any) {
    return this.usersService.post(this.serverURL, addUser);
  }

  updateUser(updatedData: any) {
    return this.usersService.put(
      this.serverURL + '/' + updatedData.id,
      updatedData
    );
  }

  deleteUser(userID: any) {
    return this.usersService.delete(this.serverURL + '/' + userID);
  }

  GetUserByID(id: any) {
    return this.usersService.get(this.serverURL + '/' + id);
  }

  GetUserAlbums(id: any) {
    return this.usersService.get(this.dbURL + '/' + id + '/' + 'albums');
  }

  GetPhotos(albumID: any) {
    return this.usersService.get(
      'https://jsonplaceholder.typicode.com/albums/' + albumID + '/photos'
    );
  }
}
