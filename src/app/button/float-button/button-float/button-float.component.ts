import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'nk-button-float',
  templateUrl: './button-float.component.html',
  styleUrls: ['./button-float.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonFloatComponent implements OnInit, OnDestroy {
  @Input() icon: string;
  @Output() clickedEvent: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('button') buttonRef: ElementRef<any>;
  public clicked: boolean;
  public colorBg: string;
  private readonly _unsubcribe: Subject<any> = new Subject<any>();

  constructor(private readonly _cdr: ChangeDetectorRef) {
    this.clicked = false;
  }

  @Input() bgColor(value: string) {
    this.colorBg = value;
    timer(200)
      .pipe(takeUntil(this._unsubcribe))
      .subscribe(() => {
        this.setBackgroundColor(value);
      });
  }

  ngOnInit(): void {}

  public clickedButton() {
    this.clickedEvent.emit();
  }

  ngOnDestroy(): void {
    this._unsubcribe.next();
    this._unsubcribe.unsubscribe();
  }

  private setBackgroundColor(value: string) {
    if (this.buttonRef?.nativeElement) {
      this.buttonRef.nativeElement.style.boxShadow =
        '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 12px -5px ' + value;
      this._cdr.detectChanges();
    }
  }
}
