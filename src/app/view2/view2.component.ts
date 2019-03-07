import { Component, OnInit } from '@angular/core';
import { ClickServiceService } from '../click-service.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.less']
})
export class View2Component implements OnInit {

  _count = 0;
  constructor(private _clickService:ClickServiceService) { }

  ngOnInit() {
    this._clickService.getCounter().subscribe((counter) => {
      this._count = counter;
    });

  }

}
