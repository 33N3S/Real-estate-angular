import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropretyCardComponent } from './proprety/proprety-card/proprety-card.component';
import { PropretyListComponent } from './proprety/proprety-list/proprety-list.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [	
    AppComponent,
    PropretyCardComponent,
    PropretyListComponent,
      NavbarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
