import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {RouterModule,Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
=======
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import {DataTablesModule} from 'angular-datatables';
>>>>>>> a848f2cb40f4403a93f174d97318970a4bdc6d8e

const routes:Routes=[
{path:'servers',component:ServersComponent},
{path:'dashboard',component:DashboardComponent},
{path:'clients',component:ClientsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RightsidebarComponent,
    DashboardComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
