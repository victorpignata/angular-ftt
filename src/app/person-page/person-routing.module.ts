import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonPageListComponent } from './person-page-list/person-page-list.component';
import { PersonPageFormComponent } from './person-page-form/person-page-form.component';



const routes: Routes = [
    {
        path: '',
        component:PersonPageListComponent
    },
    {
        path: '/novopessoa',
        component:PersonPageFormComponent
    },
    {
        path: '/alterar/:id',
        component:PersonPageFormComponent
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRouting { }
