import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ////AQUI SE CAMBIA LO DE LA BARRA LATERAL
    ngOnInit() {
        this.model = [
            {
                label: 'Administración',
                items: [
                    { label: 'Admin', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] },
                    { label: 'Perfil', icon: 'pi pi-fw pi-home', routerLink: ['/admin/perfil'] },
                ]
            },
            {
                label: 'Inventario',
                items: [
                    { label: 'Categoria', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Producto', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                ]
            },
            {
                label: 'Pedidos',
                items: [
                    { label: 'Lista Pedidos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/pedido'], badge: 'NEW' },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'], badge: 'NEW' },
                    { label: 'Clientes', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/cliente'], badge: 'NEW' },

                ]
            },
            {
                label: 'Roles y Usuario',
                items: [
                    { label: 'Usuario', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
                    { label: 'Roles', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ]
            },
        ];
    }
}
