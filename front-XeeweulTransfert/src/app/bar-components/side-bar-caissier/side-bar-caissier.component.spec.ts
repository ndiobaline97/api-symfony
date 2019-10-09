import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarCaissierComponent } from './side-bar-caissier.component';

describe('SideBarCaissierComponent', () => {
  let component: SideBarCaissierComponent;
  let fixture: ComponentFixture<SideBarCaissierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarCaissierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarCaissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
