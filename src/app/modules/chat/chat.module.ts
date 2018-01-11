import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';

import { ChatComponent } from './components/chat/chat.component';
import { DialogUserComponent } from './components/dialog-user/dialog-user.component';

import { SocketService } from './services/socket.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [ChatComponent, DialogUserComponent],
  providers: [SocketService],
  exports: [ChatComponent, DialogUserComponent],
  entryComponents: [DialogUserComponent]
})
export class ChatModule { }
