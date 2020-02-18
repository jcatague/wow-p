import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { SlidesComponent } from './slides/slides.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { BottomMsgComponent } from './bottom-msg/bottom-msg.component';

@NgModule({
  declarations: [
    SlidesComponent,
    StartButtonComponent,
    BottomMsgComponent
    
    
  ],
  exports: [
    SlidesComponent,
    StartButtonComponent,
    BottomMsgComponent
   
  ],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ComponentsModule {}
