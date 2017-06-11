import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { KeywordComponent } from './keyword/keyword.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'keyword',
    component: KeywordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
