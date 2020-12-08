import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import IAttachment from '../interfaces/IAttachment';
import AttachmentEnum from '../enums/AttachmentEnum';

@Injectable({
    providedIn: 'root',
})
export class AllAttachmentsService {
    attachments: IAttachment[] = [{
        name: 'Фото_прилавка_2.jpg',
        description: 'Объем продаж овощей',
        url: `${window.location.href}assets/static/all-attachments/photo1.png`,
        type: AttachmentEnum.Task,
    }, {
        name: 'Список объектов.xls',
        description: 'Летние акции',
        url: `${window.location.href}assets/static/all-attachments/magnit.png`,
        type: AttachmentEnum.Task,
    },{
        name: 'Отчет_ФПС_1.const',
        description: 'Остатки по бананам',
        url: `${window.location.href}assets/static/all-attachments/report.png`,
        type: AttachmentEnum.Task,
    }, {
        name: 'Фото_бананов.jpg',
        description: 'Объем продаж овощей',
        url: `${window.location.href}assets/static/all-attachments/banans.png`,
        type: AttachmentEnum.Task,
    }];

    constructor() {
    }

    getAll(): Observable<IAttachment[]> {
        return of(this.attachments);
    }
}
