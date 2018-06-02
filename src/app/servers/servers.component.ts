import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // for components
  //selector: '[app-servers]', for modules
  //selector: '.app-servers', for classes
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
