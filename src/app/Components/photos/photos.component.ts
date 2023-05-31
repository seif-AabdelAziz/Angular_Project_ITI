import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from 'src/app/Services/users-data.service';

let userID: any = 0;
let albumID: any = 0;

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styles: [],
})
export class PhotosComponent implements OnInit {
  constructor(
    private dataURL: ActivatedRoute,
    private photosData: UsersDataService
  ) {
    userID = this.dataURL.snapshot.params['id'];
    albumID = this.dataURL.snapshot.params['Num'];
  }

  userData: any;

  albumData: any;

  ngOnInit(): void {
    this.photosData.GetUserByID(userID).subscribe({
      next: (data: any) => {
        this.userData = data;
      },
      error: () => {},
    });

    this.photosData.GetPhotos(albumID).subscribe({
      next: (data: any) => {
        this.albumData = data;
      },
      error: () => {},
    });
  }
}
