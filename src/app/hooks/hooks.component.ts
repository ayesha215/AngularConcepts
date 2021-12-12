import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css'],
})
export class HooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  title = 'hooks';
  constructor() {
    alert('1. on changes called');
  }
  ngOnChanges(): void {}
  ngOnInit(): void {
    alert('2. on init is called');
  }
  ngDoCheck(): void {
    alert('3. do check is called');
  }
  ngAfterContentInit(): void {
    alert('4. after content init called');
  }
  ngAfterContentChecked(): void {
    alert('5. after content check called');
  }
  ngAfterViewInit(): void {
    alert('6. after view init called');
  }
  ngAfterViewChecked(): void {
    alert('7. after view init checked');
  }
  ngOnDestroy(): void {
    alert('8. on destroy called');
  }
}
