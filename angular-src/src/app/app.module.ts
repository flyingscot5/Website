import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatInputModule,
  MatSortModule,
  MatFormFieldModule,
  MatExpansionModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DiscordServerFormComponent } from './components/discord-server-form/discord-server-form.component';
import { OverlayComponent } from "./components/overlay/overlay.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsPageComponent } from './components/news-page/news-page.component';



const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'news', component: NewsPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DiscordServerFormComponent,
    OverlayComponent,
    NavbarComponent,
    NewsPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
