import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';

@NgModule({
  declarations: [BottomNavbarComponent],
  imports: [CommonModule],
  exports: [BottomNavbarComponent],
})
export class CommonComponentsModule {}
