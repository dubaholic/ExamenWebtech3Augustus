import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { SearchAantalComponent } from './components/search-aantal/search-aantal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    SearchAantalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
