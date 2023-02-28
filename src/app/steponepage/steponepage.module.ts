import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteponepageComponent } from './steponepage.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { steponeroutes } from './stepone.routing';
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    SteponepageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    RouterModule.forChild(steponeroutes)
  ]
})
export class SteponepageModule { }
