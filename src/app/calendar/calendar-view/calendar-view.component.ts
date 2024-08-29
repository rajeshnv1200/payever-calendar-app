import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { addMonths, eachDayOfInterval, endOfDay, endOfMonth, startOfDay, startOfMonth, subMonths } from 'date-fns';


@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css'],
  
})
export class CalendarViewComponent implements OnInit {
  currentMonth: Date = new Date();
  days: Date[] = [];
  isFormVisible = false;
  selectedDate: Date | null = null;
  appointments: any[] = [];
  recentAppointments: any[] = [];

  ngOnInit() {
    this.loadDays();
    this.loadAppointments();
  }

  loadDays() {
    const start = startOfMonth(this.currentMonth);
    const end = endOfMonth(this.currentMonth);
    this.days = eachDayOfInterval({ start, end });
  }

  prevMonth() {
    this.currentMonth = subMonths(this.currentMonth, 1);
    this.loadDays();
  }

  nextMonth() {
    this.currentMonth = addMonths(this.currentMonth, 1);
    this.loadDays();
  }

  selectDate(day: Date) {
    this.selectedDate = day;
    this.openFormDialog();
  }

  openFormDialog() {
    this.isFormVisible = true;
  }

  onFormSubmitted(appointment: any) {
    if (this.selectedDate) {
      this.appointments.push({ ...appointment, date: this.selectedDate });
      this.isFormVisible = false;
      this.updateRecentAppointments();
    }
  }

  onFormCancelled() {    
    console.log('Form cancelled');
    this.isFormVisible = false;
  }

 
  deleteAppointment(appointment: any) {
    this.appointments = this.appointments.filter(a => a !== appointment);
    this.updateRecentAppointments();
  }

  onDrop(event: CdkDragDrop<any>) {
    const { previousIndex, currentIndex } = event;
    const movedAppointment = this.appointments[previousIndex];
    this.appointments.splice(previousIndex, 1);
    this.appointments.splice(currentIndex, 0, movedAppointment);
    this.updateRecentAppointments();
  }

  filteredAppointments(day: Date) {
    return this.appointments.filter(appointment =>
      startOfDay(new Date(appointment.date)).getTime() === startOfDay(day).getTime()
    );
  }

  loadAppointments() {
    // Dummy data
    this.appointments = [
      { title: 'Assessment', date: '08/28/2024', description: 'Frontend JavaScript Engineer (m/f/x) Assessment at payever' },
      { title: 'Meeting', date: new Date(), description: 'Project meeting' },
      { title: 'Doctor', date: '08/30/2024', description: 'Checkup' }
    ];
    this.updateRecentAppointments();
  }

  updateRecentAppointments() {
    const now = new Date();
    this.recentAppointments = this.appointments
      .filter(appointment => {
        const appointmentDate = new Date(appointment.date);
        return appointmentDate >= startOfDay(now) && appointmentDate <= endOfDay(now);
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      // Update the appointment date to the new date based on the drop location
      const movedAppointment = event.container.data[event.currentIndex];
      movedAppointment.date = this.days[event.currentIndex];
    }
  }


}
