import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscussionPage } from './discussion.page';

describe('DiscussionPage', () => {
  let component: DiscussionPage;
  let fixture: ComponentFixture<DiscussionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
