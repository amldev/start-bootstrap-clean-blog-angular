import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YoutubePipe } from './pipes/youtube.pipe';
import { DomSecurePipe } from './pipes/dom-secure.pipe';
import { SharedModule } from './components/shared.module';

const PIPES = [
  YoutubePipe,
  DomSecurePipe
];

@NgModule({
  declarations: [
    AppComponent,
    PIPES
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
