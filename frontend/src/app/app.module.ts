import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
@NgModule({
    imports: [
        BrowserModule,
    ],
    providers: [
        provideHttpClient()
    ],

})
export class AppModule { }