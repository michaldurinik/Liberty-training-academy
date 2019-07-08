import {Component, Directive, EventEmitter} from '@angular/core';
import createSpyObj = jasmine.createSpyObj;

export function createComponentStub(selector: string,
                                    inputs: string[] = [],
                                    outputs: string[] = []) {
  // noinspection AngularMissingOrInvalidDeclarationInModule
  @Component({
    selector,
    template: '',
    // tslint:disable-next-line:use-input-property-decorator
    inputs,
    // tslint:disable-next-line:use-output-property-decorator
    outputs
  })
  class StubClassComponent {
    constructor() {
      outputs.forEach(x => {
        this[x] = new EventEmitter<any>();
      });
    }
  }

  return StubClassComponent;
}

export function createDirectiveStub(selector: string, keys: string[] = []) {
  @Directive({
    selector,
    // tslint:disable-next-line:use-input-property-decorator
    inputs: keys
  })
  class StubClassDirective {
  }

  return StubClassDirective;
}

export function createServiceStub<T>(type: new(...params: any[]) => T) {
  return {
    provide: type,
    useValue: createSpyObj('testService', Object.keys(type.prototype))
  };
}

