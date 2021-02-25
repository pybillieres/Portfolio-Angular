import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { ProjectsListComponent } from './home/projects-list/projects-list.component';
import { EducationComponent } from './home/education/education.component';
import { SkillsComponent } from './home/skills/skills.component';
import { ProjectsListItemComponent } from './home/projects-list/projects-list-item/projects-list-item.component';
import { IntroComponent } from './home/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectsListComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsListItemComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
