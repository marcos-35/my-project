import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './pages/main-page.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DbzComponent, ListadoComponent, AddCharacterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[DbzComponent]
})
export class MainPageModule { }
