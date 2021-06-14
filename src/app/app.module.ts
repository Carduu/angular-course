import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from "@angular/forms";
import { LessonsService } from "./shared/services/lessons.service";
import { CoursesService } from "./shared/services/courses.service";
import { LessonsListComponent } from './home/lessons-list/lessons-list.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    LessonsListComponent,
    UsersComponent,
  ],
  providers: [
      LessonsService,
      CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
