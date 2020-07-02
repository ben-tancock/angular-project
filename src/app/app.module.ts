import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ConstructorExampleComponent } from './constructor-example/constructor-example.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { NestedComponent } from './nested/nested.component';
import { InputComponent } from './input/input.component';
import { PersonComponent } from './person/person.component';
import { ClassExpressionsComponent } from './class-expressions/class-expressions.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ConstructorExampleComponent,
    DependencyInjectionComponent,
    NestedComponent,
    InputComponent,
    PersonComponent,
    ClassExpressionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
