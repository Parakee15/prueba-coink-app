import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Ikey {
  type: 'number' | 'back' | 'button' | 'space';
  value: number | string;
}

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  @Output() public pressNumberKey: EventEmitter<any> = new EventEmitter();
  @Output() public pressOkButton: EventEmitter<any> = new EventEmitter();
  @Output() public pressBackButton: EventEmitter<any> = new EventEmitter();
  @Input() public disabledOkButton = false;
  @Input() public offOkButton = false;

  public arrayKeys: Array<Array<Ikey>> = [];

  constructor() {
    for (let i = 0; i < 9; i += 3) {
      const temArrayKeys = [];
      for (let j = i + 1; j <= i + 3; j++) temArrayKeys.push({ type: 'number', value: j });
      this.arrayKeys.push(temArrayKeys);
    }
  }

  ngOnInit(): void {
    console.log('this.offOkButton :>> ', this.offOkButton);

    const backButton: Ikey = { type: 'back', value: 'assets/svg/backspace.svg' };
    const okButton: Ikey = { type: 'button', value: 'assets/svg/check.svg' };
    const space: Ikey = { type: 'space', value: '' };
    const cero: Ikey = { type: 'number', value: 0 };

    if (this.offOkButton) {
      this.arrayKeys.push([space, cero, backButton]);
    } else {
      this.arrayKeys.push([backButton, cero, okButton]);
    }

  }

}
