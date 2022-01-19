import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/providers/form.service';
import { SignupService } from '../../providers/signup.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.page.html',
  styleUrls: ['./basic-data.page.scss'],
})
export class BasicDataPage implements OnInit {

  /* Form */
  public formBasicData: FormGroup;
  /* List */
  public genderList: Array<any> = [];
  public documentTypeList: Array<any> = [];
  public showPassword = false;
  public showPasswordConfirmation = false;

  constructor(
    private _signup: SignupService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private spinner: NgxSpinnerService) {
    this._buidForm();
  }

  ngOnInit() {
    this._getDocumentTypes();
    this._getGenders();
  }

  private _buidForm(): void {
    this.formBasicData = this._formBuilder.group({
      documentType: [null, [Validators.required]],
      documentNumber: [null, [Validators.required]],
      documentIssueDate: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      emailconfirmation: [null],
      pin: [null, [Validators.required]],
      pinConfirmation: [null]
    });

    console.log('this.formBasicData :>> ', this.formBasicData);
    FormService.checkValidators(this.formBasicData, 'emailconfirmation',
      [Validators.required, Validators.email, FormService.equalValue('email', 'Correo electrónico')]);
    FormService.checkValidators(this.formBasicData, 'pinConfirmation',
      [Validators.required, FormService.equalValue('pin', 'PIN')]);
  }

  private _getDocumentTypes() {
    this.spinner.show();
    this._signup.getDocumentTypes().subscribe(
      (res: any) => {
        this.documentTypeList = res;
        this.spinner.hide();
        console.log('termino :>> ');
      },
      (err: any) => console.log('_getDocumentTypes err:>> ', err)
    );
  }

  private _getGenders() {
    this.spinner.show();
    this._signup.getGenders().subscribe((res: any) => {
      this.genderList = res;
      this.spinner.hide();
    },
      (err: any) => console.log('_getDocumentTypes err:>> ', err)
    );
  }

  public onSubmit(): void {
    console.log('this.formBasicData :>> ', this.formBasicData);
    if (!FormService.validateForm(this.formBasicData)) { return; }
    this._router.navigate(['/basic-data/data-summary', { basicData: JSON.stringify(this.formBasicData.value) }]);
  }

  public switchEyeIcon(field: string): void {
    if (field === 'pin') this.showPassword = !this.showPassword;
    if (field === 'pinConfirmation') this.showPasswordConfirmation = !this.showPasswordConfirmation;
  }

}
