import { BrowserModule } from '@angular/platform-browser'; // se encarga de el display de la aplicacion en el browser
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule
  ],
  providers: [DataService], // servicios van en providers
  bootstrap: [AppComponent]
})
export class AppModule { }
