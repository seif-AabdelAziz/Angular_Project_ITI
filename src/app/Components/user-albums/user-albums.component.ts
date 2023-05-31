import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from 'src/app/Services/users-data.service';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styles: [],
})
export class UserAlbumsComponent implements OnInit {
  Id: number = 0;
  constructor(
    private dataFromUrl: ActivatedRoute,
    private userData: UsersDataService
  ) {
    this.Id = dataFromUrl.snapshot.params['id'];
  }

  dataByID: any;
  albumsData: any;

  ngOnInit(): void {
    this.userData.GetUserByID(this.Id).subscribe({
      next: (data: any) => {
        this.dataByID = data;
      },
      error: () => {},
    });

    this.userData.GetUserAlbums(this.Id).subscribe({
      next: (albums: any) => {
        this.albumsData = albums;
      },
      error: () => {},
    });

    console.log(this.albumsData);
  }
}
