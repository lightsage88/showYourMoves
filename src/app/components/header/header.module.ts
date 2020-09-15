import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { HeaderComponent } from './header.component'

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NzAutocompleteModule,
    NzInputModule,
    NzMenuModule,
    NzIconModule
  ]
})
export class HeaderModule { }
