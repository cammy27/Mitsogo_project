import { Component ,OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'myHighchart';
 
  data = [{
          name: 'Product Sold',
          data: [1, 2, 10, 12, 34, 80],
     
       },{
          name: 'Total Views',
          data: [2, 43, 12, 5, 45, 3]
       }];
 
  highcharts = Highcharts;
  chartOptions = {   
    chart: {
       type: "spline"
    },
    title: {text:''},
  
    credits: {
      enabled: false
 },
    xAxis:{
       categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
       
    },
    
    yAxis: {    
         
       tickpositions:["5k","10k","15k","20k","25k"],
       
     
    },
  

      
      
  
    series: this.data
  };

  
  

  constructor( ){
  
}


  
  ngOnInit(): void {
    
  }
 
}
