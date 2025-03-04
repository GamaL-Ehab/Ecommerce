import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private isDarkMode = false;

  constructor() {
    this.loadDarkModePreference();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkMode();
    this.saveDarkModePreference();
  }

  getDarkMode(): boolean {
    return this.isDarkMode;
  }

  private applyDarkMode(): void {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  private saveDarkModePreference(): void {
    localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
  }

  private loadDarkModePreference(): void {
    if(typeof localStorage !== 'undefined'){
      const preference = localStorage.getItem('darkMode');
    if (preference) {
      this.isDarkMode = JSON.parse(preference);
      this.applyDarkMode();
    }
    }
  }
  
}
