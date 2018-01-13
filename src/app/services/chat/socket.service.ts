import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Message } from '../../classes/message';
import { Event } from '../../classes/event';

import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:8081';

@Injectable()
export class SocketService {
  private socket;

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public send(message: Message): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }

  constructor() { }

}