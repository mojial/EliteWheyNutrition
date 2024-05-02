import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatineComponent } from './creatine.component';

describe('CreatineComponent', () => {
  let component: CreatineComponent;
  let fixture: ComponentFixture<CreatineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
