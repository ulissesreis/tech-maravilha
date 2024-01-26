import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutes } from './home.routing.module';

import { HomeComponent } from './components/home/home.component';
import { ItemListModule } from '../../shared/item-list/item-list.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ItemListModule,
    RouterModule.forChild(HomeRoutes),
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
