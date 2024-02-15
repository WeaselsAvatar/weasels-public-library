# Sending Messages

## Schicke eine Nachricht als ein bestimmter Actor

```js
// Send chat message emote as a given actor
let actr = game.actors.getName('ACTOR_NAME');  // ToDo: Change the name of the actor to whoever you want to call
let spkr = ChatMessage.getSpeaker({ actor:actr });
ChatMessage.create({
  speaker: spkr,
  content: "MESSAGE_TEXT",
  type: CONST.CHAT_MESSAGE_TYPES.EMOTE
},
{ chatBubble: true });
```

## Schicke das Ergebnis einer Roll Table als In-Character Message

```js
// Schicke eine Nachricht als ein fester Charakter
let roll = await game.tables.getName('John Steel Armor Taunts').roll();  // ToDo: Change the name of the table to whatever you want to call
let actr = game.actors.getName('John Steel');
let spkr = ChatMessage.getSpeaker({ actor:actr });
ChatMessage.create({
  speaker:spkr,
  content:roll.results[0].text,
  type:CONST.CHAT_MESSAGE_TYPES.IC
},
{ chatBubble: true });
```

```js
// Schicke eine Nachricht als ein selektiertes Token
let roll = await game.tables.getName('NPC Combat Taunts').roll(); // ToDo: Change the name of the table to whatever you want to call
let tkn = canvas.tokens.controlled[0];
let spkr = ChatMessage.getSpeaker({ token:tkn });
ChatMessage.create({
  speaker:spkr,
  content:roll.results[0].text,
  type:CONST.CHAT_MESSAGE_TYPES.IC
},
{ chatBubble: true });
```
