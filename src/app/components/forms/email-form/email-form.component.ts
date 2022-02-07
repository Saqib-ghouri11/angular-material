import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Consts } from 'src/app/classes/consts';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  emailSent=false;

  constructor(private httpSevice:HttpService,private fb:FormBuilder,private _snackBar: MatSnackBar) { }

  emailFormGroup=this.fb.group({
    to:['',[Validators.required]],
    subject:[''],
    content:['']
  });

  onSubmit(){
    console.log(this.emailFormGroup.value);
    this.emailSent=true;
    this.httpSevice.postMail(Consts.BASE_URL+Consts.POST_MAIL,this.emailFormGroup.value).subscribe(
      resp=>{
        console.log(resp);
        this._snackBar.open("Sent Successfully...","OK");
        this.emailSent=false;
       
      },
      error=>{
        console.log(error);
        this._snackBar.open("Cannot send due to error...","OK");
        this.emailSent=false;
      }
      );
      
  }

  ngOnInit(): void {
  }

}
