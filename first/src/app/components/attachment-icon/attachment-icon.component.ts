import { Component, Input } from '@angular/core';
import AttachmentEnum from '../../enums/AttachmentEnum';

@Component({
  selector: 'app-attachment-icon',
  templateUrl: 'attachment-icon.component.html',
})
export class AttachmentIconComponent {
  @Input() type!: AttachmentEnum;
  AttachmentEnum = AttachmentEnum;

  constructor() { }

}
