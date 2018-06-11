import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLibComponent } from './inventory-lib.component';

describe('InventoryLibComponent', () => {
  let component: InventoryLibComponent;
  let fixture: ComponentFixture<InventoryLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
