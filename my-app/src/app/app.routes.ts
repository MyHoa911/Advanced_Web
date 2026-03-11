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
import { Ex27 } from './ex27/ex27';
import { Ex28 } from './ex28/ex28';
import { Form } from './form/form';
import { ReactiveForm } from './reactive-form/reactive-form';
import { BookDetail } from './book-detail/book-detail';
import { FileUpload } from './file-upload/file-upload';
import { Books } from './books/books';
import { Ex50 } from './ex50/ex50';
import { BookUpdate } from './book-update/book-update';
import { Fashion } from './fashion/fashion';
import { FashionDetail } from './fashion-detail/fashion-detail';
import { MomoPayment } from './momo-payment/momo-payment';
import { Login } from './login/login';
import { Register } from './register/register';
import { AuthGuard } from './guards/auth-guard';
import { Ex58 } from './ex58/ex58';
import { Ex58ClientList } from './ex58/ex58-client-list/ex58-client-list';
import { Ex58ClientDetail } from './ex58/ex58-client-detail/ex58-client-detail';
import { Ex58AdminList } from './ex58/ex58-admin-list/ex58-admin-list';
import { Ex58AdminForm } from './ex58/ex58-admin-form/ex58-admin-form';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full' },
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
    {path:"ex27",component:Ex27},
    {path:"ex28",component:Ex28},
    {path:"e39",component:Books},
    {path:"ex41",component:BookDetail},
    {path:"ex41/:id",component:BookDetail},
    // {path:"ex43",component:NewBook},
    {path:"ex45",component:BookUpdate},
    {path:"ex45/:id",component:BookUpdate},
    {path:"ex49",component:FileUpload},
    {path:"ex50", component:Ex50},
    {path:"ex53", component:Fashion, canActivate:[AuthGuard]},
    {path:"ex53/:id", component:FashionDetail, canActivate:[AuthGuard]},
    {
      path: "ex58",
      component: Ex58,
      children: [
        { path: '', component: Ex58ClientList, pathMatch: 'full' },
        { path: 'detail/:id', component: Ex58ClientDetail },
        { path: 'admin', component: Ex58AdminList },
        { path: 'admin/new', component: Ex58AdminForm },
        { path: 'admin/edit/:id', component: Ex58AdminForm },
      ]
    },
    {path:'product',component:Product},
    {path:'list-product',component:ListProduct},
    {path:'service-product',component:ServiceProduct},
    {path:"form", component:Form},
    {path:"reactive", component: ReactiveForm},
    {path:"momo-payment", component: MomoPayment},
    { path:"login", component: Login},
    { path:"register", component: Register},
    {path:"**", component: Notfound},
    
];

export const RoutingComponent=[
    Product,
    ListProduct,
    ServiceProduct,
    Books,
    BookDetail,
]
