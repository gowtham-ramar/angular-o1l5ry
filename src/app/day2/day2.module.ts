import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { OnlyNumberDirective, TrimTextDirective, TwoDigitDecimalNumberDirective } from './directive';
import { ChildComponent } from './component/child/child.component';
import { ParentComponent } from './component/parent/parent.component';
import { HttpClientModule } from '@angular/common/http';









const pipes = [
  SearchFilterPipe,

];

const containers = [
  ChildComponent,
  ParentComponent
];

const directives = [

  OnlyNumberDirective,
  TwoDigitDecimalNumberDirective,
  TrimTextDirective,

];

@NgModule({
  declarations: [
    ...pipes,
    ...containers,
    ...directives,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule,
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ...pipes,
    ...containers,
    ...directives,
  ],
  providers: [
   
  ],
  entryComponents: [
  ]
})
export class Day2Module {
  static forRoot(): ModuleWithProviders<Day2Module> {
    return {
      ngModule: Day2Module,
      providers: [

      ],
    };
  }
}
