import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { IonicModule } from '@ionic/angular';
import { FormControlErrorComponent } from './components/form-control-error/form-control-error.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalWelcomeComponent } from './components/modal/modal-welcome/modal-welcome.component';



@NgModule({
  declarations: [KeyboardComponent, FormControlErrorComponent, ModalComponent, ModalWelcomeComponent],
  imports: [CommonModule, IonicModule],
  exports: [KeyboardComponent, FormControlErrorComponent]
})
export class SharedModule { }
