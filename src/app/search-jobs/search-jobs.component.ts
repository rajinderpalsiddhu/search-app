import { Component, OnInit, Injectable } from '@angular/core';
import { JobSearchService } from './jobSearch.service';
import { JobFeed } from './jobsFeed.model';
import { Router } from '@angular/router';

@Injectable()

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.less']
})
export class SearchJobsComponent implements OnInit {
  JobsFeed_data:JobFeed;
  constructor( private route:Router,
               private jobservice:JobSearchService) { }

  ngOnInit() {
   
  }

  Search(exp,loc){
    debugger
    console.log(exp,loc);
    this.JobsFeed_data= new JobFeed(exp,loc);
    this.jobservice.searchActivated.next(this.JobsFeed_data);
    // this.route.navigate(['listjob'])
  }

}
