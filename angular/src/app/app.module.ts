import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { CoolButtonDirective } from './directives/cool-button.directive';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvantageComponent,
    ProductComponent,
    CoolButtonDirective,
    TruncateTextPipe,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
