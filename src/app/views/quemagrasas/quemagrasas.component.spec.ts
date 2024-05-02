import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemagrasasComponent } from './quemagrasas.component';

describe('QuemagrasasComponent', () => {
  let component: QuemagrasasComponent;
  let fixture: ComponentFixture<QuemagrasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuemagrasasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuemagrasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
