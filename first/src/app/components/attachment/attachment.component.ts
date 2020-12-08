import { Component, Input, OnInit } from '@angular/core';
import IAttachment from '../../interfaces/IAttachment';

@Component({
  selector: 'app-attachment',
  templateUrl: 'attachment.component.html',
  styleUrls: ['attachment.component.css'],
})
export class AttachmentComponent implements OnInit {
  @Input() attachment!: IAttachment;

  constructor() { }

  ngOnInit(): void {
  }

  alert(attachment: IAttachment) {
    window.alert(JSON.stringify(attachment));
  }
}
