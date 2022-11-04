import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { Day2Module } from './day2/day2.module';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveComponent } from './day5/component/reactive/reactive.component';
import { TemplateComponent } from './day5/component/template/template.component';
import { MustMatchDirective } from './day5/component/must-match.directive';

@NgModule({
  declarations: [AppComponent, ReactiveComponent, TemplateComponent,MustMatchDirective],
  imports: [BrowserModule, FormsModule, Day2Module.forRoot(), AppRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
