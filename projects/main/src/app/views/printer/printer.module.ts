import { MaterialModule } from '../material.module';
import { PrinterComponent } from './printer.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PrinterComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [PrinterComponent],
})
export class PrinterModule {}
