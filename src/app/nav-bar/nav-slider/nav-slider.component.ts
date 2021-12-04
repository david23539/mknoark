import {Component, Input} from '@angular/core';
import {NavSliderInterface} from '../interfaces/nav-slider-interface';

@Component({
  selector: 'nk-nav-slider',
  templateUrl: './nav-slider.component.html',
  styleUrls: ['./nav-slider.component.scss'],
})
export class NavSliderComponent {
  @Input() data: NavSliderInterface;
  constructor() {}
}
