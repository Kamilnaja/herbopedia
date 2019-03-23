import { Component, OnInit, Input } from '@angular/core';
import { Herb } from 'models/Herb';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() selectedHerb: Herb;

  constructor() { }

  ngOnInit() {
  }

}
