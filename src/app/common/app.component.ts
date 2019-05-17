import { Component, HostListener } from '@angular/core';
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

  ngOnInit(): void {
    this.setReportsHeight();
  }
  public onSampleClick(sample): void {
    this.router.navigate([sample.routerPath]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.setReportsHeight();
  }

  private setReportsHeight(): void {
    let style: HTMLElement = document.getElementById('reports-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'reports-style';
      document.body.appendChild(style);
    }
    style.textContent = `ej-sample{
      display:block;
      overflow: hidden;
      height: ${window.innerHeight}px
    }`;
  }

}
