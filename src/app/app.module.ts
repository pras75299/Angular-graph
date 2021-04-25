import { forwardRef, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup , FormControl ,FormArray,FormBuilder,Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { AppBootstrapModule} from './app-bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';

import { HeaderComponent } from './_shared/layout/header/header.component'; 
import { FooterComponent } from './_shared/layout/footer/footer.component';
import { InitialComponent } from './_shared/initial/initial.component';
import { MainComponent } from './_shared/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotComponent } from './auth/forgot/forgot.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserComComponent } from './common/browser-com/browser-com.component';
import { DownTimeComponent } from './common/down-time/down-time.component';
import { LogoutComponent } from './common/logout/logout.component';
import { ServerErrorComponent } from './common/server-error/server-error.component';
import { SessionExpiredComponent } from './common/session-expired/session-expired.component';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
// import {ProgressBarModule} from 'primeng/progressbar';
// import {TooltipModule} from 'primeng/tooltip';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
// import {TabViewModule} from 'primeng/tabview';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {MenuModule} from 'primeng/menu';
// import {AccordionModule} from 'primeng/accordion';
import {ChartModule} from 'primeng/chart';
import {InputSwitchModule} from 'primeng/inputswitch';
// import {FileUploadModule} from 'primeng/fileupload';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SidebarModule} from 'primeng/sidebar';

import { SiteMapComponent } from './site-map/site-map.component';

// Transportal starts here

import { CabRequestsComponent } from './transportal/cab-requests/cab-requests.component';
import { CabRequestsHeaderComponent } from './transportal/cab-requests/cab-requests-header/cab-requests-header.component';
import { NightcabTripSheetComponent } from './transportal/nighcab-tripsheet/nighcab-tripsheet.component';
import { EntiredayCabSheetComponent } from './transportal/entiredaycab-tripsheet/entiredaycab-tripsheet.component';
import { RegularcabTripSheetComponent } from './transportal/regularcab-tripsheet/regularcab-tripsheet.component';

// Lottie Icon Animation
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { LottieAnimationViewModule } from 'ng-lottie';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopVendorsComponent } from './dashboard/top-vendors/top-vendors.component';
import { RequestOverviewComponent } from './dashboard/request-overview/request-overview.component';
import { CabUsageComponent } from './dashboard/cab-usage/cab-usage.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,   
    HeaderComponent,
    FooterComponent,
    InitialComponent,
    MainComponent,
    LoginComponent,
    ForgotComponent,
    NotFoundComponent,
    BrowserComComponent,
    DownTimeComponent,
    LogoutComponent,
    ServerErrorComponent,
    SessionExpiredComponent,
    SiteMapComponent,
    // Transportal starts here
    CabRequestsComponent,
    CabRequestsHeaderComponent,
    NightcabTripSheetComponent,
    EntiredayCabSheetComponent,
    RegularcabTripSheetComponent,
    DashboardComponent,
    TopVendorsComponent,
    RequestOverviewComponent,
    CabUsageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppBootstrapModule,
    HttpClientModule,
    CheckboxModule,
    DropdownModule,
    AutoCompleteModule,
    InputTextModule,
    CalendarModule,
    InputTextareaModule,
    DialogModule,
    // ProgressBarModule,
    // TooltipModule,
    // TabViewModule,
    // AccordionModule,
    ChartModule,
    // FileUploadModule,
    ConfirmDialogModule,
    MessagesModule,
    ToastModule,
    FormsModule,
    OverlayPanelModule, 
    MultiSelectModule,   
    MenuModule,    
    InputSwitchModule,    
    ButtonsModule,
    RadioButtonModule,
    SidebarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule,
    LottieModule.forRoot({ player: playerFactory }),
    LottieAnimationViewModule.forRoot(),
  ],
  
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

