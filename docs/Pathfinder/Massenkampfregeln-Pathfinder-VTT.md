# Massenkampfregeln Pathfinder VTT

## Einheit

Typ = Klasse

## Anforderung

* Angriff und Schaden basieren auf der Klasse und der Anzahl der Kämpfer in der Truppe
* Rüstung, Bewegung und Fähigkeiten entsprechen der Basisklasse

```txt
Bsp.:
Bogenschützen
AC 14 => Die ganze Einheit hat AC 14
BAB +2 => Die ganze Einheit hat BAB +2
Langbogen 1d8 Grundschaden => Die ganze Einheit hat einen Grundschaden von 1d8
```

## Boni

Angriffs- und Schadensboni: Größe der Einheit / 10 (abgerundet)
`Bsp.: Einheit mit 40 Bogenschützen => Angriff +6, Schaden 1d8+4`

## Hitpoints

`Base-Hp * Größe der Einheit / 10 => 2d8*4 ~40 Hp` 

### Überlegung

```txt
attack: 1d20+@character.bab+floor(@character.currentHp/10)
damage: 1d8+floor(@character.currentHp/10)
```

## Moral

Fähigkeiten wie Einschüchtern oder Vortragen können mit einem `DC16` Skillcheck einer Einheit
einen *Moralbonus von +1* auf Angriffs- und Rettungswürfe geben.

Moralwert (DC): Will-Save gegen 10 + Stufe der Einheit + Verschiedenes

## Anführer

* Anführer gibt einen generellen Moralbonus von Stufe/4 auf alles
* Das Leadership-Feat gibt einen zusätzlichen +1 Bonus für alle kontrollierten Einheiten eines Charakters.
* Der Bonus gilt nur, wenn der Anführer bei der Einheit ist.
