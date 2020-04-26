import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEditedComponent } from './image-edited.component';

describe('ImageEditedComponent', () => {
  let component: ImageEditedComponent;
  let fixture: ComponentFixture<ImageEditedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageEditedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageEditedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
