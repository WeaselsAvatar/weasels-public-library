// Uses the 'Npc Combat Taunts' table for results (see 'rolltables' folder)

let roll = await game.tables.getName('NPC Combat Taunts').roll();
let tkn = canvas.tokens.controlled[0];
let spkr = ChatMessage.getSpeaker({ actor:tkn.Actor });
ChatMessage.create({
  speaker:spkr,
  content:roll.results[0].text,
  type:CONST.CHAT_MESSAGE_TYPES.IC
},
{ chatBubble: true });