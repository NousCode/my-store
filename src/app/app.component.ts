import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Juan';
  age = 26;
  image = 'https://tresubresdobles.com/wp-content/uploads/2019/08/skft-912381dcd5b2c45c4a9ce8acf32cfd8c-768x961.jpg';
  btnDisabled = true;

  person = {
    name: 'Juano',
    age: 26,
    avatar: 'https://tresubresdobles.com/wp-content/uploads/2019/08/skft-912381dcd5b2c45c4a9ce8acf32cfd8c-768x961.jpg'
  }

  names: string[] = ['Juan', 'Carlos', 'Santiago'];
  newName: string = '';

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
