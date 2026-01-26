import { Routes } from '@angular/router';
import { About } from './about/about';
import { Listcustomer } from './listcustomer/listcustomer';
import { Listcustomer2 } from './listcustomer2/listcustomer2';
import { Listcustomer3 } from './listcustomer3/listcustomer3';
import { Notfound } from './notfound/notfound';
import { Listproduct } from './listproduct/listproduct';
import { Productdetail } from './productdetail/productdetail';
import { FakeProduct } from './fake-product/fake-product';
import { ServiceProductImageEvent } from './ex13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './ex13/service-product-image-event-detail/service-product-image-event-detail';
import { Ex18 } from './ex18/ex18';
import { Ex19 } from './ex19/ex19';
import { Product } from './ex19/product/product';
import { ListProduct } from './ex19/list-product/list-product';
import { ServiceProduct } from './ex19/service-product/service-product';

export const routes: Routes = [
    {path:"gioi-thieu", component: About},
    {path:"khach-hang-1", component: Listcustomer},
    {path:"khach-hang-2", component: Listcustomer2},
    {path:"khach-hang-3", component: Listcustomer3},
    {path:"san-pham-1", component: Listproduct},
    {path:"san-pham-1/:p_id", component: Productdetail},
    {path:'service-product-image-event', component:ServiceProductImageEvent},
    {path:'service-product-image-event/:id', component:ServiceProductImageEventDetail},
    {path:"ex18", component:Ex18},
    {path:"ex19", component:Ex19},
    {path:"ex26",component:FakeProduct},
    {path:'product',component:Product},
    {path:'list-product',component:ListProduct},
    {path:'service-product',component:ServiceProduct},

    {path:"**", component: Notfound}
];

export const RoutingComponent=[
    Product,
    ListProduct,
    ServiceProduct,
]
