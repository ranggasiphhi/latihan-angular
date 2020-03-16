import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import {} from '../action'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder,
              private store: Store) {

    this.createForm();
   }

   createForm(){
     this.angForm = this.fb.group({
       name: ['', Validators.required ],
       email: ['', Validators.required]
     });
   }

   addUser(name, email){
     console.log(name, email);
   }

  ngOnInit() {
    this.store.dispatch(new )
  }

}
