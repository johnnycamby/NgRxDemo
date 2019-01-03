import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingShellComponent } from './shopping-shell.component';

describe('ShoppingShellComponent', () => {
  let component: ShoppingShellComponent;
  let fixture: ComponentFixture<ShoppingShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
