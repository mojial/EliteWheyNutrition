import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsFooterComponent } from './forms-footer.component';

describe('FormsFooterComponent', () => {
  let component: FormsFooterComponent;
  let fixture: ComponentFixture<FormsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
