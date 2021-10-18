import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomToolbarComponent } from './custom-toolbar/custom-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {TablaComponent} from './tabla/tabla.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    CustomToolbarComponent,
    TablaComponent,
    BindingComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
