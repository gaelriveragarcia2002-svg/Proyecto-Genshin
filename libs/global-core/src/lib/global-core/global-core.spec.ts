import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalCore } from './global-core';

describe('GlobalCore', () => {
  let component: GlobalCore;
  let fixture: ComponentFixture<GlobalCore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalCore],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalCore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
