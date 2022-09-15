import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  widthImg = 10;

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

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

  register = {
    name: '',
    email: '',
    password: ''
  }

  products: Product[] = [
      {
        name: 'EL mejor juguete',
        price: 565,
        image: './assets/images/toy.jpg',
        category: 'all'
      },
      {
        name: 'Bicicleta casi nueva',
        price: 356,
        image: './assets/images/bike.jpg'
      },
      {
        name: 'Colleción de albumnes',
        price: 34,
        image: './assets/images/album.jpg'
      },
      {
        name: 'Mis libros',
        price: 23,
        image: './assets/images/books.jpg'
      },
      {
        name: 'Casa para perro',
        price: 34,
        image: './assets/images/house.jpg'
      },
      {
        name: 'Gafas',
        price: 3434,
        image: './assets/images/glasses.jpg'
      }
  ];

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

  onRegister() {
    console.log(this.register);
  }
}
