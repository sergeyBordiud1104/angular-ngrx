import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StartEffects } from './effects/start.effects';
import { counterReducer } from "./reducers/counter.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {AppEffects} from "./app.effects";
import { CountComponent } from './components/count/count.component';


@NgModule({
  declarations: [
    AppComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
    EffectsModule.forRoot([AppEffects, StartEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
