import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasVisiblesComponent } from './paginas-visibles.component';

describe('PaginasVisiblesComponent', () => {
  let component: PaginasVisiblesComponent;
  let fixture: ComponentFixture<PaginasVisiblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginasVisiblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginasVisiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
