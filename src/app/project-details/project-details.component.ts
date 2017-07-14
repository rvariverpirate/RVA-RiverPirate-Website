import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../project';
import { ActivatedRoute } from '@angular/router';
import { TestComponent } from '../projectsHtml/test/test.component';
import { BbcRssFeedComponent } from '../projectsHtml/bbc-rss-feed/bbc-rss-feed.component';
import { BrewBuddyComponent } from '../projectsHtml/brew-buddy/brew-buddy.component';
import { TmExperimentsComponent } from '../projectsHtml/tm-experiments/tm-experiments.component';
import { OledExperimentsComponent } from '../projectsHtml/oled-experiments/oled-experiments.component';
import { BoxingBluetoothComponent } from '../projectsHtml/boxing-bluetooth/boxing-bluetooth.component';
import { ActivityTrackerComponent } from '../projectsHtml/activity-tracker/activity-tracker.component';
import { BrewTrackerComponent } from '../projectsHtml/brew-tracker/brew-tracker.component';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit {
  selectedProject: Project;
  projectId: number;
  isTest: boolean;
  isBbcRssFeed: boolean;
  isBrewBuddy: boolean;
  isTmExperiments: boolean;
  isOledExperiments: boolean;
  isBoxingBluetooth: boolean;
  isActivityTracker: boolean;
  isBrewTracker: boolean;


  constructor(private projectService: ProjectsService, private route: ActivatedRoute) { }
  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.projectId = parseInt(params['id']);
  	});
  	this.selectedProject = this.projectService.get(this.projectId);
  	console.log(this.selectedProject);

    this.isTest = true;
    this.isBbcRssFeed = true;
    this.isBrewBuddy = true;
    this.isTmExperiments = true;
    this.isOledExperiments = true;
    this.isBoxingBluetooth = true;
    this.isActivityTracker = true;
    this.isBrewTracker = true;
  }

}
