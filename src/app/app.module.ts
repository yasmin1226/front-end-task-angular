import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './Features/product/product-details/product-details.component';
import { ProductListComponent } from './Features/product/product-list/product-list.component';
import { HeaderComponent } from './Core/header/header.component';
import { FooterComponent } from './Core/footer/footer.component';
import { ProductItemComponent } from './Features/product/product-item/product-item.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { FilterComponent } from './Features/product/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    ProductItemComponent,
    DropdownComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'product-listing', pathMatch: 'full' },

        { path: 'product-listing', component: ProductListComponent },

        { path: 'product-details/:id', component: ProductDetailsComponent },
      ],
      { scrollPositionRestoration: 'top' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
