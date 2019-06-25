import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFromUrlComponent } from './demo-from-url.component';

describe('DemoFromUrlComponent', () => {
  let component: DemoFromUrlComponent;
  let fixture: ComponentFixture<DemoFromUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFromUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFromUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
