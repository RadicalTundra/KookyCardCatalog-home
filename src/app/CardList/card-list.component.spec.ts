import { TestBed, async } from '@angular/core/testing';
import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CardListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'untitled'`, () => {
    const fixture = TestBed.createComponent(CardListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('untitled');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CardListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to untitled!');
  });
});
