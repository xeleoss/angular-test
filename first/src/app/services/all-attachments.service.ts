import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import IAttachment from '../interfaces/IAttachment';
import AttachmentEnum from '../enums/AttachmentEnum';
import { delay, map } from 'rxjs/operators';
import IRequestDto from '../interfaces/IRequestDto';

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
    }, {
        name: 'Отчет_ФПС_1.const',
        description: 'Остатки по бананам',
        url: `${window.location.href}assets/static/all-attachments/report.png`,
        type: AttachmentEnum.Task,
    }, {
        name: 'Фото_бананов.jpg',
        description: 'Объем продаж овощей',
        url: `${window.location.href}assets/static/all-attachments/banans.png`,
        type: AttachmentEnum.Task,
    }, {
        name: 'Отчет_ФПС_1.const',
        description: 'Остатки по бананам',
        url: `${window.location.href}assets/static/all-attachments/report.png`,
        type: AttachmentEnum.Task,
    }, {
        name: 'Список объектов.xls',
        description: 'Летние акции',
        url: `${window.location.href}assets/static/all-attachments/magnit.png`,
        type: AttachmentEnum.Task,
    }, {
        name: 'Касса 25RT2008.svg',
        description: 'Касса не работает',
        type: AttachmentEnum.Request,
    }, {
        name: 'Фото_хлеб_1.jpg',
        description: 'Объем продаж хлеба',
        url: `${window.location.href}assets/static/all-attachments/bread.png`,

        type: AttachmentEnum.Task,
    }, {
        name: 'Фото_прилавка_2.jpg',
        description: 'Объем продаж овощей',
        url: `${window.location.href}assets/static/all-attachments/photo1.png`,
        type: AttachmentEnum.Task,
    }, {
        name: 'Список объектов.xls',
        description: 'Летние акции',
        url: `${window.location.href}assets/static/all-attachments/magnit.png`,
        type: AttachmentEnum.Task,
    }, {
        name: 'Отчет_ФПС_1.const',
        description: 'Остатки по бананам',
        url: `${window.location.href}assets/static/all-attachments/report.png`,
        type: AttachmentEnum.Task,
    }, {
        name: 'Фото_бананов.jpg',
        description: 'Объем продаж овощей',
        url: `${window.location.href}assets/static/all-attachments/banans.png`,
        type: AttachmentEnum.Task,
    }, {
        name: 'Отчет_ФПС_1.const',
        description: 'Остатки по бананам',
        url: `${window.location.href}assets/static/all-attachments/report.png`,
        type: AttachmentEnum.Task,
    }, {
        name: 'Список объектов.xls',
        description: 'Летние акции',
        url: `${window.location.href}assets/static/all-attachments/magnit.png`,
        type: AttachmentEnum.Task,
    }, {
        name: 'Касса 25RT2008.svg',
        description: 'Касса не работает',
        type: AttachmentEnum.Request,
    }, {
        name: 'Фото_хлеб_1.jpg',
        description: 'Объем продаж хлеба',
        url: `${window.location.href}assets/static/all-attachments/bread.png`,
        type: AttachmentEnum.Task,
    }];

    constructor() {}

    getAll(): Observable<IRequestDto<IAttachment[]>> {
        return of(this.attachments).pipe(
            delay(1000),
            map(value => {
                if (Math.random() > 0.8) return {error: 1, payload: []};
                return {error: 0, payload: value};
            }),
        );
    }
}
