import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-bootstrap-app';
  dropDownMenuClick: boolean;
  bills: any = [
    {
      payee: "Youtube TV",
      account: "Account Name (****1604)"
    },
    {
      payee: "Sling",
      account: "Account Name (****1604)"
    },
    {
      payee: "ABC",
      account: "Account Name (****1604)"
    },
    {
      payee: "ABC",
      account: "Account Name (****1604)"
    },
    {
      payee: "ABC",
      account: "Account Name (****1604)"
    },
    {
      payee: "ABC",
      account: "Account Name (****1604)"
    },
    {
      payee: "ABC",
      account: "Account Name (****1604)"
    }
  ]
  items: string[] = [
    'Create One-Time Payment',
    'Create Recurring Payment',
    'Edit Payee',
    'Delete Payee'
  ];

  constructor(){
    setTheme('bs4');
  }
 
  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
}
