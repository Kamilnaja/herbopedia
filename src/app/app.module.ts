import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HerbsService } from './herbs.service';
import { FilterPipe } from './filter/filter.pipe';
import { ContactComponent } from './contact/contact.component';
import { routes } from './app-router';
import { AuthorComponent } from './author/author.component';
import { HerblistComponent } from './herblist/herblist.component';
import { HerblistModule } from './herblist/herblist.module';
import { ModalComponent } from './modal/modal.component';
import { InfoBoxComponent } from './info-box/info-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AuthorComponent,
  ],
  imports: [
    HerblistModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
  ],
  providers: [HerbsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* todo add animation */
