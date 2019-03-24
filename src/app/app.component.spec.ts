import { async, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { AppComponent } from './app.component';
import { HerbsService } from './herbs.service';
import { RouterTestingModule } from '@angular/router/testing';

class MockService {
  mockRespone = {
    data: [
      { id: 1, name: 'hello' },
      { id: 2, name: 'world' }
    ]
  }

  getHerbs(): Observable<any> {
    return of(this.mockRespone.data);
  }
}

describe('AppComponent', () => {
  let herbsService: HerbsService;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule],
      providers: [{ provide: HerbsService, useClass: MockService }]
    });
    component = TestBed.createComponent(AppComponent).componentInstance;
    herbsService = TestBed.get(HerbsService)
  }));

  it('should create the app', async(() => {
    expect(component).toBeDefined();
  }));

  it('should return array of herbs', () => {
    component.ngOnInit();
    expect(component.herbs).toBeDefined();
    expect(component.herbs.length).toEqual(2);
  });
});
