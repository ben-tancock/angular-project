import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptExpressionsComponent } from './typescript-expressions.component';

describe('TypescriptExpressionsComponent', () => {
  let component: TypescriptExpressionsComponent;
  let fixture: ComponentFixture<TypescriptExpressionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescriptExpressionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptExpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
