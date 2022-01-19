import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../../providers/signup.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-send-code-verification',
  templateUrl: './send-code-verification.page.html',
  styleUrls: ['./send-code-verification.page.scss'],
})
export class SendCodeVerificationPage implements OnInit {


  public phoneNumber = '';
  public disabledOkButton = true;
  constructor(private _signup: SignupService,
    private _router: Router,
    private spinner: NgxSpinnerService) {
  }
  ngOnInit() { }

  private sendSmsVerificationNumber(phoneNumber: string) {
    const json = {
      phone_number: `57${phoneNumber}`,
      log_signup_id: ''
    };
    this.spinner.show();
    this._signup.sendSmsVerificationNumber(json).then((res: any) => {
      console.log('sendSmsVerificationNumber res :>> ', res);
      this._router.navigate(['/two-step-verification/validate-code', { phoneNumber }]);
    }, (err: any) => {
      console.log('sendSmsVerificationNumber err:>> ', console.log(err));
    }).finally(() => this.spinner.hide());
  }

  public onAddNumber(key: number): void {
    const newNumber = `${this.phoneNumber}${key}`;
    if (newNumber.length > 10) { this.disabledOkButton = false; return; }

    this.phoneNumber = newNumber;
    if (newNumber.length === 10) { this.disabledOkButton = false; }

  }

  public onOkButton(): void {
    this.sendSmsVerificationNumber(this.phoneNumber);

  }
  public onBackButton(): void {
    this.phoneNumber = `${this.phoneNumber.slice(0, this.phoneNumber.length - 1)}`;
    if (this.phoneNumber.length < 10) {
      this.disabledOkButton = true;
    }
  }


}
