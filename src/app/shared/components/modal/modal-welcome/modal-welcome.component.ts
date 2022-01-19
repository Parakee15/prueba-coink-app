import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-welcome',
  templateUrl: './modal-welcome.component.html',
  styleUrls: ['./modal-welcome.component.scss']
})
export class ModalWelcomeComponent implements OnInit {

  constructor(private _modalController: ModalController, private _router: Router) { }

  ngOnInit(): void {
  }

  public dismiss(data = null): void {
    this._modalController.dismiss(data).then(() => this._router.navigate(['login']));
  }

}
