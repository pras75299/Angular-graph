import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import {OverlayPanelModule} from 'primeng/overlaypanel';
// import {PaginatorModule} from 'primeng/paginator';
// import {ScrollPanelModule} from 'primeng/scrollpanel';
// import { GrowlModule } from 'primeng/growl';


import {
  // GrowlModule,
  CalendarModule,
  SplitButtonModule,
  CheckboxModule,
  RadioButtonModule,
  MultiSelectModule,
  DropdownModule,
  AutoCompleteModule,
  InputTextModule,
  ButtonModule,
  PasswordModule,
  KeyFilterModule,
  SidebarModule,
  MenuModule,
  TabViewModule,
  TooltipModule,
  TabMenuModule,
  AccordionModule,
  ConfirmDialogModule,
  MessagesModule,
  ProgressSpinnerModule,
  MegaMenuModule,
  RatingModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    DropdownModule,
    MultiSelectModule,
    RadioButtonModule,
    CheckboxModule,
    SplitButtonModule,
    CalendarModule,
    // GrowlModule,
    PasswordModule,
    KeyFilterModule,
    SidebarModule,
    MenuModule,
    TabViewModule,
    TooltipModule,
    TableModule,
    TabMenuModule,
    AccordionModule,
    ConfirmDialogModule,
    MessagesModule,
    ProgressSpinnerModule,
    MegaMenuModule,
    RatingModule,
    ToastModule,
    OverlayPanelModule,
    // PaginatorModule,
    // ScrollPanelModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    DropdownModule,
    MultiSelectModule,
    RadioButtonModule,
    CheckboxModule,
    SplitButtonModule,
    CalendarModule,
    // GrowlModule,
    PasswordModule,
    KeyFilterModule,
    SidebarModule,
    MenuModule,
    TabViewModule,
    TooltipModule,
    TableModule,
    TabMenuModule,
    AccordionModule,
    ConfirmDialogModule,
    MessagesModule,
    ProgressSpinnerModule,
    MegaMenuModule,
    RatingModule,
    ToastModule,
    OverlayPanelModule,
    // PaginatorModule,
    // ScrollPanelModule
  ],
  providers: [ToastModule],
})
export class AppPrimeNGModule { }