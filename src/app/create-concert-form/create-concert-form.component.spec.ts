import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConcertFormComponent } from './create-concert-form.component';

describe('CreateConcertFormComponent', () => {
  let component: CreateConcertFormComponent;
  let fixture: ComponentFixture<CreateConcertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConcertFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConcertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
