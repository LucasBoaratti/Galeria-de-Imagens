import { bootstrapApplication } from '@angular/platform-browser'; //Aqui, é utilizada para iniciar um app Angular moderno baseado em componentes standalones
import { appConfig } from './app/app.config'; //Configurações para configurar rotas, provedores etc. 
import { ComponenteGatos } from './app/Gatos.component'; //Componentes de fotos usado no Fotos.component.ts

bootstrapApplication(ComponenteGatos, appConfig)
  .catch((err) => console.error(err));
