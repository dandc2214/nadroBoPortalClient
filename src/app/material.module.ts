import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatToolbarModule, MatTableModule, MatCardModule, MatPaginatorModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
