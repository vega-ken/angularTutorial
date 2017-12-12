import { BrowserModule } from '@angular/platform-browser'; // se encarga de el display de la aplicacion en el browser
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// cada componente creado tendra que estar aqui
import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component'; // cuando sean varios componentes /components/sandbox/sandbox.component
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent // componentes van en declarations
  ],
  imports: [
    BrowserModule, // modulos van en imports
    FormsModule,
    HttpModule
  ],
  providers: [DataService], // servicios van en providers
  bootstrap: [AppComponent]
})
export class AppModule { }
