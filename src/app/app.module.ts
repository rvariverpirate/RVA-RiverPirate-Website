import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ElectronicsOverViewComponent } from './electronics-over-view/electronics-over-view.component';
import { PythonOverViewComponent } from './python-over-view/python-over-view.component';
import { MobileAppsOverviewComponent } from './mobile-apps-overview/mobile-apps-overview.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { ProjectsService } from './projects.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';

/* Import prism core */
import 'prismjs/prism';
 
/* Import the language you need to highlight */
import 'prismjs/components/prism-c';
 
import { PrismComponent } from 'angular-prism';
import { TestComponent } from './projectsHtml/test/test.component';
import { BbcRssFeedComponent } from './bbc-rss-feed/bbc-rss-feed.component';
import { BrewBuddyComponent } from './brew-buddy/brew-buddy.component';
import { TmExperimentsComponent } from './tm-experiments/tm-experiments.component';
import { OledExperimentsComponent } from './oled-experiments/oled-experiments.component';
import { BoxingBluetoothComponent } from './boxing-bluetooth/boxing-bluetooth.component';
import { ActivityComponent } from './activity/activity.component';
import { BrewTrackerComponent } from './brew-tracker/brew-tracker.component';
import { ActivityTrackerComponent } from './activity-tracker/activity-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    ProjectsComponent,
    ElectronicsOverViewComponent,
    PythonOverViewComponent,
    MobileAppsOverviewComponent,
    MainPageComponent,
    ProjectDetailsComponent,
    PrismComponent,
    TestComponent,
    BbcRssFeedComponent,
    BrewBuddyComponent,
    TmExperimentsComponent,
    OledExperimentsComponent,
    BoxingBluetoothComponent,
    ActivityComponent,
    BrewTrackerComponent,
    ActivityTrackerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'home',
        component: MainPageComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'projects/:type',
        component: ProjectsComponent
      },
      {
        path: 'projects/:type/:id',
        component: ProjectDetailsComponent
      }
    ])
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})


export class AppModule { }
