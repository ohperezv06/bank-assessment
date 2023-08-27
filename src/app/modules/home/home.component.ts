import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {IProduct} from "../../commons/entities/products.entities";
import {Observable} from "rxjs";
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public products: IProduct[] = [];
  // @ts-ignore
  public formHome: FormGroup;
  constructor(private productService: ProductService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((response: IProduct[]) => {
      console.log(response);
      this.products = response;
    });
    this._initForm();
  }

  get searchTerm(): AbstractControl {
    return this.formHome.get('searchTerm') as AbstractControl;
  }
  get products$(): Observable<IProduct[]> {
    return this.productService.getProducts();
  }

  private _initForm(): void {
    this.formHome = this.fb.group({
      searchTerm: ['']
    });
  }
}
