import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';
import { AppComponent } from './app.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import{PieChartComponent} from '../app/piechart.component';


@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
