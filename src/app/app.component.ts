import { Component, OnInit, RouterModule, Routes  } from '@angular/core';
import { HerbsService } from './herbs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  herbs = [];
  selectedHerb;

  constructor(private _herbService: HerbsService){}
  ngOnInit() {
    this._herbService.getHerbs()
      .subscribe(resHerbsData => this.herbs = resHerbsData);
  }

  onSelect(herb) {
    this.selectedHerb = herb;
  }
}
