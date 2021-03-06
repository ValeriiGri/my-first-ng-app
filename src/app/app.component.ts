import { Component } from '@angular/core';
import {MatDrawer} from '@angular/material';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    public titleApp = 'my-first-ng-app';

    public account: {name: string, age: number} = {name: 'Qwerty', age: 33};
    public salary = 3000;

    public imgWidth = 100;
    public imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

    public drawer!: MatDrawer;

    public getSalary(bonus: number): number {
        return this.salary * bonus;
    }
    public  getWidth(width: number): void{
       console.log(width);
    }

    public  getElement(el: HTMLImageElement): void{
        console.log(el);
    }

    // прокидываем event
    public search(width: number, event: Event): void{
       const value = (event.target as HTMLInputElement).value;
       console.log(width, value);
    }

    // прокидываем инпут + деструктуризация, чтобы упростить код
    public searchLink(width: number, {value}: HTMLInputElement): void{
        console.log(width, value);
    }
    public setSidenav(drawer: MatDrawer) {
       this.drawer = drawer;
    }
}
