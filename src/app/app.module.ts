import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { SortSelectService } from './services/sortSelect.service';

@NgModule({
  declarations: [				
    AppComponent,
      NavbarComponent,
      MainComponent,
      MainComponent,
      NavbarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SortSelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

