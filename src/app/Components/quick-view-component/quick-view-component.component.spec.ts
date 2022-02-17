import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickViewComponentComponent } from './quick-view-component.component';

describe('QuickViewComponentComponent', () => {
  let component: QuickViewComponentComponent;
  let fixture: ComponentFixture<QuickViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickViewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
