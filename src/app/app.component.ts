import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular training';
  angularLogo = "assets/angular-old-logo.png";
  traineeNamesArr = [
    'Archana Vyas', 
    'Aryan Prajapati', 
    'Harmi Ravani',
    'Jenish Devmurari',
    'Khushal Rajput',
    'Krutika Prajapati',
    'Niksha Patel',
    'Nilay Doshi',
    'Parangi Rathod',
    'Vivek Vaghasiya',
    'Zenisha Savaliya'
  ];
  name = 'Yash';

  userInfo = {
    name: 'Yash Patel',
    email: 'yash.patel@bacancy.com',
    technology: 'Angular',
    company: 'Bacancy'
  }

  onUpdateLogo() {
    this.angularLogo = "assets/angular-logo.png";
  }

  onAdd() {
    this.traineeNamesArr.push(this.name);
  }
}
