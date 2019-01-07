import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualSignUpComponent } from './user/components/manual-sign-up/manual-sign-up.component';
import { SignInComponent } from './user/components/sign-in/sign-in.component';
import { SignUpComponent } from './user/components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'manual-sign-up',
    component: ManualSignUpComponent
  },
  { path: '**', redirectTo: 'sign-in' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
