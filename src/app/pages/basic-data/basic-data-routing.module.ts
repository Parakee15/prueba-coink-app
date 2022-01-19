import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicDataPage } from './basic-data.page';
import { DataSummaryPage } from './data-summary/data-summary.page';

const routes: Routes = [
  {
    path: '',
    component: BasicDataPage
  },
  {
    path: 'data-summary',
    component: DataSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicDataPageRoutingModule { }
