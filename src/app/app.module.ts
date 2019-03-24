import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app-router';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { HerblistModule } from './herblist/herblist.module';
import { HerbsService } from './herbs.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AuthorComponent,
    BannerComponent,
  ],
  imports: [
    HerblistModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
  ],
  providers: [HerbsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
/* todo add animation */
