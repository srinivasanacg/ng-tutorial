import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAnimalComponent } from './choose-animal.component';

describe('ChooseAnimalComponent', () => {
  let component: ChooseAnimalComponent;
  let fixture: ComponentFixture<ChooseAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
