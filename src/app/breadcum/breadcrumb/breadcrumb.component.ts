import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { globalConstant } from '../../utils/constant';

@Component({
  selector: 'nk-breadcrumb-default',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent implements OnInit, AfterViewInit {
  @ViewChildren('steps') stepsView: QueryList<ElementRef>;
  @ViewChild('barActive') barActive: ElementRef;
  @Input() stepsList: string[];
  @Input() set active(value: number) {
    if (typeof value === 'string') {
      this._active = 0;
    } else {
      this._active = value;
    }
    this.setWidthBars();
  }

  @Input() blockSteps: boolean;

  @Output() stepSelected: EventEmitter<number> = new EventEmitter();

  private _active: number;

  constructor(private _render: Renderer2) {}

  @HostListener('window: resize')
  public setWidthBars() {
    if (this.stepsView) {
      const elementActive = this.stepsView.find(
        (item, index) => index === this._active
      );

      this._render.setStyle(
        this.barActive.nativeElement,
        globalConstant.GENERAL_STYLES.WIDTH,
        elementActive?.nativeElement.offsetLeft + globalConstant.MEASURE_CSS.PX
      );
    }
  }

  public ngAfterViewInit(): void {
    this.setWidthBars();
  }

  public get stepActive(): number {
    return this._active;
  }

  ngOnInit(): void {}

  public setSelectedActive(step: number) {
    if (step <= this._active && this.blockSteps) {
      this._setStepsChanges(step);
    } else if (!this.blockSteps) {
      this._setStepsChanges(step);
    }
  }

  private _setStepsChanges(step: number) {
    this._active = step;
    this.stepSelected.emit(step);
    this.setWidthBars();
  }
}
