import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './_shared/initial/initial.component';
import { MainComponent } from './_shared/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { SiteMapComponent } from './site-map/site-map.component';


import { LogoutComponent } from './common/logout/logout.component';




// Transportal starts here
import { CabRequestsComponent } from './transportal/cab-requests/cab-requests.component';
import { NightcabTripSheetComponent } from './transportal/nighcab-tripsheet/nighcab-tripsheet.component';
import { EntiredayCabSheetComponent } from './transportal/entiredaycab-tripsheet/entiredaycab-tripsheet.component';
import { RegularcabTripSheetComponent } from './transportal/regularcab-tripsheet/regularcab-tripsheet.component';

// dashboard starts here
import { DashboardComponent } from './dashboard/dashboard.component';


   const routes: Routes = [
      { path: '', component: SiteMapComponent },


      { path: 'carRequests', component: CabRequestsComponent},
      { path: 'nighcabSheet', component: NightcabTripSheetComponent},
      { path: 'entireDayCabSheet', component: EntiredayCabSheetComponent},
      { path: 'regularCabSheet', component: RegularcabTripSheetComponent},
      { path: 'admindashboard', component: DashboardComponent},
      { path: 'Logout', component: LogoutComponent },
      

 
      { path: 'login', component: LoginComponent },
      { path: 'forgot', component: ForgotComponent },
      { path: 'main', component: MainComponent },
      { path: 'initial', component: InitialComponent },
      { path: '**', component: NotFoundComponent }
    ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
  
