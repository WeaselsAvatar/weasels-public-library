## Würfel auf einer Roll Table
```js
await game.tables.getName('Table Name').draw();
```

## Erzeuge ein Ergebnis aus einer Roll Table
```js
let roll = await game.tables.getName('Table Name').roll();
console.log(roll); // Das Ergebnisobjekt
console.log(roll.results[0].text); // Das Ergebnis des ersten Wurfs als String
```
