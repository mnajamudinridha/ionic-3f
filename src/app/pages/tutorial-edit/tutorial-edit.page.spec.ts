import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorialEditPage } from './tutorial-edit.page';

describe('TutorialEditPage', () => {
  let component: TutorialEditPage;
  let fixture: ComponentFixture<TutorialEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TutorialEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
