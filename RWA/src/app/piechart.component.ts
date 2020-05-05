import { Component ,OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-pie',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PieChartComponent implements OnInit {
  
//   title = 'piechart';
 
//   data = [{
//           name: 'Product Sold',
//           data: [1, 2, 10, 12, 34, 80],
     
//        },{
//           name: 'Total Views',
//           data: [2, 43, 12, 5, 45, 3]
//        }];
 
//   highcharts = Highcharts;
//   chartOptions = {   
//     chart: {
//        type: "piechart"
//     },
  
//     credits: {
//       enabled: false
//  },
//     xAxis:{
//        categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
       
//     },
    
//     yAxis: {    
         
//        tickpositions:["5k","10k","15k","20k","25k"],
       
     
//     },
  

      
      
  
//     series: this.data
//   };

  
  

  constructor( ){
   
  
}


  
  ngOnInit(): void {
//     Highcharts.chart('container', {
//         chart: {
//             plotBackgroundColor: null,
//             plotBorderWidth: null,
//             plotShadow: false,
//             type: 'pie'
//         },
//         title: {
//             text: 'Browser market shares in January, 2018'
//         },
//         tooltip: {
//             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//         },
//         accessibility: {
//             point: {
//                 valueSuffix: '%'
//             }
//         },
//         plotOptions: {
//             pie: {
//                 allowPointSelect: true,
//                 cursor: 'pointer',
//                 dataLabels: {
//                     enabled: true,
//                     format: '<b>{point.name}</b>: {point.percentage:.1f} %'
//                 }
//             }
//         },
//         series: [{
//             name: 'Brands',
//             colorByPoint: true,
//             data: [{
//                 name: 'Chrome',
//                 y: 61.41,
//                 sliced: true,
//                 selected: true
//             }, {
//                 name: 'Internet Explorer',
//                 y: 11.84
//             }, {
//                 name: 'Firefox',
//                 y: 10.85
//             }, {
//                 name: 'Edge',
//                 y: 4.67
//             }, {
//                 name: 'Safari',
//                 y: 4.18
//             }, {
//                 name: 'Sogou Explorer',
//                 y: 1.64
//             }, {
//                 name: 'Opera',
//                 y: 1.6
//             }, {
//                 name: 'QQ',
//                 y: 1.2
//             }, {
//                 name: 'Other',
//                 y: 2.61
//             }]
//         }]
//     });
//   }

    // Create the chart
     new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'pie'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                innerSize:'80%'
            }
        },
        title: {
            text: '230,900 <br> Sales',
            align: 'center',
            verticalAlign: 'middle'
          },
        
        credits: {
            enabled: false
       },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
            }
        },
        series: [{
            name: 'Browsers',
            data: [["France",6],["France",4],["Italy",7],["Italy",8]],
            innerSize: '50%',
            showInLegend:true,
            dataLabels: {
                enabled: false
            }
        }]
    });

}
}
