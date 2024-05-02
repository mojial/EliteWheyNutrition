import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarritasComponent } from './barritas.component';

describe('BarritasComponent', () => {
  let component: BarritasComponent;
  let fixture: ComponentFixture<BarritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarritasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
