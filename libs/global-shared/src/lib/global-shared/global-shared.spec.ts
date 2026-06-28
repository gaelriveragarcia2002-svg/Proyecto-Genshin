import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalShared } from './global-shared';

describe('GlobalShared', () => {
  let component: GlobalShared;
  let fixture: ComponentFixture<GlobalShared>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalShared],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalShared);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
