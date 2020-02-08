import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    HeaderModule,
    SidebarModule
  ],
  exports: [
    NavbarModule,
    HeaderModule,
    SidebarModule
  ]
})
export class SharedModule { }
