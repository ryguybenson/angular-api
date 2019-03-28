import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ViewModule } from './view/view.module';
import { TestService } from './test.service'
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViewModule,
    HttpClientModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
