import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscriptionCustomerPage } from './inscription-customer.page';

describe('InscriptionCustomerPage', () => {
  let component: InscriptionCustomerPage;
  let fixture: ComponentFixture<InscriptionCustomerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
