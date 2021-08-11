import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveweconnectComponent } from './saveweconnect.component';

describe('SaveweconnectComponent', () => {
  let component: SaveweconnectComponent;
  let fixture: ComponentFixture<SaveweconnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveweconnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveweconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});