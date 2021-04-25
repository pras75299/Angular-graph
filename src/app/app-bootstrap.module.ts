import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule} from 'ngx-bootstrap/modal';
// import { TypeaheadModule} from 'ngx-bootstrap/typeahead';
// import { TabsModule} from 'ngx-bootstrap/tabs';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
 import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { PopoverModule} from 'ngx-bootstrap/popover';
import { TooltipModule} from 'ngx-bootstrap/tooltip';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RatingModule } from 'ngx-bootstrap/rating';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// import { BarRatingModule } from "ngx-bar-rating";



@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      // TypeaheadModule.forRoot(),
      // TabsModule.forRoot(),
       BsDropdownModule.forRoot(),
       ProgressbarModule.forRoot(),
      // CarouselModule.forRoot(),
      PopoverModule.forRoot(),
      // BarRatingModule,
      TooltipModule.forRoot(),      
      RatingModule.forRoot(),
      BsDatepickerModule.forRoot(),
    ],
    exports: [
      ModalModule,
      // TypeaheadModule,
      // TabsModule, 
      BsDropdownModule, 
      // CarouselModule,
      PopoverModule, 
      TooltipModule,       
      RatingModule, 
      ProgressbarModule,
      BsDatepickerModule]
  })
  export class AppBootstrapModule {
    
  }

