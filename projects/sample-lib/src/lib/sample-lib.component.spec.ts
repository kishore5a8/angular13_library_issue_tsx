import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleLibComponent } from './sample-lib.component';

describe('SampleLibComponent', () => {
  let component: SampleLibComponent;
  let fixture: ComponentFixture<SampleLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
