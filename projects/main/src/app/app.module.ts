import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './pages/home/home.component';
import { reducers, metaReducers } from './reducers';
import { HomeModule } from './views/home/home.module';
import { MaterialModule } from './views/material.module';
import { ViewModule } from './views/view.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    ViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
