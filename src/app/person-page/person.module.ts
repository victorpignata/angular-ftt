import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonPageFormComponent } from './person-page-form/person-page-form.component';
import { PersonPageListComponent } from './person-page-list/person-page-list.component';
import { PersonRouting } from './person-routing.module';
import { AppModule } from '../app.module';
import { PersonService } from './person.service';



@NgModule({
  declarations: [PersonPageFormComponent,PersonPageListComponent],
  imports: [
    CommonModule,
    PersonRouting
    
  ],
  providers: [PersonService]
})
export class PersonModule { }
