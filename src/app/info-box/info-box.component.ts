import { Component, OnInit, Input } from '@angular/core';
import { Herb } from 'models/Herb';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {
  @Input() herbs: Herb[];

  constructor() { }

  ngOnInit() {
  }

}
