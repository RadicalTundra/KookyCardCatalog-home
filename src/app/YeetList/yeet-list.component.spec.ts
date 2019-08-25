import { TestBed, async } from '@angular/core/testing';
import { YeetListComponent } from './yeet-list.component';

describe('YeetListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        YeetListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(YeetListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'untitled'`, () => {
    const fixture = TestBed.createComponent(YeetListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('untitled');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(YeetListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to untitled!');
  });
});
