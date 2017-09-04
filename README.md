# apiCalculate
### Web Api de uma calculadora em restful desenvolvida em NodeJS

## Introdução
Um simples cliente REST escrito em JS com métodos de cálculos matemáticos.

## Utilização básica
1) Fatorial de um número:

```
	rota: "http://localhost:3000/api/calculadora/v1/fatorial"
	exemplo queryString: "?valor=5";
```

2) Fibonacci de um número:

```
	rota: "http://localhost:3000/api/calculadora/v1/fibonacci"
	exemplo queryString: "?valor=6";
```

3) Potencial de um número:

```
	rota: "http://localhost:3000/api/calculadora/v1/potencial"
	exemplo queryString: "?valor=2&potencia=3";
```

4) Média de um número:

```
	rota: "http://localhost:3000/api/calculadora/v1/media"
	exemplo queryString: "?valor=2,6,8,9";
```

5) Mediana de um número:

```
	rota: "http://localhost:3000/api/calculadora/v1/mediana"
	exemplo queryString: "?valor=5,8,9,5";
```

## Exemplo de Response:

```
{
	operacao: "api/calculadora/v1/media",
	parametro: "5,8,9,5",
	resultado: 6.75
}

```

## Autor
- Aluno: Marcos Aurélio Carreteiro Filho
- Professor: Robson Fernandes
- Universidade Paulista - Campus Bauru
