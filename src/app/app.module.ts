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
import { TypescriptExpressionsComponent } from './typescript-expressions/typescript-expressions.component';
import { PipingComponent } from './piping/piping.component';
import { CustomPipe } from './custom.pipe';
import { BindingComponent } from './binding/binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ConstructorExampleComponent,
    DependencyInjectionComponent,
    NestedComponent,
    InputComponent,
    PersonComponent,
    ClassExpressionsComponent,
    TypescriptExpressionsComponent,
    PipingComponent,
    CustomPipe,
    BindingComponent,
    TwoWayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
