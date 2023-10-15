import { NgModule } from '@angular/core';

// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

//Componentes
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
