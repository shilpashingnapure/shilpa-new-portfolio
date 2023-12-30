import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactsComponent } from './contacts/contacts.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTabsModule} from '@angular/material/tabs';
import { MiniProjectsComponent } from './projects/mini-projects/mini-projects.component';
import { HomeNameComponent } from './portfolio/home-name/home-name.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    WorkExperienceComponent,
    ContactsComponent,
    IntroComponent,
    ProjectsComponent,
    TechStackComponent,
    MiniProjectsComponent,
    HomeNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule ,
    MatTabsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
