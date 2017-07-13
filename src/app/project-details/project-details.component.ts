import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../project';
import { ActivatedRoute } from '@angular/router';
import { TestComponent } from '../projectsHtml/test/test.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit {
  selectedProject: Project;
  projectId: number;
  isTest: boolean;
  isNotTest: boolean;

  constructor(private projectService: ProjectsService, private route: ActivatedRoute) { }
  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.projectId = parseInt(params['id']);
  	});
  	this.selectedProject = this.projectService.get(this.projectId);
  	console.log(this.selectedProject);

    this.isTest = true;
    this.isNotTest = false;
  }

}
