import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HCPModuleComponent } from './hcp-module.component';
import { HCPRoutingModule } from './hcp-routing.module';

@NgModule({
  declarations: [HCPModuleComponent],
  imports: [CommonModule, HCPRoutingModule],
})
export class HCPModule {}
