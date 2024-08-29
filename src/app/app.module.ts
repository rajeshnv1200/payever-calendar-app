import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppointmentDialogComponent } from './appointment-dialog/appointment-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppointmentModule } from './shared/appointment.module';
//import { AppointmentFormComponent } from './calendar/appointment-form/appointment-form.component';
//import { AppointmentListComponent } from './calendar/appointment-list/appointment-list.component';
//import { CalendarViewComponent } from './calendar/calendar-view/calendar-view.component';


const routes: Routes = [
    // Define your routes here
   
    
    { path: '', component: NavbarComponent }, 
    { path: 'calendar', component: AppComponent } 
  ];


  
@NgModule({
  declarations: [
    //AppComponent,
    //NavbarComponent 
    //AppointmentFormComponent,
    //CalendarViewComponent,
    //AppointmentListComponent
    //AppointmentDialogComponent
  ],
  imports: [  
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NavbarComponent,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    FormsModule,
    AppointmentModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule, 
    MatDividerModule ,
    NgxMaterialTimepickerModule 
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AppointmentDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Handle the result here
    });
  }

}
