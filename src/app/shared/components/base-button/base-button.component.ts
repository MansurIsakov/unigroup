import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss'],
})
export class BaseButtonComponent {
  @Input() styles: string;
  @Input() link: string;

  constructor() {
    this.styles = '';
    this.link = '';
  }
}
