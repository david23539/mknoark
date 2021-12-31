import { TooltipDirective } from './tooltip.directive';
import { ElementRef, Renderer2, RendererStyleFlags2 } from '@angular/core';

class render2test extends Renderer2 {
  addClass(el: any, name: string): void {}

  appendChild(parent: any, newChild: any): void {}

  createComment(value: string): any {}

  createElement(name: string, namespace?: string | null): any {}

  createText(value: string): any {}

  get data(): { [p: string]: any } {
    return {};
  }

  destroy(): void {}

  insertBefore(
    parent: any,
    newChild: any,
    refChild: any,
    isMove?: boolean
  ): void {}

  listen(
    target: any,
    eventName: string,
    callback: (event: any) => boolean | void
  ): () => void {
    return () => {};
  }

  nextSibling(node: any): any {}

  parentNode(node: any): any {}

  removeAttribute(el: any, name: string, namespace?: string | null): void {}

  removeChild(parent: any, oldChild: any, isHostElement?: boolean): void {}

  removeClass(el: any, name: string): void {}

  removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void {}

  selectRootElement(selectorOrNode: any, preserveContent?: boolean): any {}

  setAttribute(
    el: any,
    name: string,
    value: string,
    namespace?: string | null
  ): void {}

  setProperty(el: any, name: string, value: any): void {}

  setStyle(
    el: any,
    style: string,
    value: any,
    flags?: RendererStyleFlags2
  ): void {}

  setValue(node: any, value: string): void {}
}

describe('TooltipDirective', () => {
  it('should create an instance', () => {
    const directive = new TooltipDirective(
      new render2test(),
      new ElementRef<any>(this)
    );
    expect(directive).toBeTruthy();
  });
});
