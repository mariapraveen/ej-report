import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as data from './samples.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  samples = data.samples;

  constructor(private router: Router) { }

  public onSampleClick(sample): void {
    this.router.navigate([sample.routerPath]);
  }
}
