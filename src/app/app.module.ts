import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';

import { HttpClientModule } from '@angular/common/http';
import { JobSearchService } from './search-jobs/jobSearch.service';
import { JobListingComponent } from './search-jobs/job-listing/job-listing.component';
import { ShortenPipe } from './shorten.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchJobsComponent,
    JobListingComponent,
    ShortenPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JobSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
