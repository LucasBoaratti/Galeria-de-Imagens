import { bootstrapApplication } from '@angular/platform-browser'; //Aqui, é utilizada para iniciar um app Angular moderno baseado em componentes standalones
import { appConfig } from './app/app.config'; //Configurações para configurar rotas, provedores etc. 
import { ComponenteFotos } from './app/Fotos.component'; //Componentes de fotos usado no Fotos.component.ts

bootstrapApplication(ComponenteFotos, appConfig)
  .catch((err) => console.error(err));
