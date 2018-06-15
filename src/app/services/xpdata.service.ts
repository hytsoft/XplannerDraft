import { Injectable } from '@angular/core';

import {Headers, Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import {LabElement} from '../elements/element.model';

@Injectable()
export class XpdataService {

  private elements: LabElement[] = [];
  elementsChanged = new Subject<LabElement[]>();

  constructor(private http: Http) { }

  getLabElements() {
    return this.http.get('http://localhost:57008/api/Xplanner')
    .map(
      (response: Response) => {
        const data = response.json();
        this.setElements(data);
        return this.elements.slice();
      }
    );
  }

  setElements(elements: LabElement[]) {
    this.elements = elements;
    this.elementsChanged.next(this.elements.slice());
  }

}
