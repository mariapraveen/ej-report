import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './getting.component.html',
  styleUrls: ['./getting.component.css']
})
export class GettingStarted {
  title = 'reportviewerapp';
  public serviceUrl: string;  
  public reportPath: string;

    constructor() {
        this.serviceUrl = '{{site.reportserviceurl}}api/ReportViewer';
        this.reportPath = '~/Resources/docs/sales-order-detail.rdl';
    }
}
