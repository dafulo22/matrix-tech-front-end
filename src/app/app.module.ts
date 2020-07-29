import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { DirectorService } from './director/director.service';
import { ProducerService } from './producer/producer.service';
import { HeroService } from './hero/hero.service';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { DirectorComponent } from './director/director.component';
import { ProducerComponent } from './producer/producer.component';
import { HeroComponent } from './hero/hero.component'

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent},
  {path: 'director', component: DirectorComponent},
  {path: 'producer', component: ProducerComponent},
  {path: 'hero', component: HeroComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    FormComponent,
    DirectorComponent,
    ProducerComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ClienteService,
    DirectorService,
    ProducerService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
