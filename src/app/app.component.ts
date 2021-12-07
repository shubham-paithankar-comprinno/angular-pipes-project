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
  amount: number = 0
  height: number = 0
  miles: number = 0

  // Functions
  onNameChange (event: Event) {
    let { value = '' } = event.target as HTMLInputElement
    this.name = value
  }

  onDateChange (event: Event) {
    let { value = '' } = event.target as HTMLInputElement
    this.date = value
  }

  onAmountChange (event: Event) {
    let { value = '0' } = event.target as HTMLInputElement
    
    if(isNaN(parseFloat(value))) {
      this.amount = 0
      return
    }
    
    this.amount = parseFloat(value)
  }

  onHeightChange (event: Event) {
    let { value = '0' } = event.target as HTMLInputElement
    
    if(isNaN(parseFloat(value))) {
      this.height = 0
      return
    }
    
    this.height = parseFloat(value)
  }

  onMilesChange (event: Event) {
    let { value = '0' } = event.target as HTMLInputElement
    
    if(isNaN(parseFloat(value))) {
      this.miles = 0
      return
    }
    
    this.miles = parseFloat(value)
  }

}
