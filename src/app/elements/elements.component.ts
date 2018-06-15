import { Component, OnInit, ViewChild } from '@angular/core';
import {XpdataService} from '../services/xpdata.service';
import { LabElement } from './element.model';

@Component({
  selector: 'app-elements',
  template: '<tree-root\
                (moveNode)="onMoveNode($event)"\
                #tree [nodes]="nodes"\
                [options]="options">\
                <ng-template #treeNodeTemplate let-node let-index="index">\
                  <span>\
                     <img src="">\
                     {{ node.data.name }}\
                   </span>\
                </ng-template>\
             </tree-root>',
  // templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {

  elements: LabElement[] = [];
  @ViewChild('tree') tree;
  nodes = [
    {
      id: 1,
      name: 'Devices',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'Ingredients',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options = {
    allowDrag: (node) => node.isLeaf,
    allowDrop: (element, { parent, index }) => {
      return parent.hasChildren;
    }};

  constructor(private xplannerService: XpdataService) { }

  ngOnInit() {
    this.xplannerService.getLabElements()
    .subscribe(
      (data: LabElement[]) => {
        console.log(data);
        this.elements = data;

        for (const element of this.elements) {
          this.nodes[0].children.push({id: 20, name: element.Name});
          this.tree.treeModel.update();
        }
      }
        ,
      (error) => console.log(error)
    );

  }

  onMoveNode($event) {
    console.log($event);
  }

  onDrop($event) {
    console.log($event);
  }

}
