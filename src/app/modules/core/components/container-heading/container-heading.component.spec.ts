import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerHeadingComponent } from './container-heading.component';

describe('ContainerHeadingComponent', () => {
  let component: ContainerHeadingComponent;
  let fixture: ComponentFixture<ContainerHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
