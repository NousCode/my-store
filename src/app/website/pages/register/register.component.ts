import { Component } from '@angular/core';
import { OnExit } from './../../../guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnExit {

  constructor() { }

  onExit() {
    const rta = confirm('Lógica desde el componente, estas seguro de salir?');
    return rta;
  }

}
