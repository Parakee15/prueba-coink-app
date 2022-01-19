import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-data-summary',
  templateUrl: './data-summary.page.html',
  styleUrls: ['./data-summary.page.scss'],
})
export class DataSummaryPage implements OnInit {
  public basicData: any;

  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute,
    public _location: Location) {
    this.basicData = JSON.parse(this._activatedRoute.snapshot.paramMap.get('basicData'));

    console.log('basicData :>> ', this.basicData);
  }

  ngOnInit() {
  }

  public onSubmit(): void {
    this._router.navigate(['/terms-and-conditions', { basicData: JSON.stringify(this.basicData) }]);
  }
}
