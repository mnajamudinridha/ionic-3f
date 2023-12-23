import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialAddPageRoutingModule } from './tutorial-add-routing.module';

import { TutorialAddPage } from './tutorial-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TutorialAddPageRoutingModule
  ],
  declarations: [TutorialAddPage]
})
export class TutorialAddPageModule {}
