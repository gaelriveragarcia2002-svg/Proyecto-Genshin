import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalFeatures } from './global-features';

describe('GlobalFeatures', () => {
  let component: GlobalFeatures;
  let fixture: ComponentFixture<GlobalFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalFeatures],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalFeatures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
