import { BrowserModule } from '@angular/platform-browser';
import { Type, ModuleWithProviders, NgModule } from '@angular/core';
import { EJ_REPORTVIEWER_COMPONENTS } from '@syncfusion/reporting-angular/src/ej/reportviewer.component';
import { EJ_REPORTDESIGNER_COMPONENTS } from '@syncfusion/reporting-angular/src/ej/reportdesigner.component';
import { Routes, RouterModule } from '@angular/router';
import { GettingStarted } from '../components/getting/getting.component';
import { Overview } from '../components/overview/overview.component';
const components: any[] | Type<any> | ModuleWithProviders<{}> = [
  EJ_REPORTVIEWER_COMPONENTS,
  EJ_REPORTDESIGNER_COMPONENTS,
  GettingStarted,
  Overview
];
const routes: Routes = [
  { path: '', redirectTo: 'getting', pathMatch: 'full' },
  { path: 'getting', component: GettingStarted },
  { path: 'overview', component: Overview },
  { path: '**', redirectTo: 'getting' }
];
@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
})

export class AppRouterModule { }
