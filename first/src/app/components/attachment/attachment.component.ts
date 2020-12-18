import { Component, Input, OnInit } from '@angular/core';
import Attachment from '../../interfaces/Attachment';

@Component({
  selector: 'app-attachment',
  templateUrl: 'attachment.component.html',
  styleUrls: ['attachment.component.css'],
})
export class AttachmentComponent implements OnInit {
  @Input() attachment!: Attachment;

  constructor() { }

  ngOnInit(): void {
  }

  alert(attachment: Attachment) {
    window.alert(JSON.stringify(attachment));
  }
}
