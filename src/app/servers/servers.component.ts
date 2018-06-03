import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // for components
  //selector: '[app-servers]', for modules
  //selector: '.app-servers', for classes
  templateUrl: './servers.component.html',
  //template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName = '';
    userNameStatus = '';
    userName = '';
    serverCreated = false;

  constructor() {
      setTimeout(() => {
        this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
      }

  onCreateServer() {
      this.serverCreated = true;
      this.serverCreationStatus = 'Server was created! The name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
      this.serverName= (<HTMLInputElement>event.target).value;
  }
  onCreateUsername() {
      this.userNameStatus = 'Username created! Welcome ' + this.userName;
     }
}
