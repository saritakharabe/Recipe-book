import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShppingListEditComponent } from './shpping-list-edit.component';

describe('ShppingListEditComponent', () => {
  let component: ShppingListEditComponent;
  let fixture: ComponentFixture<ShppingListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShppingListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShppingListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
