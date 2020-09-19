import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
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
    NzPageHeaderModule,
    NzInputModule,
    FormsModule,
    NzMenuModule,
    NzIconModule
  ]
})
export class HeaderModule { }
