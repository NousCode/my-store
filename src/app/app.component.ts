import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  imgParent = '';
  showImg = true;

  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) { }

  onLoaded(img: string) {
    console.log('Log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.userService.create({
      name: 'Carlos',
      email: 'carlos@mail.com',
      password: '12345'
     })
     .subscribe(rta => {
      console.log(rta);
     })
  }
}
