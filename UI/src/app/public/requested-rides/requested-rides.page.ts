import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requested-rides',
  templateUrl: './requested-rides.page.html',
  styleUrls: ['./requested-rides.page.scss'],
})
export class RequestedRidesPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['home']);
  }
}
