import { Component, OnInit } from '@angular/core';
import { AllAttachmentsService } from '../../services/all-attachments.service';
import { Observable } from 'rxjs';
import IAttachment from '../../interfaces/IAttachment';

@Component({
  selector: 'app-all-attachments',
  templateUrl: './all-attachments.component.html',
  styleUrls: ['./all-attachments.component.css']
})
export class AllAttachmentsComponent implements OnInit {
  attachments$ = new Observable<IAttachment[] | {error: number}>();

  constructor(public allAttachments: AllAttachmentsService) { }

  ngOnInit() {
    this.attachments$ = this.allAttachments.getAll();
  }

}
