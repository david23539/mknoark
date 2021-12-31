import { animate, style, transition, trigger } from '@angular/animations';

export const animationModal = trigger('loadModal', [
  transition(':enter', [
    style({
      top: '100vh',
    }),
    animate('250ms'),
  ]),
]);
