import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data:any[]=[]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.getData()
  }

  // getData(){
  //   this.http.get<any>('http://localhost:3000/data').subscribe( res => {
  //     this.data = res;
  //     console.log(this.data);
      
  //   })
  // }

}
