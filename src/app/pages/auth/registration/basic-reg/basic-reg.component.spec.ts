import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicRegComponent } from './basic-reg.component';

describe('BasicRegComponent', () => {
  let component: BasicRegComponent;
  let fixture: ComponentFixture<BasicRegComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
