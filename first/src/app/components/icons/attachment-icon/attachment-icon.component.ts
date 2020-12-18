import { Component, Input } from '@angular/core';
import AttachmentType from '../../../enums/AttachmentType';

@Component({
  selector: 'app-attachment-icon',
  templateUrl: 'attachment-icon.component.html',
})
export class AttachmentIconComponent {
  @Input() type!: AttachmentType;
  AttachmentEnum = AttachmentType;

  constructor() { }

}
