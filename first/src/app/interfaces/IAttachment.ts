import AttachmentEnum from '../enums/AttachmentEnum';

export default interface IAttachment {
    name: string;
    description: string;
    url: string;
    type: AttachmentEnum;
}
