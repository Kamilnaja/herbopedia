import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let hidden: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
      providers: [{
        provide: ComponentFixtureAutoDetect, useValue: true
      }]
    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance; // BannerComponent test instance
    hidden = fixture.nativeElement.querySelector('#hidden')
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should component not shows hidden value on start', () => {
    expect(hidden).toBeFalsy();
    expect(component.isVisible).toBeFalsy();

    component.toggleInfo();
    fixture.detectChanges();
    // expect(hidden).toBeTruthy();
    expect(component.isVisible).toBeTruthy();

  });


});
