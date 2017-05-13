import { Component, OnInit } from '@angular/core';
import { HerbsService } from '.././herbs.service';

@Component({
  selector: 'app-herblist',
  templateUrl: './herblist.component.html',
})
export class HerblistComponent implements OnInit {

  herbs:any = [];
  selectedHerb;
  isList = true;
  constructor(private _herbService: HerbsService){}

  isClassVisible: false;

  ngOnInit() {
    this._herbService.getHerbs()
      .subscribe(resHerbsData => this.herbs = resHerbsData);
  }

  onSelect(herb) {
    this.selectedHerb = herb;
  }

  toggleCSS () {
    console.log(this.isList);
  }

}
