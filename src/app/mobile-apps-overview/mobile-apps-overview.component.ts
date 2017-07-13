import { Component, OnInit } from '@angular/core';
import { ProjectType } from '../projectType';
@Component({
  selector: 'app-mobile-apps-overview',
  templateUrl: './mobile-apps-overview.component.html',
  styleUrls: ['./mobile-apps-overview.component.css']
})
export class MobileAppsOverviewComponent implements OnInit {
  projectType: string = "mobile";
  constructor() { }

  ngOnInit() {
  }

}
