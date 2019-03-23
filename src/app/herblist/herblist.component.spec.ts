import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerblistComponent } from './herblist.component';
import { FormsModule } from '@angular/forms';
import { HerbsService } from 'app/herbs.service';
import { HttpModule } from '@angular/http';
import { InfoBoxComponent } from 'app/info-box/info-box.component';
import { ModalComponent } from 'app/modal/modal.component';

describe('HerblistComponent', () => {
  let component: HerblistComponent;
  let fixture: ComponentFixture<HerblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerblistComponent, InfoBoxComponent, ModalComponent ],
      imports: [FormsModule, HttpModule],

      providers: [HerbsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
