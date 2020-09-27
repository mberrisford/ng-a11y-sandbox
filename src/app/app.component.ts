import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'A11y Tester';

  // Sets focus to first h1 heading
  public skipTo () {
    const skipToEl = document.getElementsByTagName('h1')[0];

    if (skipToEl) {
      skipToEl.setAttribute('tabindex', '-1');
      skipToEl.focus();
      setTimeout(() => {
        skipToEl.removeAttribute('tabindex');
      }, 2000);

    }

  }

  constructor(
    private router: Router,
    private announcer: LiveAnnouncer
  ) { }
  ngOnInit () {
    this.router.events.subscribe((event) => {
      // Sets focus to top div
      if (event instanceof NavigationEnd) {
        const mainHeader = document.getElementById('top');
        if (mainHeader) {
          mainHeader.setAttribute('tabindex', '-1');
          mainHeader.focus();
          mainHeader.removeAttribute('tabindex');
          // console.log('Route to top finished');
        }
        // Screen reader announces current page
        setTimeout(() => {
          this.announcer.announce(document.title + ' page loaded.', 'polite');
          // console.log('Announcing page');
        }, 500);
      }
    });

  }
}
