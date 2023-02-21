import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanressourceComponent } from './humanressource.component';

describe('HumanressourceComponent', () => {
  let component: HumanressourceComponent;
  let fixture: ComponentFixture<HumanressourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanressourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanressourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
