import { Component, OnInit } from "@angular/core"; //Criação de um componente no Angular (Component) e a tilização para a utilização do hook de ciclo de vida (OnInit)
import { HttpClient } from "@angular/common/http"; //Permite fazer requisições HTTP (HttpClient)
import { HttpClientModule } from "@angular/common/http"; //Permite que o componente faça requisições HTTP (Necessário importar, caso queira utilizar o HttpClient)
import { CommonModule } from "@angular/common"; //Traz recursos básicos do Angular, como as diretivas estruturais *ngIf, *ngFor etc. (CommonModule)

@Component({
	selector: "app-root", //Tag HTML que representa o componente (verifique o body do index.html)
	standalone: true, //Deixando o componente independente, para não depender de módulos do Angular tradicionais (NgModule)
	imports: [ //Importando os módulos para habilitar as funcionalidades dentro do componente
		CommonModule,
		HttpClientModule,
	],
	templateUrl: "./Fotos.component.html", //Caminho do arquivo HTML do componente
	styleUrls: ["./Fotos.component.css"], //Caminho para o CSS (pode adicionar mais, no futuro)
})

export class ComponenteFotos implements OnInit {
	fotos: any[] = []; //Guardando as fotos recebidas da API em uma lista
	fotoSelecionada: any = null; //Guardando a foto selecionada para mostrar no modal

	constructor(private http: HttpClient) {} //Injetando o serviço HttpClient para fazer a requisição HTTP

	ngOnInit() { //Método que roda o componente assim que o componente inicia
		this.http.get<any[]>('https://picsum.photos/v2/list?page=1&limit=50') //Realizando uma requisição GET para a API
			.subscribe(data => { //Aguarda o retorno da API (.subscribe)
				this.fotos = data; //Atribui a resposta na variável fotos
			});
	}

	openModal(foto: any) { //Atribuindo a foto para a variável fotoSelecionada e abrindo o modal
		this.fotoSelecionada = foto;
	}

	closeModal() { //Fechando o modal e colocando a variável fotoSelecionada como nula
		this.fotoSelecionada = null;
	}
}