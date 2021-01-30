import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterStaffComponent } from './components/register-staff/register-staff.component';
import { CreateNewComponent } from './components/create-new/create-new.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { CreateBatchComponent } from './components/create-batch/create-batch.component';
import { ChangeBannerComponent } from './components/change-banner/change-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    DashboardComponent,
    RegisterStaffComponent,
    CreateNewComponent,
    CreateCourseComponent,
    CreateBatchComponent,
    ChangeBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
