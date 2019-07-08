import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WelcomeComponent} from './welcome.component';
import {By} from '@angular/platform-browser';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have welcome message', () => {
    // Hoe much value does a test like this add?
    // What is the maintenance overhead?

    const title = fixture.debugElement.query(By.css('h2'));
    const message = fixture.nativeElement.querySelector('p');

    expect(title.nativeElement.textContent)
      .toEqual('Welcome to the flights app');
    expect(message.textContent)
      .toEqual(' This is probably the best flights related training app' +
        ' delivered at an Instil training course.\n' +
        '');
  });
});
