import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventShowComponent } from './event-show.component';

describe('EventShowComponent', () => {
  let component: EventShowComponent;
  let fixture: ComponentFixture<EventShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventShowComponent]
    });
    fixture = TestBed.createComponent(EventShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
