import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';
import { JobListingComponent } from './search-jobs/job-listing/job-listing.component';

const routes: Routes = [
  { path: '', component: SearchJobsComponent },
  { path: 'listjob', component: JobListingComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
