import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    NavbarModule,
    HeaderModule,
    FooterModule
  ]
})
export class SharedModule { }
