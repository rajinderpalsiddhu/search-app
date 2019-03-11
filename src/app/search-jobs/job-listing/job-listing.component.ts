import { Component, OnInit } from '@angular/core';
import { JobSearchService } from '../jobSearch.service';
import { JobFeed } from '../jobsFeed.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.less']
})
export class JobListingComponent implements OnInit {
  JobsFeed_data:any;
  searchExp:any;
  searchLoc:any;
  searchedarray:any=[];
  notmatchedarray:any=[];
  searchquary:boolean=false;
  skill_json: string;
  KeywordSearcharray: any=[];
 
  constructor(private jobSearchService:JobSearchService,
              private httpClient: HttpClient) { }

  ngOnInit() {
    
    this.httpClient.get(' https://api.myjson.com/bins/kez8a').subscribe((res)=>{
      this.JobsFeed_data=res;
      this.searchedarray=this.JobsFeed_data.jobsfeed;
      
     
  });

    this.jobSearchService.searchActivated.subscribe(
      
      (SearchData:JobFeed)=>{
        this.searchedarray=[];
        this.searchquary=true;
        if(SearchData.experience === '0' || SearchData.experience === '1'){
          this.searchExp='Fresher';
        }else if (SearchData.experience === '2') {
          this.searchExp='0 to 2 Yrs';
        }else if (SearchData.experience === '5' || SearchData.experience === '4') {
          this.searchExp='8-13 yrs';
        } else {
          this.searchExp='';
        }
       
        this.searchLoc=SearchData.location;
        console.log( this.searchLoc);
        this.JobsFeed_data.jobsfeed.forEach(element => {
          console.log(element.location);
          console.log(element.experience);
          if(this.searchExp === element.experience){
            if(this.searchLoc === element.location){
              this.searchedarray.push(element)
            }else if (this.searchExp !== '') {
              this.searchedarray.push(element)
            }else{
              this.notmatchedarray.push(element);
            }
          }else if (this.searchLoc === element.location) {
            if(this.searchLoc !== ''){
              this.searchedarray.push(element)
            }
          } else {
            this.notmatchedarray.push(element);
          }
          
          console.log("main array",this.searchedarray);
          
        });
      }
    )
  }
  searchUsingKeyword(value){
    
   
    this.searchedarray=[];
    
    this.JobsFeed_data.jobsfeed.forEach(element => {
       this.skill_json= JSON.stringify(element.skills);
        if (this.skill_json.indexOf(value) >= 0) {
        
          this.searchedarray.push(element);
      } 
    })
  }
  SortByLoc() {
    
    this.searchedarray=this.searchedarray.sort(this.GetSortOrder("location"));
    
  }

  SortByExp(){
    this.searchedarray=this.searchedarray.sort(this.GetSortOrder("experience"));
  }

  //use to sort array on passing property in argument.
   GetSortOrder(prop) {  
    return function(a, b) {  
        if (a[prop] > b[prop]) {  
            return 1;  
        } else if (a[prop] < b[prop]) {  
            return -1;  
        }  
        return 0;  
    }  
}  
}
