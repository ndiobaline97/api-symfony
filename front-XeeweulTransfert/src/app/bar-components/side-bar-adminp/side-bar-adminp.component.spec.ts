import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarAdminpComponent } from './side-bar-adminp.component';

describe('SideBarAdminpComponent', () => {
  let component: SideBarAdminpComponent;
  let fixture: ComponentFixture<SideBarAdminpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarAdminpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarAdminpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
