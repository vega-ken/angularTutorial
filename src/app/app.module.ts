import { BrowserModule } from '@angular/platform-browser'; // se encarga de el display de la aplicacion en el browser
import { NgModule } from '@angular/core';

// cada componente creado tendra que estar aqui
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
