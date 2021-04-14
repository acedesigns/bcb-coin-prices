/* =======================================================
 *
 * Created by anele on 2021/04/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TimeAgoPipe } from "./Pipes/time-ago.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpInterceptorService } from "./interceptors/http-interceptor.service";


@NgModule({
    declarations: [AppComponent, TimeAgoPipe],
    imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    providers: [
        //{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
