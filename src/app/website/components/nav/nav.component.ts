import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { AuthService } from '../../../services/auth.service';
import { User } from 'src/app/models/user.model';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from '../../../services/categories.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  profile: User | null = null;
  categories: Category[] = [];

  constructor(
    private storeService : StoreService,
    private authService : AuthService,
    private categoryService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
    this.getAllCategories();
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    this.authService.loginAndGet('john@mail.com', 'changeme')
    .subscribe(user => {
      this.profile = user;
    })
  }

  getAllCategories() {
    this.categoryService.getAll()
    .subscribe(data => {
      this.categories = data;
    });
  }
}
