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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgComponentOutlet } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, TestComponent],
  entryComponents: [TestComponent],
  bootstrap: [ AppComponent ]
})

export class ProjectDetailsComponent implements OnInit {
  selectedProject: Project;
    
  page = TestComponent;

  projectId: number;
  isTest: boolean;
  isBbcRssFeed: boolean;
  isBrewBuddy: boolean;
  isTmExperiments: boolean;
  isOledExperiments: boolean;
  isBoxingBluetooth: boolean;
  isActivityTracker: boolean;
  isBrewTracker: boolean;
  isGuitarTuner: boolean;


  constructor(private projectService: ProjectsService, private route: ActivatedRoute) { }
  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.projectId = parseInt(params['id']);
  	});
  	this.selectedProject = this.projectService.get(this.projectId);
  	console.log(this.selectedProject);
    this.page = TestComponent;

    this.isTest = false;

    if(this.projectId == 1){
      this.isBbcRssFeed = true;
    }
    else if(this.projectId == 2){
      this.isBrewBuddy = true;
    }
    else if(this.projectId == 3){
      this.isTmExperiments = true;
    }
    else if(this.projectId == 4){
      this.isOledExperiments = true;
    }
    else if(this.projectId == 5){
      this.isBoxingBluetooth = true;
    }
    else if(this.projectId == 6){
      this.isActivityTracker = true;
    }
    else if(this.projectId == 7){
      this.isBrewTracker = true;
    }
    else if(this.projectId == 8){
      this.isGuitarTuner = true;
    }
    else{
      this.isTest = true;
    }

  }

}
