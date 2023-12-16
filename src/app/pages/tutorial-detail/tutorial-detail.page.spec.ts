import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorialDetailPage } from './tutorial-detail.page';

describe('TutorialDetailPage', () => {
  let component: TutorialDetailPage;
  let fixture: ComponentFixture<TutorialDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TutorialDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
