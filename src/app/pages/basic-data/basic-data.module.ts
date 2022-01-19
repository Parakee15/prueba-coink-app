import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicDataPageRoutingModule } from './basic-data-routing.module';

import { BasicDataPage } from './basic-data.page';
import { SharedModule } from '../../shared/shared.module';
import { DataSummaryPage } from './data-summary/data-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BasicDataPageRoutingModule,
    SharedModule
  ],
  declarations: [BasicDataPage, DataSummaryPage]
})
export class BasicDataPageModule { }
