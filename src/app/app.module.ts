import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CropperComponent } from './cropper/cropper.component';
import { ModificationInputComponent } from './modification-input/modification-input.component';
import { FormTestingComponent } from './form-testing/form-testing.component';

import { FormsModule, ReactiveFormsModule} from'@angular/forms';
// import { CobangxsComponent } from './cobangxs/cobangxs.component';

import { NgxsModule } from '@ngxs/store';
import { CreateComponent } from './cobangxs/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CropperComponent,
    ModificationInputComponent,
    FormTestingComponent,
    CreateComponent,
    // CobangxsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    [NgxsModule.forRoot()]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
