import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-validate-code',
  templateUrl: './validate-code.page.html',
  styleUrls: ['./validate-code.page.scss'],
})
export class ValidateCodePage implements OnInit {

  public phoneNumber: string;
  public validateCode = '';
  public maskCode = ' ';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private spinner: NgxSpinnerService,
    private _modalController: ModalController) {
    this.phoneNumber = this._activatedRoute.snapshot.paramMap.get('phoneNumber');
    console.log(' this.phoneNumber :>> ', this.phoneNumber);
  }

  ngOnInit() {
  }

  public onAddNumber(key: number): void {
    const newNumber = `${this.validateCode}${key}`;
    if (newNumber.length > 4) { return; }

    this.validateCode = newNumber;
    this.maskCode = 'X'.repeat(this.validateCode.length);

    if (this.validateCode.length === 4) {
      if (this.validateCode === '0000') {
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
        this._router.navigate(['/basic-data']);
      } else {
        this._modalController.create({
          component: ModalComponent,
          componentProps: {
            title: 'CÓDIGO INCORRECTO',
            msg: 'El código que ingresaste es incorrecto, enviaremos un nuevo código a tu correo electrónico.',
            nameButton: 'Reenviar código'
          },
          cssClass: 'alert-modal',
        }).then(modal => modal.present());
      }
    }
  }

  public onBackButton(): void {
    this.validateCode = `${this.validateCode.slice(0, this.validateCode.length - 1)}`;
    this.maskCode = `${this.maskCode.slice(0, this.maskCode.length - 1)}`;
    console.log('onBackButton :>> press');
  }



}
