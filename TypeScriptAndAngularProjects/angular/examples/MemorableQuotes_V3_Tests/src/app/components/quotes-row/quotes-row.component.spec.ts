import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import {QuotesRowComponent} from './quotes-row.component';

describe('QuotesRowComponent', () => {
  let fixture: ComponentFixture<QuotesRowComponent>;
  let component: QuotesRowComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuotesRowComponent],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(QuotesRowComponent);
      component = fixture.componentInstance;
    });
  }));

  it('Should contain two cells', () => {
    const rows = fixture.debugElement.children;
    const element1 = rows[0].nativeElement;
    const element2 = rows[1].nativeElement;

    expect(rows.length).toEqual(2);
    expect(element1.tagName).toEqual('TD');
    expect(element2.tagName).toEqual('TD');

    fixture.detectChanges();
    expect(element1.innerHTML).toEqual('default source text');
    expect(element2.innerHTML).toEqual('default quote text');
  });

  it('Should contain default values', () => {
    const rows = fixture.debugElement.children;
    const element1 = rows[0].nativeElement;
    const element2 = rows[1].nativeElement;

    fixture.detectChanges();
    expect(element1.innerHTML).toEqual('default source text');
    expect(element2.innerHTML).toEqual('default quote text');
  });

  it('Supports changing values', () => {
    const rows = fixture.debugElement.children;
    const element1 = rows[0].nativeElement;
    const element2 = rows[1].nativeElement;

    component.source = 'Picard';
    component.text = 'Make it so!';

    fixture.detectChanges();
    expect(element1.innerHTML).toEqual('Picard');
    expect(element2.innerHTML).toEqual('Make it so!');
  });
});
