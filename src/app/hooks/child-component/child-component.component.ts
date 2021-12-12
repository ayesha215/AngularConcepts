import {
  Component,
  DoCheck,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit, DoCheck {
  changeDetected: boolean | undefined;
  @Input() changedata: string | undefined;
  current_value: string | undefined;
  previous_value: string | undefined;
  ngOnInit(): void {
    console.log('ngOnit called from child');
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let name in changes) {
      let change = changes[name];
      let current_value = JSON.stringify(change.currentValue);
      let previous_value = JSON.stringify(change.previousValue);
      console.log('ngOnChange is called');
      console.log('Current value is:' + current_value);
      console.log('Previous value is:' + previous_value);
    }
  }

  ngDoCheck() {
    if (this.current_value != this.changedata) {
      this.changeDetected = true;
      console.log('DoCheck: Child value changed to', this.changedata);
    }
  }
}
