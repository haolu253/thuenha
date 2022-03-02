import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @HostBinding('class.navbar-opened') navbarOpened = false;
  listmini : boolean = true;
  
  constructor() { }
  
  ngOnInit() { }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
    this.listmini = !this.listmini;
  }
}
