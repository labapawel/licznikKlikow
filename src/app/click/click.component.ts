import { Component, OnInit } from '@angular/core';
import { ClickServiceService } from '../click-service.service';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.less']
})
export class ClickComponent implements OnInit {

  constructor(private _clickService:ClickServiceService) { }

  ngOnInit() {

  }

  clickBtn()
  {
    this._clickService.addClick();
  }

}
