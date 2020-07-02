import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorExampleComponent } from './constructor-example.component';

describe('ConstructorExampleComponent', () => {
  let component: ConstructorExampleComponent;
  let fixture: ComponentFixture<ConstructorExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructorExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
