import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RidesPage } from './rides.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: RidesPage,
    children: [
      {
        path: 'rides-available',
        children: [
          {
            path: '',
            loadChildren: './rides-available/rides-available.module#RidesAvailablePageModule'
          },
          {
            path: ':rideId',
            loadChildren:
              './rides-available/ride-detail/ride-detail.module#RideDetailPageModule'
          }
        ]
      },
      {
        path: 'rides-requested',
        children: [
          {
            path: '',
            loadChildren: './rides-requested/rides-requested.module#RidesRequestedPageModule'
          },
          {
            path: 'new',
            loadChildren:
              './rides-requested/request-ride/request-ride.module#RequestRidePageModule'
          }
        ]
      },{
        path:'add-ride',
        children:[{
          path:'',
          loadChildren:
          './rides-available/add-ride/add-ride.module#AddRidePageModule'
        }]
      },
      {
        path:'request-ride',
        children:[{
          path:'',
          loadChildren:
          './rides-requested/request-ride/request-ride.module#RequestRidePageModule'
        }]
      },
      {
        path: '',
        redirectTo: '/rides/tabs/rides-available',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/rides/tabs/rides-available',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RidesRoutingModule {}
