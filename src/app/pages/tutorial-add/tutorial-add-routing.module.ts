import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialAddPage } from './tutorial-add.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialAddPageRoutingModule {}
