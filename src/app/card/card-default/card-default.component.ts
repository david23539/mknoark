import {Component, Input} from '@angular/core';

@Component({
  selector: 'nk-card-default',
  templateUrl: './card-default.component.html',
  styleUrls: ['./card-default.component.scss'],
})
export class CardDefaultComponent {
  @Input() footer: boolean;
  @Input() spaceBottom: number;
  @Input() scroll: boolean;
  @Input() height: number;
  constructor() {}
}
