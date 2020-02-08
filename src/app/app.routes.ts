import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
const APP_ROUTES: Routes = [
    { path: 'home', loadChildren: './pages/home/home.module#HomeModule'},
    { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
    { path: 'post', loadChildren: './pages/post/post.module#PostModule' },
    { path: 'portfolio', loadChildren: './pages/portfolio/portfolio.module#PortfolioModule' },
    { path: 'contact', loadChildren: './pages/contact/contact.module#ContactModule' },
    { path: '**', pathMatch: 'full' , redirectTo: 'home' },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true});
