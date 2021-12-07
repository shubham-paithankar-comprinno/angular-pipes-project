import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variables
  name: string = ''
  date: string = ''

  // Functions
  onNameChange (event: Event) {
    let { value = '' } = event.target as HTMLInputElement
    this.name = value
  }

  onDateChange (event: Event) {
    let { value = '' } = event.target as HTMLInputElement
    this.date = value
  }
}
