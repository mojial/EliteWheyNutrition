import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AminoacidosComponent } from './aminoacidos.component';

describe('AminoacidosComponent', () => {
  let component: AminoacidosComponent;
  let fixture: ComponentFixture<AminoacidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AminoacidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AminoacidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
