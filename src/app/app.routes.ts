import { Routes, RouterModule } from '@angular/router';
const APP_ROUTES: Routes = [
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
    // { path: 'home', loadChildren: './pages/home/home.module#HomeModule'},
    { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
    { path: 'post', loadChildren: () => import('./pages/post/post.module').then(m => m.PostModule) },
    { path: 'portfolio', loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule) },
    { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
    { path: '**', pathMatch: 'full' , redirectTo: 'home' },
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES, { useHash: true});
