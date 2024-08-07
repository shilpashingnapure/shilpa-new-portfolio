import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactsComponent } from './contacts/contacts.component';
import { IntroComponent } from './intro/intro.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTabsModule} from '@angular/material/tabs';
import { MiniProjectsComponent } from './projects/mini-projects/mini-projects.component';
import { HomeNameComponent } from './portfolio/home-name/home-name.component';
import { StarsFallingComponent } from './common-component/stars-falling/stars-falling.component';
import { SectionHeadingComponent } from './common-component/section-heading/section-heading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UfoPathComponent } from './common-component/Ufo/ufo-path.component';
import { UfoComponent } from './common-component/Ufo/ufo/ufo.component';
import { ProjectsComponent } from './projects/projects.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogContentComponent } from './common-component/dialog-content/dialog-content.component';


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
    SectionHeadingComponent ,
    UfoPathComponent,
    UfoComponent,
    DialogContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule ,
    MatTabsModule ,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
