import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorialAddPage } from './tutorial-add.page';

describe('TutorialAddPage', () => {
  let component: TutorialAddPage;
  let fixture: ComponentFixture<TutorialAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TutorialAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
