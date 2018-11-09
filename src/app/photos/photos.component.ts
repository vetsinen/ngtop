import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photonames = [
    'coders.jpg','winter.jpg','polyhand.jpg','oop.png', 'octocats.jpg', 'evening.jpg'
  ];
  photos;

  constructor() {
    this.photos = this.photonames.map(
      (el)=>'https://vetsinen.github.io/photobase/'+el)
  }

  ngOnInit() {
  }

}
