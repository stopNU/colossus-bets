import {Component} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';

@Component({selector: 'fountain-techs', template: ''})
class MockTechsComponent {}
@Component({selector: 'fountain-footer', template: ''})
class MockFooterComponent {}
@Component({selector: 'fountain-header', template: ''})
class MockHeaderComponent {}
@Component({selector: 'fountain-title', template: ''})
class MockTitleComponent {}

describe('Main Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockTechsComponent,
        MockFooterComponent,
        MockHeaderComponent,
        MockTitleComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render the header, title, techs and footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const main = fixture.nativeElement;
    expect(main.querySelector('fountain-header')).toBeDefined();
    expect(main.querySelector('fountain-title')).toBeDefined();
    expect(main.querySelector('fountain-techs')).toBeDefined();
    expect(main.querySelector('fountain-footer')).toBeDefined();
  });
});
