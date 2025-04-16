import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginWorkerPage } from './login-worker.page';

describe('LoginWorkerPage', () => {
  let component: LoginWorkerPage;
  let fixture: ComponentFixture<LoginWorkerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWorkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
