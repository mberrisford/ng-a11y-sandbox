import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside-region',
  templateUrl: './aside-region.component.html',
  styleUrls: ['./aside-region.component.scss']
})
export class AsideRegionComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit (): void {
  }

}
