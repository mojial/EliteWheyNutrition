import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinaComponent } from './proteina.component';

describe('ProteinaComponent', () => {
  let component: ProteinaComponent;
  let fixture: ComponentFixture<ProteinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProteinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProteinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
