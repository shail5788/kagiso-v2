import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetOurTeamComponent } from './meet-our-team.component';

describe('MeetOurTeamComponent', () => {
  let component: MeetOurTeamComponent;
  let fixture: ComponentFixture<MeetOurTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetOurTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
