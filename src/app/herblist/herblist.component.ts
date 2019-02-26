import { Component, OnInit } from '@angular/core';
import { HerbsService } from '.././herbs.service';
import { Herb } from 'models/Herb';

@Component({
  selector: 'app-herblist',
  templateUrl: './herblist.component.html',
})
export class HerblistComponent implements OnInit {
  herbs: Herb[] = [];
  selectedHerb: Herb;
  isList = true;
  isClassVisible = false;

  constructor(private _herbService: HerbsService) { }

  ngOnInit() {
    this._herbService.getHerbs()
      .subscribe(res => this.herbs = res);
  }

  onSelect(herb) {
    this.selectedHerb = herb;
  }

  toggleCSS() {
    console.log(this.isList);
  }

}
