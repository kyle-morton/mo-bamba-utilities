import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';

import { MoBambaServicesModule } from 'dist/mo-bamba-services';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    MoBambaServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
