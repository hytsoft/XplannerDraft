import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

import { ChooseElementModalComponent } from './choose-element-modal/choose-element-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public dialog: MatDialog) { }

  onDrop($event) {
    console.log($event);

    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '600px';

    let dialogRef = this.dialog.open(ChooseElementModalComponent, dialogConfig);
  }
}
