import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @ViewChild('navBurgerBasic') navBurgerBasic: ElementRef;
  @ViewChild('navMenuBasic') navMenuBasic: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  toggleBasicNavbar() {
    this.navBurgerBasic.nativeElement.classList.toggle('is-active');
    this.navMenuBasic.nativeElement.classList.toggle('is-active');
  }

}
