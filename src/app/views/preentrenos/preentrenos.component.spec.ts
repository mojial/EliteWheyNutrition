import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreentrenosComponent } from './preentrenos.component';

describe('PreentrenosComponent', () => {
  let component: PreentrenosComponent;
  let fixture: ComponentFixture<PreentrenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreentrenosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreentrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
