import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./compartido/header/header.component";
import { FooterComponent } from "./compartido/footer/footer.component";
import { PrincipalComponent } from "./secciones/principal/principal.component";
import { DestacadosComponent } from "./secciones/destacados/destacados.component";
import { ViviendasComponent } from "./secciones/viviendas/viviendas.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    DestacadosComponent,
    ViviendasComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
