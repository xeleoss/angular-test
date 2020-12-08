import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AllAttachmentsComponent } from './components/all-attachments/all-attachments.component';
import { AttachmentComponent } from './components/attachment/attachment.component';
import { AttachmentIconComponent } from './components/icons/attachment-icon/attachment-icon.component';
import { DocIconComponent } from './components/icons/doc-icon/doc-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    AllAttachmentsComponent,
    AttachmentComponent,
    AttachmentIconComponent,
    DocIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
