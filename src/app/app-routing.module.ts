import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './calendar/calendar-view/calendar-view.component';

// Define routes
const routes: Routes = [
  { path: '', component: CalendarViewComponent },
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'calendar', loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule) },
  { path: '**', redirectTo: '/calendar' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
};
