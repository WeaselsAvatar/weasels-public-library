# Roll Table Macros

## Würfel auf einer Roll Table

```js
await game.tables.getName('Table Name').draw(); // ToDo: Change the name of the table
```

## Erzeuge ein Ergebnis aus einer Roll Table

```js
let roll = await game.tables.getName('Table Name').roll(); // ToDo: Change the name of the table
console.log(roll); // Das Ergebnisobjekt
console.log(roll.results[0].text); // Das Ergebnis des ersten Wurfs als String
```
