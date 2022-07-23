import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = "";
  @Input() type: "dark" | "light" | "outline" | "text" = "light";
  @Input() icon: string = "";
  @Input() size: "large" | "medium" | "small" = "large";

  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onClicked(): void {
    this.clicked.emit();
  }

}
