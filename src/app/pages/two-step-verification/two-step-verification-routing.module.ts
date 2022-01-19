import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendCodeVerificationPage } from './send-code-verification/send-code-verification.page';
import { ValidateCodePage } from './validate-code/validate-code.page';

const routes: Routes = [
  {
    path: '',
    component: SendCodeVerificationPage
  },
  {
    path: 'validate-code',
    component: ValidateCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoStepVerificationPageRoutingModule { }
