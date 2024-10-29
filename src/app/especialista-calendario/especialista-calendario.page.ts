import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialista-calendario',
  templateUrl: './especialista-calendario.page.html',
  styleUrls: ['./especialista-calendario.page.scss'],
})
export class EspecialistaCalendarioPage implements OnInit {
  currentYear: number = 0;
  currentMonth: number = 0;
  monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  calendarDays: any[] = [];
  selectedDates: Date[] = [];


  unavailableDays = [4, 5, 6, 9, 12, 15, 17, 20, 25, 28];

  constructor(private router: Router) { }

  ngOnInit() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  generateCalendar(year: number, month: number) {
    this.calendarDays = [];
    const firstDay = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      this.calendarDays.push({ date: null });
    }

    for (let i = 1; i <= numDays; i++) {
      const date = new Date(year, month, i);
      this.calendarDays.push({
        date: i,
        fullDate: date,
        isToday: this.isToday(date),
        isSelected: this.isDateSelected(date),
        isUnavailable: this.unavailableDays.includes(i)
      });
    }
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  isDateSelected(date: Date): boolean {
    return this.selectedDates.some(d => d.toDateString() === date.toDateString());
  }

  selectDate(day: any) {
    if (!day.date) return;
    
    const date = day.fullDate;
    const index = this.selectedDates.findIndex(d => d.toDateString() === date.toDateString());
    if (index >= 0) {
      this.selectedDates.splice(index, 1);
    } else {
      this.selectedDates.push(date);
    }
    day.isSelected = !day.isSelected;

    this.router.navigate(['/detalhe-dia'], { queryParams: { date: date.toDateString() } });
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar(this.currentYear, this.currentMonth);
  }
}
