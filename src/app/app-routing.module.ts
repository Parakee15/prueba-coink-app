import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'two-step-verification',
    loadChildren: () => import('./pages/two-step-verification/two-step-verification.module').then(m => m.TwoStepVerificationPageModule)
  },
  {
    path: 'basic-data',
    loadChildren: () => import('./pages/basic-data/basic-data.module').then(m => m.BasicDataPageModule)
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./pages/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsPageModule)
  },
  {
    path: '',
    redirectTo: 'basic-data',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
