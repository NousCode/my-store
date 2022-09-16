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
    console.log('Only the image change.');

  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/images/bike.jpg';
  counter: number = 0;
  couterFn: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.couterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');

    }, 1000)
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);

  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    window.clearInterval(this.couterFn);

  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoad() {
    console.log('loaded hijo');
    this.loaded.emit(this.img);
  }
}
