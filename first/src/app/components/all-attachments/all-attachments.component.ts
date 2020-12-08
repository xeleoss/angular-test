import { Component, OnInit } from '@angular/core';
import { AllAttachmentsService } from '../../services/all-attachments.service';
import { BehaviorSubject } from 'rxjs';
import IAttachment from '../../interfaces/IAttachment';

@Component({
  selector: 'app-all-attachments',
  templateUrl: './all-attachments.component.html',
  styleUrls: ['./all-attachments.component.css']
})
export class AllAttachmentsComponent implements OnInit {
  attachments$ = new BehaviorSubject<IAttachment[] | undefined | null>(undefined);

  constructor(public allAttachments: AllAttachmentsService) { }

  ngOnInit() {
    this.allAttachments.getAll().subscribe(
        attachments => this.attachments$.next(attachments),
        error => this.attachments$.next(null)
    );
  }

}
