import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass']
})
export class ImgComponent implements OnInit {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/images/bike.jpg'

  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoad() {
    console.log('loaded hijo');
    this.loaded.emit(this.img);
  }
}
