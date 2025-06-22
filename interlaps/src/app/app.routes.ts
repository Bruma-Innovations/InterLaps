import { Routes } from '@angular/router';
import { OnboardingPageComponent } from './onboarding/pages/onboarding-page/onboarding-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { DriversPageComponent } from './drivers/pages/drivers-page/drivers-page.component';
import { DriversInfoPageComponent } from './drivers/pages/drivers-info-page/drivers-info-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'onboarding',
        pathMatch: 'full'
    }
    ,{path:'onboarding', component:OnboardingPageComponent}
    ,{path:'inicio', component:HomePageComponent}
    ,{path:'pilotos', component:DriversPageComponent}
    ,{path:'pilotos/info', component:DriversInfoPageComponent}
];
