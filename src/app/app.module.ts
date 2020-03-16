import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CropperComponent } from './cropper/cropper.component';
import { ModificationInputComponent } from './modification-input/modification-input.component';
import { FormTestingComponent } from './form-testing/form-testing.component';

import { FormsModule, ReactiveFormsModule} from'@angular/forms';

import { NgxsModule } from '@ngxs/store';
import { CreateComponent } from './cobangxs/create/create.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HttpClientModule } from '@angular/common/http';
import { UserState } from './cobangxs/create/state/user.state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CropperComponent,
    ModificationInputComponent,
    FormTestingComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgxsModule.forRoot([
      UserState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
