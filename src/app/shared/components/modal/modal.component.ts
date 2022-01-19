import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() public showButtonClose = true;
  @Input() public title: string;
  @Input() public msg: string;
  @Input() public nameButton: string;
  @Input() public innerHtml: string;

  constructor(private _modalController: ModalController) { }

  ngOnInit(): void { }

  public dismiss(data = null): void {
    this._modalController.dismiss(data);
  }

}
