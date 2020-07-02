import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassExpressionsComponent } from './class-expressions.component';

describe('ClassExpressionsComponent', () => {
  let component: ClassExpressionsComponent;
  let fixture: ComponentFixture<ClassExpressionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassExpressionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassExpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
