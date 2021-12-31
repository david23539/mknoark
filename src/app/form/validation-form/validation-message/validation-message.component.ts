import { Component, Input } from '@angular/core';

@Component({
  selector: 'nk-validation-message',
  template: `
    <div class="validation">
      <div *ngFor="let message of messages">{{ message }}</div>
    </div>
  `,
  styles: [
    `
      .validation {
        color: #d32f2f;
        margin: 12px;
        font-size: 0.8rem;
        pointer-events: none;
      }
    `,
  ],
})
export class ValidationMessageComponent {
  @Input() messages: Array<string>;
  constructor() {}
}
