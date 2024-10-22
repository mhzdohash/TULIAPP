import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialista-calendario',
  templateUrl: './especialista-calendario.page.html',
  styleUrls: ['./especialista-calendario.page.scss'],
})
export class EspecialistaCalendarioPage {

  selectedDates: Date[] = [];

  constructor() { }

  onDateChange(event: any) {
    console.log('Selected date:', event);
}
}
