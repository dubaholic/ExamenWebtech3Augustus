import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAantalComponent } from './search-aantal.component';

describe('SearchAantalComponent', () => {
  let component: SearchAantalComponent;
  let fixture: ComponentFixture<SearchAantalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAantalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAantalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
