import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFromMapComponent } from './demo-from-map.component';

describe('DemoFromMapComponent', () => {
  let component: DemoFromMapComponent;
  let fixture: ComponentFixture<DemoFromMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFromMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFromMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
