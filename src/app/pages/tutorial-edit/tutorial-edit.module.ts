import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialEditPageRoutingModule } from './tutorial-edit-routing.module';

import { TutorialEditPage } from './tutorial-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TutorialEditPageRoutingModule
  ],
  declarations: [TutorialEditPage]
})
export class TutorialEditPageModule {}
