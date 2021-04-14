/* =======================================================
 *
 * Created by anele on 2021/04/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Logger } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway, OnGatewayInit, WsResponse, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from "socket.io";


@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {


    private logger: Logger = new Logger("App Gateway Logger", true);

    @WebSocketServer() wss: Server;

    afterInit(server: any) {
      this.logger.log("Initialised");
      //throw new Error('Method not implemented.');
    }

    handleDisconnect(client: any) {
      throw new Error('Method not implemented.');
    }

    handleConnection(client: any, ...args: any[]) {
      throw new Error('Method not implemented.');
    }

    @SubscribeMessage('message')
    handleMessage(client: Socket, payload: any): WsResponse<string> {
        return { event: 'msgToClient', data: 'Hello world!'};
    }
}
