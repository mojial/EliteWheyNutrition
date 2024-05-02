import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaminasmineralesComponent } from './vitaminasminerales.component';

describe('VitaminasmineralesComponent', () => {
  let component: VitaminasmineralesComponent;
  let fixture: ComponentFixture<VitaminasmineralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitaminasmineralesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VitaminasmineralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
