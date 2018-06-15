import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Headers, Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators';

import { AngularSplitModule } from 'angular-split';

import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';

import { TreeModule } from 'angular-tree-component';

import { AppComponent } from './app.component';
import { ElementsComponent } from './elements/elements.component';
import { XpdataService } from './services/xpdata.service';
import { ChooseElementModalComponent } from './choose-element-modal/choose-element-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    ChooseElementModalComponent
  ],
  imports: [
    BrowserModule, HttpModule, TreeModule,
    MatCardModule, MatButtonModule, MatDialogModule,
    BrowserAnimationsModule,
    AngularSplitModule
  ],
  entryComponents: [ChooseElementModalComponent],
  providers: [XpdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
