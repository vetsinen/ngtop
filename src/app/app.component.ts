import {Component, OnInit} from '@angular/core';
import {GetDataService} from "./get-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  size: number;
  title = 'ngtop';

  constructor(private getData: GetDataService) {
  }

  ngOnInit() {
    this.getData.query().subscribe(res => {
      this.size = res['bytes'];
    });
  }
}
