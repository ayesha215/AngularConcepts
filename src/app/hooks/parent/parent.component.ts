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
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  title = 'app';
  usertext: string = '';
  @ViewChild(ChildComponentComponent) viewChild:
    | ChildComponentComponent
    | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    for (let name in changes) {
      let change = changes[name];
      let current_value = JSON.stringify(change.currentValue);
      let previous_value = JSON.stringify(change.previousValue);
    }
  }

  ngOnInit() {
    console.log('ngOnInit called from parent');
  }
  ngDoCheck() {
    console.log('ngDoCheck called from parent');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called from parent');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called from parent');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called from parent');
  }
  ngAfterViewChecked() {
    if (this.usertext === this.viewChild?.changedata) {
      console.log('After View Checked no Changes called from parent');
      console.log(this.viewChild.changedata);
    } else {
      this.doSomething();
    }
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called from parent');
  }
  doSomething() {
    console.log('do something method called from ngAfterView Checked');
  }
}
