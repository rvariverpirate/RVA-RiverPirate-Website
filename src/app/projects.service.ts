import { Injectable } from '@angular/core';
import { Project } from './project';
import { ProjectType } from './projectType';

// Types of Projects
// electronic: 0
// mobile: 1
// pyhton: 2

const PROJECT : Project[] =[
	{id: 1, projectType: 0, title: "BBC RSS Feed Reader", description: "WiFi enabled device that displays current news from the BBC.", gitHub: "https://github.com/rvariverpirate/bbcRssFeedReader", mainImage: "assets/images/bbc-news-icon.png"},
	{id: 2, projectType: 0, title: "Brew Buddy", description: "Get live updates on the status of a home brew. Realtime carbonation rate and temperature.", gitHub: "git", mainImage: "someImage.jpeg"},
	{id: 3, projectType: 0, title: "Telemetry Experiments", description: "Wireless transmission of IMU and Magnetometer data to receiver using PIC32 and ATMega328p.", gitHub: "https://github.com/rvariverpirate/TelemetryExperiments", mainImage: "someImage.jpeg"},
	{id: 4, projectType: 0, title: "OLED Experiments", description: "Fun with 128x64 i2c OLED.", gitHub: "https://github.com/rvariverpirate/OLED-Experiments/blob/master/i2c_bitmaps/i2c_bitmap.c", mainImage: "someImage.jpeg"},
	{id: 5, projectType: 1, title: "Boxing Bluetooth", description: "Track number of punches in each round, form, and max impact.", gitHub: "git", mainImage: "someImage.jpeg"},
	{id: 6, projectType: 1, title: "Activity Tracker", description: "Film exercise while simultaneously monitoring heart rate to get a direct comparison.", gitHub: "git", mainImage: "someImage.jpeg"},
	{id: 7, projectType: 2, title: "Brew Tracker", description: "Graphical display and numerical analysis of data received from the Brew Buddy.", gitHub: "git", mainImage: "someImage.jpeg"},
	{id: 8, projectType: 2, title: "Guitar Tuner", description: "A basic guitar tuner that can run in Python", gitHub: "https://github.com/rvariverpirate/GuitarTuner", mainImage: "someImage.jpeg"}
];

@Injectable()
export class ProjectsService {
	constructor() { }
	allProjectData(): Project[]{
		return PROJECT;
	}
	get(id: number) : Project {
		return PROJECT.find(p => p.id === id);
	}
	getProjectsOfType(type: ProjectType): Project[]{
		console.log(type)
		return PROJECT.filter(p => p.projectType === type);
	}

}
