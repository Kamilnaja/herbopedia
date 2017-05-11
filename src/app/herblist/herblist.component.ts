import { Component, OnInit } from '@angular/core';
import { HerbsService } from '.././herbs.service';

@Component({
  selector: 'app-herblist',
  templateUrl: './herblist.component.html',
  styleUrls: ['./herblist.component.css']
})
export class HerblistComponent implements OnInit {

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
