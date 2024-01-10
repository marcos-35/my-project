import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroComponent } from './Heroes/hero/hero.component';
import { ListComponent } from './Heroes/list/list.component';
import { CounterModule } from './counter/counter.module';
import { HeroModule,  } from './Heroes/heroes.module';
import { MainPageModule } from './dbz/dbz.module';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule,
    MainPageModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//sdsd
