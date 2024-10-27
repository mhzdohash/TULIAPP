import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'pagina-tuli',
    loadChildren: () => import('./pagina-tuli/pagina-tuli.module').then( m => m.PaginaTuliPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'cadastro-cliente',
    loadChildren: () => import('./cadastro-cliente/cadastro-cliente.module').then( m => m.CadastroClientePageModule)
  },
  {
    path: 'cadastro-especialista',
    loadChildren: () => import('./cadastro-especialista/cadastro-especialista.module').then( m => m.CadastroEspecialistaPageModule)
  },
  {
    path: 'registro-emec',
    loadChildren: () => import('./registro-emec/registro-emec.module').then( m => m.RegistroEmecPageModule)
  },
  {
    path: 'home-cliente',
    loadChildren: () => import('./home-cliente/home-cliente.module').then( m => m.HomeClientePageModule)
  },
  {
    path: 'home-especialista',
    loadChildren: () => import('./home-especialista/home-especialista.module').then( m => m.HomeEspecialistaPageModule)
  },
  {
    path: 'especialista-calendario',
    loadChildren: () => import('./especialista-calendario/especialista-calendario.module').then( m => m.EspecialistaCalendarioPageModule)
  },
  {
    path: 'detalhe-dia',
    loadChildren: () => import('./detalhe-dia/detalhe-dia.module').then(m => m.DetalheDiaPageModule)
  },  {
    path: 'especialista-chat',
    loadChildren: () => import('./especialista-chat/especialista-chat.module').then( m => m.EspecialistaChatPageModule)
  },
  {
    path: 'especialista-conversa',
    loadChildren: () => import('./especialista-conversa/especialista-conversa.module').then( m => m.EspecialistaConversaPageModule)
  },
  {
    path: 'especialista-perfil',
    loadChildren: () => import('./especialista-perfil/especialista-perfil.module').then( m => m.EspecialistaPerfilPageModule)
  },
  {
    path: 'especialista-editar-perfil',
    loadChildren: () => import('./especialista-editar-perfil/especialista-editar-perfil.module').then( m => m.EspecialistaEditarPerfilPageModule)
  },
  {
    path: 'cliente-casa',
    loadChildren: () => import('./cliente-casa/cliente-casa.module').then( m => m.ClienteCasaPageModule)
  },
  {
    path: 'cliente-chat',
    loadChildren: () => import('./cliente-chat/cliente-chat.module').then( m => m.ClienteChatPageModule)
  },
  {
    path: 'cliente-conversa',
    loadChildren: () => import('./cliente-conversa/cliente-conversa.module').then( m => m.ClienteConversaPageModule)
  },
  {
    path: 'cliente-produtos',
    loadChildren: () => import('./cliente-produtos/cliente-produtos.module').then( m => m.ClienteProdutosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
