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
import { StarsFallingComponent } from './common-component/stars-falling/stars-falling.component';
import { SectionHeadingComponent } from './common-component/section-heading/section-heading.component';

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
    HomeNameComponent,
    StarsFallingComponent,
    SectionHeadingComponent
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
