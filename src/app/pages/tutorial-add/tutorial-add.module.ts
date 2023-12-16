import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialAddPageRoutingModule } from './tutorial-add-routing.module';

import { TutorialAddPage } from './tutorial-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialAddPageRoutingModule
  ],
  declarations: [TutorialAddPage]
})
export class TutorialAddPageModule {}
