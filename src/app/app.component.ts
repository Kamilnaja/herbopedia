import { Component, OnInit } from '@angular/core';
import { HerbsService } from './herbs.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  herbs = [];
  constructor(private _herbService: HerbsService){}
  ngOnInit() {
    this._herbService.getHerbs()
      .subscribe(resHerbsData => this.herbs = resHerbsData);
  }
}
