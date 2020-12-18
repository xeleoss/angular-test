import { Component, OnInit } from '@angular/core';
import { AllAttachmentsService } from '../../services/all-attachments.service';
import { Observable } from 'rxjs';
import Attachment from '../../interfaces/Attachment';
import RequestDto from '../../interfaces/RequestDto';

@Component({
  selector: 'app-all-attachments',
  templateUrl: './all-attachments.component.html',
  styleUrls: ['./all-attachments.component.css']
})
export class AllAttachmentsComponent implements OnInit {
  attachments$ = new Observable<RequestDto<Attachment[]>>();

  constructor(public allAttachments: AllAttachmentsService) { }

  ngOnInit() {
    this.attachments$ = this.allAttachments.getAll();
  }

}
