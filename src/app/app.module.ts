import { BrowserModule } from '@angular/platform-browser'; // se encarga de el display de la aplicacion en el browser
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// cada componente creado tendra que estar aqui
import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component'; // cuando sean varios componentes /components/sandbox/sandbox.component


@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
