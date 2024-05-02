import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidratosComponent } from './hidratos.component';

describe('HidratosComponent', () => {
  let component: HidratosComponent;
  let fixture: ComponentFixture<HidratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HidratosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HidratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
