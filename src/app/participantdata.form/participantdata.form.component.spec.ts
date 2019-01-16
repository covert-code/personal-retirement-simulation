import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantdataFormComponent } from './participantdata.form.component';

describe('ParticipantdataFormComponent', () => {
  let component: ParticipantdataFormComponent;
  let fixture: ComponentFixture<ParticipantdataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantdataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantdataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
