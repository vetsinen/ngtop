import {Component, OnInit} from '@angular/core';
import {GetDataService} from "../get-data.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  res;
  photos = [];

  constructor(private getData: GetDataService) {
  }

  ngOnInit() {
    this.getData.query().subscribe(res => {
      this.res = res;
      this.photos = res['default'];
    });
  }
}
