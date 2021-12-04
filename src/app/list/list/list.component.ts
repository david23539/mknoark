import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import {globalConstant} from '../../utils/constant';
import {ListInterface} from '../interfaces/list-interface';

@Component({
  selector: 'nk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements AfterViewInit {
  @ViewChildren('text') text: QueryList<any>;
  @ViewChildren('list') list: QueryList<any>;

  /*
   * este input delimita la altura del componente
   * si recibe un true se aplica una clase 'custom-style-list'
   * que será la encargada de aplicar un ancho y un scroll
   * */
  @Input() limitHeight: boolean;
  /*
   * este input setea los datos que se mostraran en la lista
   * el formato será como el siguiente dentro de un array
   * icon? -> nombre del icono Material icon (optativo)
   * text -> texto que se mostrara al lado
   * */
  @Input() data: ListInterface[];

  /*
   * la propiedad collapse hace que se muestre o no el
   * texto
   * */
  @Input() collapse: boolean;
  /*
   * la propiedad animated hace que tenga animacion
   * al pasar el raton por encima
   * */
  @Input() animated: boolean;

  @Input() reverseList: boolean;

  /*
   * propiedad que se lanza al pulsar sobre un elemento
   * */
  @Output() selectItem = new EventEmitter();

  @Output() mouseOver = new EventEmitter();

  constructor(private rendered: Renderer2) {}

  ngAfterViewInit() {
    if (this.collapse) {
      this.text.forEach(item => {
        this.rendered.addClass(
          item.nativeElement,
          globalConstant.GENERAL_STYLES.COLLAPSE
        );
      });
    }
    if (this.animated) {
      this.list.forEach(item => {
        this.rendered.addClass(
          item.nativeElement,
          globalConstant.GENERAL_STYLES.ANIMATED
        );
      });
    }
  }
}
