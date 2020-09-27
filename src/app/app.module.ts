import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterRegionComponent } from './footer-region/footer-region.component';
import { AsideRegionComponent } from './aside-region/aside-region.component';
import { FormsComponent } from './forms/forms.component';
import { Form1Component } from './forms/form1/form1.component';
import { Form2Component } from './forms/form2/form2.component';
import { NightmareComponent } from './nightmare/nightmare.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterRegionComponent,
    AsideRegionComponent,
    FormsComponent,
    Form1Component,
    Form2Component,
    NightmareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [A11yModule]
})
export class AppModule { }
