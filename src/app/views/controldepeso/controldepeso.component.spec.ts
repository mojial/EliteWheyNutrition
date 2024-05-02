import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControldepesoComponent } from './controldepeso.component';

describe('ControldepesoComponent', () => {
  let component: ControldepesoComponent;
  let fixture: ComponentFixture<ControldepesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControldepesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControldepesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
