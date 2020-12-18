import AttachmentType from '../enums/AttachmentType';

export default interface Attachment {
    name: string;
    description: string;
    url?: string;
    type: AttachmentType;
}
