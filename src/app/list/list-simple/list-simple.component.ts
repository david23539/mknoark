import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, QueryList, ViewChildren,} from '@angular/core';
import {ListInterface} from '../interfaces/list-interface';

@Component({
  selector: 'nk-list-simple',
  templateUrl: './list-simple.component.html',
  styleUrls: ['./list-simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSimpleComponent {
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
  /**
   * esta propiedad sirve para poner al reves la lista en caso de que no quepa
   * */
  @Input() reverseList: boolean;

  /*
   * propiedad que se lanza al pulsar sobre un elemento
   * */
  @Output() selectItem = new EventEmitter();

  @Output() mouseOver = new EventEmitter();

  constructor() {}
}
