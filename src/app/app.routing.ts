import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/hero-list/hero-list.component';
import { HeroComponent } from './heroes/hero/hero.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'heroes/:id',
        component: HeroComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
