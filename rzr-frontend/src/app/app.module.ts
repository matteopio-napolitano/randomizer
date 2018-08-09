import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppHeaderComponent} from './app-header/app-header.component';
import {AppMenuComponent} from './app-menu/app-menu.component';
import {AppPageHeaderComponent} from './app-page-header/app-page-header.component';
import {AppTableComponent} from './app-table/app-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMenuComponent,
    AppPageHeaderComponent,
    AppTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
