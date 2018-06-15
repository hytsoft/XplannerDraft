import { Component, OnInit } from '@angular/core';

import {MatDialog, MatCard} from '@angular/material';

@Component({
  selector: 'app-choose-element-modal',
  templateUrl: './choose-element-modal.component.html',
  styleUrls: ['./choose-element-modal.component.css']
})
export class ChooseElementModalComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
