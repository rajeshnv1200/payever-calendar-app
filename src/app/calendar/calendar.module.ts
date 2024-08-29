import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { AppointmentModule } from "../shared/appointment.module";
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';

import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AppointmentDialogComponent } from '../../app/appointment-dialog/appointment-dialog.component';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [
    CalendarViewComponent,
    AppointmentFormComponent,
    AppointmentListComponent,
    AppointmentDialogComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    AppointmentModule,
    MatIconModule,
    FormsModule,
    MatListModule,
    AppComponent,    
    NgxMaterialTimepickerModule,
    MatSelectModule,
    MatOptionModule,

  ],
  exports: [
    CalendarViewComponent,
    AppointmentFormComponent,
    AppointmentListComponent
  ]
})
export class CalendarModule { }
