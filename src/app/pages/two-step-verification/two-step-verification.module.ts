import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwoStepVerificationPageRoutingModule } from './two-step-verification-routing.module';

import { SharedModule } from '../../shared/shared.module';
import { SendCodeVerificationPage } from './send-code-verification/send-code-verification.page';
import { ValidateCodePage } from './validate-code/validate-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TwoStepVerificationPageRoutingModule
  ],
  declarations: [SendCodeVerificationPage, ValidateCodePage]
})
export class TwoStepVerificationPageModule { }
