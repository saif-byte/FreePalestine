import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-date',
  imports: [],
  templateUrl: './select-date.component.html',
  styleUrl: './select-date.component.scss',
})
export class SelectDateComponent implements OnInit {
  surroundingDates: Date[];
  constructor() {
    this.surroundingDates = this.getSurroundingDates();
  }
  ngOnInit(): void {}

  getSurroundingDates(): Date[] {
    const today = new Date();
    const dates: Date[] = [];

    // Add previous 7 dates
    for (let i = 10; i >= 1; i--) {
      const prevDate = new Date(today);
      prevDate.setDate(today.getDate() - i);
      dates.push(prevDate);
    }

    // Add future 7 dates
    for (let i = 1; i <= 10; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      dates.push(nextDate);
    }

    return dates;
  }
}
