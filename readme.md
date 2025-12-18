# Загрузка матчей

**URL для загрузки массивов матчей**

https://feed.ajaxfeed.com/feeds/washington_capitals.json


## Описание полей объекта матча (использованных в этом виджете)

```js
{
  "sport_type_id": 2,
  "sport_type_title": "Хоккей",
  "topic_id": 11781,
  "topic": "НХЛ. Регулярный сезон",
  "event_id": 60930986,
  "event_title": "Вашингтон - Торонто",
  "team1_id": 527655,
  "team1": "Вашингтон", // название команды 1
  "team2_id": 496523,
  "team2": "Торонто", // название команды 1
  "start_date2": "2025-12-19T03:00:00", // дата матчей
  "start_date3": "2025-12-19T03:00:00", 
  "start_date_timestamp": 1766102400,
  "place": "line",
  "score": "",
  "timer": "",
  "overtime": false,
  "translation": false,
  "1x2": true,
  "url": "", // ссылка на матч
  "url_mobile": "",
  "outcome_1": {
    "@attributes": {
      "bet_block_id": 120,
      "bet_block_title": "Исходы",
      "bet_title": "",
      "outcome_title": "1",
      "factor_id": 921,
      "factor_value": "2.02" // кэф команды 1 
    }
  },
  "outcome_2": {
    "@attributes": {
      "bet_block_id": 120,
      "bet_block_title": "Исходы",
      "bet_title": "",
      "outcome_title": "X",
      "factor_id": 922,
      "factor_value": "4.30" // кэф ничья
    }
  },
  "outcome_3": {
    "@attributes": {
      "bet_block_id": 120,
      "bet_block_title": "Исходы",
      "bet_title": "",
      "outcome_title": "2",
      "factor_id": 923,
      "factor_value": "3.10" // кэф команды 1 
    }
  }
  ...
}

```

## Загрузка логотипов

**Для загрузки логотип нужно**

- собрать все team_id
- получить актуальный путь для запроса логотипа и актуальный статический путь размещения из https://fon.bet/urls.json
- сделать запрос
- сгенерировать абсолютные пути для каждого логотипа


### Документация по загрузке логотипов

[doc-api-logo.md](./doc-api-logo.md)


### Модуль для загрузки логотипов

Можно использовать модуль —[logos.js](./logos.js.zip)

```ts
// IFFE модуль, доступен глобально по window.jsLogos

interface events = {
  team1_id: number
  team2_id: number
  ...
}

interface logoTeams = {
  [key: number /* team_id */]: string /* url логотипа */
}

async window.jsLogos.init(events: events[]): logoTeams 

// Для использования вызвать ассинхронный метод window.jsLogos.init() 
// передать параметром массив событий (матчей)
// Возвращает объект с полями содержащими ссылки на логотиы.
// Ключами являються team_id команд
```
