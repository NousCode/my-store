import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass']
})
export class ImgComponent implements OnInit {
  img: string = '';
  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;

  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/images/bike.jpg';
  counter: number = 0;
  couterFn: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {

  }

  ngOnDestroy() {
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoad() {
    this.loaded.emit(this.img);
  }
}
