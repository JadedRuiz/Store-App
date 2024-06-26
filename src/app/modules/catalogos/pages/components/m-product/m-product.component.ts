import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AngularSvgIconModule } from 'angular-svg-icon';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-m-product',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './m-product.component.html',
  styleUrl: './m-product.component.css'
})
export class MProductComponent {

  constructor(
    public dialogRef: MatDialogRef<MProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
