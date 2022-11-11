import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadafperfilComponent } from './portadafperfil.component';

describe('PortadafperfilComponent', () => {
  let component: PortadafperfilComponent;
  let fixture: ComponentFixture<PortadafperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadafperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadafperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
