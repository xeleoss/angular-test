import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Attachment from '../interfaces/Attachment';
import AttachmentType from '../enums/AttachmentType';
import { delay, map } from 'rxjs/operators';
import RequestDto from '../interfaces/RequestDto';

@Injectable({
    providedIn: 'root',
})
export class AllAttachmentsService {
    attachments: Attachment[] = [{
        name: 'Фото_прилавка_2.jpg',
        description: 'Объем продаж овощей',
        url: `${window.location.href}assets/static/all-attachments/photo1.png`,
        type: AttachmentType.Task,
    }, {
        name: 'Список объектов.xls',
        description: 'Летние акции',
        url: `${window.location.href}assets/static/all-attachments/magnit.png`,
        type: AttachmentType.Task,
    }, {
        name: 'Отчет_ФПС_1.const',
        description: 'Остатки по бананам',
        url: `${window.location.href}assets/static/all-attachments/report.png`,
        type: AttachmentType.Task,
    }, {
        name: 'Фото_бананов.jpg',
        description: 'Объем продаж овощей',
        url: `${window.location.href}assets/static/all-attachments/banans.png`,
        type: AttachmentType.Task,
    }, {
        name: 'Отчет_ФПС_1.const',
        description: 'Остатки по бананам',
        url: `${window.location.href}assets/static/all-attachments/report.png`,
        type: AttachmentType.Task,
    }, {
        name: 'Список объектов.xls',
        description: 'Летние акции',
        url: `${window.location.href}assets/static/all-attachments/magnit.png`,
        type: AttachmentType.Task,
    }, {
        name: 'Касса 25RT2008.svg',
        description: 'Касса не работает',
        type: AttachmentType.Request,
    }, {
        name: 'Фото_хлеб_1.jpg',
        description: 'Объем продаж хлеба',
        url: `${window.location.href}assets/static/all-attachments/bread.png`,

        type: AttachmentType.Task,
    }, {
        name: 'Фото_прилавка_2.jpg',
        description: 'Объем продаж овощей',
        url: `${window.location.href}assets/static/all-attachments/photo1.png`,
        type: AttachmentType.Task,
    }, {
        name: 'Список объектов.xls',
        description: 'Летние акции',
        url: `${window.location.href}assets/static/all-attachments/magnit.png`,
        type: AttachmentType.Task,
    }, {
        name: 'Отчет_ФПС_1.const',
        description: 'Остатки по бананам',
        url: `${window.location.href}assets/static/all-attachments/report.png`,
        type: AttachmentType.Task,
    }, {
        name: 'Фото_бананов.jpg',
        description: 'Объем продаж овощей',
        url: `${window.location.href}assets/static/all-attachments/banans.png`,
        type: AttachmentType.Task,
    }, {
        name: 'Отчет_ФПС_1.const',
        description: 'Остатки по бананам',
        url: `${window.location.href}assets/static/all-attachments/report.png`,
        type: AttachmentType.Task,
    }, {
        name: 'Список объектов.xls',
        description: 'Летние акции',
        url: `${window.location.href}assets/static/all-attachments/magnit.png`,
        type: AttachmentType.Task,
    }, {
        name: 'Касса 25RT2008.svg',
        description: 'Касса не работает',
        type: AttachmentType.Request,
    }, {
        name: 'Фото_хлеб_1.jpg',
        description: 'Объем продаж хлеба',
        url: `${window.location.href}assets/static/all-attachments/bread.png`,
        type: AttachmentType.Task,
    }];

    constructor() {}

    getAll(): Observable<RequestDto<Attachment[]>> {
        return of(this.attachments).pipe(
            delay(1000),
            map(value => {
                if (Math.random() > 0.8) return {error: 1, payload: []};
                return {error: 0, payload: value};
            }),
        );
    }
}
