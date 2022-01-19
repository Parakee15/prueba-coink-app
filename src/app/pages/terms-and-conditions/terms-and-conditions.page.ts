import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalWelcomeComponent } from 'src/app/shared/components/modal/modal-welcome/modal-welcome.component';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.page.html',
  styleUrls: ['./terms-and-conditions.page.scss'],
})
export class TermsAndConditionsPage implements OnInit {

  public checkTems: boolean;

  constructor(public modalController: ModalController) { }


  ngOnInit(): void { }

  public onSubmit(): void {
    this.modalController.create({
      component: ModalWelcomeComponent,
      cssClass: 'alert-modal',
    }).then(modal => modal.present());

  }
}
