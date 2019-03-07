import { ClickServiceService } from './../click-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.less']
})
export class View1Component implements OnInit {

  _count: number;
  constructor(private _clickService:ClickServiceService ) { }

  ngOnInit() {
    this._clickService.getCounter().subscribe((counter) => {
      this._count = counter;
    });
}

}
