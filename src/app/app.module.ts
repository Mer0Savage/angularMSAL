import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogamelistComponent } from './components/videogamelist/videogamelist.component';
import { VideogameeditComponent } from './components/videogameedit/videogameedit.component';
import { FormsModule } from '@angular/forms';
import { VideogamecreateComponent } from './components/videogamecreate/videogamecreate.component';
import { MsalGuard, MsalModule, MsalRedirectComponent, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { BrowserCacheLocation, InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { isNull, nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { AccessdeniedComponent } from './components/accessdenied/accessdenied.component';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent,
    VideogamelistComponent,
    VideogameeditComponent,
    VideogamecreateComponent,
    AccessdeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    MsalModule.forRoot( new PublicClientApplication({
      auth: {
        clientId: '495cfd66-30a8-4112-b646-7d8dbf0127a2', // Application (client) ID from the app registration
        authority: 'https://login.microsoftonline.com/6891b0c5-9587-46b5-ad08-f0dc63e54ebf', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
        redirectUri: 'http://localhost:4200'// This is your redirect URI
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
      }
    }), null!, null!)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
