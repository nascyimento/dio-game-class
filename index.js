// # 3️⃣ Escrevendo as classes de um Jogo
//
// **O Que deve ser utilizado**
//
// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos
//
// ## Objetivo:
//
// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
//
// 	- nome
// 	- idade
// 	- tipo (ex: guerreiro, mago, monge, ninja )
//
// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
//
// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
//
// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)
//
// ## Saída
//
// Ao final deve se exibir uma mensagem:
//
// 	- "o {tipo} atacou usando {ataque}"
// ex: mago atacou usando magia
// guerreiro atacou usando espada

class Hero {
	constructor(name, age, role) {
		if (this.#roles.indexOf(role) === -1) {
			alert("classe inexistente!")
			this.name = null
			return
		}

		switch (role) {
			case "guerreiro":
				this.attackAction = "espada"
				break
			case "mago":
				this.attackAction = "magia"
				break
			case "monge":
				this.attackAction = "artes marciais"
				break
			case "ninja":
				this.attackAction = "shuriken"
				break
		}

		this.name = name
		this.age = age
		this.role = role
	}

	name;
	age;
	role;
	attackAction
	#roles = ["guerreiro", "mago", "monge", "ninja"]

	attack() {
		alert(`o ${this.role} atacou usando ${this.attackAction}`)
	}
}

(function () {
	let hero, action
	hero = createHero()
	while (true) {
			action = Number(prompt("Escolha uma opção\n1 - Atacar\n2 - Criar outro personagem\n3 - Encerrar"))
			switch (action) {
				case 1:
					hero.attack()
					break
				case 2:
					hero = createHero()
					break
				case 3:
					return
				default:
					alert("Opção inválida")
			}
	}
})()

function createHero() {
	let name, age, role, hero
	name = prompt("Qual é o nome do personagem?")
	age = Number(prompt("Qual é a idade do personagem?"))
	role = prompt("Escolha uma classe para o seu personagem. As classes disponíveis são: guerreiro - mago - monge - ninja")

	hero = new Hero(name, age, role)
	if (hero.name === null) {
		alert("Vamos começar de novo")
		hero = createHero()
	}

	return hero
}