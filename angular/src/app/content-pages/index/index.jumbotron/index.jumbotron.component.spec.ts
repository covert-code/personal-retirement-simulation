import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexJumbotronComponent } from './index.jumbotron.component';

describe('IndexJumbotronComponent', () => {
  let component: IndexJumbotronComponent;
  let fixture: ComponentFixture<IndexJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
