import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HerbsService } from './herbs.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule, HttpModule],
      providers: [HerbsService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
