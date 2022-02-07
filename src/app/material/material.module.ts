import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { BidiModule } from '@angular/cdk/bidi';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';



const MaterialComponents=[
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
  MatFormFieldModule,
  BidiModule,
  MatInputModule,
  MatSnackBarModule,
]

@NgModule({
  
  imports: [
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
