import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPersonalDetailsComponent } from './reg-personal-details.component';

describe('RegPersonalDetailsComponent', () => {
  let component: RegPersonalDetailsComponent;
  let fixture: ComponentFixture<RegPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegPersonalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
