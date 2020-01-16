import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationInputComponent } from './modification-input.component';

describe('ModificationInputComponent', () => {
  let component: ModificationInputComponent;
  let fixture: ComponentFixture<ModificationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
