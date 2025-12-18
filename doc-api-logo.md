# Документация по API получения логотипов

## 1. Получение доменов

```
URL: https://fon.bet/urls.json
Метод: GET
Формат ответа: JSON
```


__Исходящие параметры__

| **Параметр** |   **Формат**   |                 **Описание**                 |
| :----------: | :------------: | :------------------------------------------: |
|   `common`   | `массив строк` |          `домены для доступа в API`          |
|    `line`    | `массив строк` | `домены для доступа в API линии и логотипов` |
|   `static`   |    `строка`    |   `домен для получения статики и логотипов`  |


__Пример ответа__

```json
{
  "common": [
    "//clientsapi01w.bk6bba-resources.com",
    "//clientsapi02w.bk6bba-resources.com",
    "//clientsapi03w.bk6bba-resources.com",
    "//clientsapi04w.bk6bba-resources.com",
    "//clientsapi05w.bk6bba-resources.com",
    "//clientsapi06w.bk6bba-resources.com",
    "//clientsapi31w.bk6bba-resources.com",
    "//clientsapi51w.bk6bba-resources.com",
    "//clientsapi52w.bk6bba-resources.com"
  ],
  "line": [
    "//line01w.bk6bba-resources.com",
    "//line02w.bk6bba-resources.com",
    "//line03w.bk6bba-resources.com",
    "//line04w.bk6bba-resources.com",
    "//line05w.bk6bba-resources.com",
    "//line06w.bk6bba-resources.com",
    "//line07w.bk6bba-resources.com",
    "//line08w.bk6bba-resources.com",
    "//line31w.bk6bba-resources.com",
    "//line32w.bk6bba-resources.com",
    "//line51w.bk6bba-resources.com",
    "//line52w.bk6bba-resources.com",
    "//line53w.bk6bba-resources.com",
    "//line54w.bk6bba-resources.com",
    "//line55w.bk6bba-resources.com"
  ],
  "lineByScopeMarket": {},
  "static": "//origin.bk6bba-resources.com",
  "commonApi": "//fastviewdata.bk6bba-resources.com",
  "staticSiteDir": "/webStaticRed/website",
  "mapOfAdditionalOriginURIs": {},
  "updateUtcDate": "Thu, 21 Nov 2024 08:27:57 GMT",
  "site": {
    "version": "1.42.69",
    "forceUpdateVersion": 0,
    "environment": "production",
    "ref": "bWFzdGVy",
    "configHash": "56a7ef7f1f9cc8eeeb1ac564bd713975"
  },
  "enableClickStream": true,
  "defaultFracSize": 0,
  "betRoundAccuracy": 1
}
```

## 2. Получение списка логотипов

```
URL: https://домен_из_line/line/logos
Метод: POST
Формат запроса: JSON
Формат ответа: JSON
```

__Входящие параметры__

|   **Параметр**   |   **Формат**   |     **Обязательный**    |           **Описание**          |                      **Значения**                      |
| :--------------: | :------------: | :---------------------: | :-----------------------------: | :----------------------------------------------------: |
|      `lang`      |    `строка`    |           `да`          |              `язык`             |             `ru (русский), en (английский)`            |
|      `sysId`     |    `строка`    |           `да`          |         `код приложения`        |                `1 (десктоп), 2 (мобайл)`               |
|   `sportKinds`   |    `строка`    |           `-`           | `запрос логотипов видов спорта` | `all (все),``actual (только из линии),``byIds (по Id)` |
|  `sportKindIds`  | `массив строк` | `да если указан byIds ` |     `список запрошенных Id`     |                                                        |
|  `competitions`  |    `строка`    |           `-`           |  `запрос логотипов чемпионатов` | `all (все),``actual (только из линии),``byIds (по Id)` |
| `competitionIds` | `массив строк` | `да если указан byIds ` |     `список запрошенных Id`     |                                                        |
|      `teams`     |    `строка`    |           `-`           |    `запрос логотипов команд`    |       `actual (только из линии),``byIds (по Id)`       |
|     `teamIds`    | `массив строк` | `да если указан byIds ` |     `список запрошенных Id`     |                                                        |


#### Пример запроса

```
{
  "lang": "ru",
  "sysId": 1,
  "sportKinds": "all",
  "competitions": "actual",
  "teams": "byIds",
  “teamIds”: [
    “350104”,
    “354339”,
    “356981”,
    “357112”
  ]
}
```

__Исходящие параметры__

|    **Параметр**    | **Формат** |                                     **Описание**                                    |
| :----------------: | :--------: | :---------------------------------------------------------------------------------: |
|       `teams`      |  `объект`  |     `сопоставление Id команды -> Id логотипа команды``если none - логотипа нет`     |
|   `competitions`   |  `объект`  |  `сопоставление Id чемпионата -> Id логотипа чемпионата``если none - логотипа нет`  |
|    `sportKinds`    |  `объект`  | `сопоставление Id вида спорта -> Id логотипа вида спорта``если none - логотипа нет` |
|     `teamLogos`    |  `объект`  |                                  `логотипы команд`                                  |
| `competitionLogos` |  `объект`  |                                `логотипы чемпионатов`                               |
|  `sportKindLogos`  |  `объект`  |                               `логотипы видов спорта`                               |


__Параметры логотипа__

|                                                             **Параметр**                                                            | **Формат** |                     **Описание**                    |
| :---------------------------------------------------------------------------------------------------------------------------------: | :--------: | :-------------------------------------------------: |
|                                                               `class`                                                               |  `строка`  |   `тип логотипа (команда, вид спорта, чемпионат)`   |
|                                                                 `id`                                                                |  `строка`  |                    `Id логотипа`                    |
|                                                              `version`                                                              |  `строка`  |                  `версия логотипа`                  |
|                                                            `object.sport`                                                           |  `строка`  |                   `Id вида спорта`                  |
|                                                            `object.name`                                                            |  `строка`  |                 `название логотипа`                 |
|                            `object.logoSmall` `object.logoMedium` `object.logoLarge` `object.logoExtraLarge`                        |  `строка`  |           `url логотипов разных размеров`           |
|                                 `object.logoVector` `object.logoLargeVector` `object.logoExtraVector`                                 |  `строка`  |   `url векторных версий логотипов разных размеров`  |
| `object.logoMonochrome` `object.logoMonochrome2` `object.logoMonochromeBlue` `object.logoMonochromeBlack` `object.logoMonochromeBlack2` |  `строка`  | `url монохромных версий логотипов разных вариантов` |
|                                                `object.logoColor``object.logoColor2`                                                |  `строка`  |   `url цветных версий логотипов разных вариантов`   |
|                             `object.logoWhiteOutline``object.logoBlackOutline``object.logoColorOutline`                             |  `строка`  |       `url логотипов с обводкой разных цветов`      |


__Пример ответа__

```
{
  "result": "logos",
  "lang": "ru",
  "teams": {
    "350104": "none",
    "354339": "2206",
    "356981": "39685",
    "357112": "41222",
  },
  "competitions": {
    "11560": "none",
    "11781": "1797",
    "11876": "39770",
    "11916": "39078",
  },
  "sportKinds": {
    "1": "39004",
    "2": "39055",
    "3": "39009"
  },
  "teamLogos": {
    "2206": {
      "class": "Fon.Logo.TeamLogo",
      "id": "2206",
      "version": "3192686",
      "object": {
        "sport": "1",
        "logoMedium": "\/ContentCommon\/Logotypes\/TeamLogos\/Football\/France\/new\/Brest_Stade_Brestois_29.png",
        "name": "Брест"
      }
    },
    "39685": {
      "class": "Fon.Logo.TeamLogo",
      "id": "39685",
      "version": "1008016589",
      "object": {
        "sport": "29086",
        "logoMedium": "\/ContentCommon\/Logotypes\/TeamLogos\/Esports\/Fnatic.png",
        "name": "Fnatic"
      }
    },
    "41222": {
      "class": "Fon.Logo.TeamLogo",
      "id": "41222",
      "version": "3365293",
      "object": {
        "sport": "29086",
        "logoMedium": "\/ContentCommon\/Logotypes\/TeamLogos\/Esports\/Nemiga_Gaming.png",
        "name": "Nemiga Gaming"
      }
    }
  },
  "competitionLogos": {
    "1797": {
      "class": "Fon.Logo.CompetitionLogo",
      "id": "1797",
      "version": "970144100",
      "object": {
        "sport": "2",
        "logoLarge": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Hockey\/nhl_new.png",
        "logoVector": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Hockey\/nhl_new.svg",
        "logoLargeVector": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Hockey\/nhl_300.svg",
        "logoMonochrome": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Hockey\/nhl_white_15.svg",
        "logoSmall": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Hockey\/nhl_16.png",
        "logoMedium": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Hockey\/nhl_64.png",
        "logoExtraLarge": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Hockey\/nhl_300.png",
        "name": "NHL"
      }
    },
    "39770": {
      "class": "Fon.Logo.CompetitionLogo",
      "id": "39770",
      "version": "967204744",
      "object": {
        "sport": "1",
        "logoLarge": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Football\/ukraine_128_new.png",
        "logoVector": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Football\/ukraine_new.svg",
        "logoLargeVector": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Football\/ukraine_300.svg",
        "logoMonochrome": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Football\/ukraine_white_15.svg",
        "logoSmall": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Football\/ukraine_16.png",
        "logoMedium": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Football\/ukraine_64.png",
        "logoExtraLarge": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Football\/ukraine_300.png",
        "useOnlyForEventView": true,
        "name": "Украина. Премьер-лига"
      }
    },
    "39078": {
      "class": "Fon.Logo.CompetitionLogo",
      "id": "39078",
      "version": "971509304",
      "object": {
        "sport": "1",
        "logoLarge": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Football\/bl_128_new.png",
        "logoVector": "\/ContentCommon\/Logotypes\/CompetitionLogos\/Football\/bl_new.svg",
        "name": "Германия. Бундеслига"
      }
    }
  }
  "sportKindLogos": {
    "39004": {
      "class": "Fon.Logo.SportLogo",
      "id": "39004",
      "version": "2390857",
      "object": {
        "logoMonochrome": "\/ContentCommon\/Logotypes\/SportKinds\/monochrome\/white\/13\/soccer.svg",
        "logoMonochrome2": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/white_new\/1-football.svg",
        "logoMonochromeBlue": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/blue_3\/1-football.svg",
        "logoMonochromeBlack": "\/ContentCommon\/Logotypes\/SportKinds\/monochrome\/black\/soccer.svg",
        "logoMonochromeBlack2": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/black_new\/1-football.svg",
        "logoColor": "\/ContentCommon\/Logotypes\/SportKinds\/color\/soccer.svg",
        "logoColor2": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/color_new\/1-football.svg",
        "caption": "Футбол",
        "logoWhiteOutline": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/outline\/white\/1-football.svg",
        "logoBlackOutline": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/outline\/black\/1-football.svg",
        "logoColorOutline": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/outline\/color\/1-football.svg",
        "name": "Футбол"
      }
    },
    "39055": {
      "class": "Fon.Logo.SportLogo",
      "id": "39055",
      "version": "2389995",
      "object": {
        "logoMonochrome": "\/ContentCommon\/Logotypes\/SportKinds\/monochrome\/white\/13\/hockey.svg",
        "logoMonochrome2": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/white_new\/2-hockey.svg",
        "logoMonochromeBlue": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/blue_3\/2-hockey.svg",
        "logoMonochromeBlack": "\/ContentCommon\/Logotypes\/SportKinds\/monochrome\/black\/hockey.svg",
        "logoMonochromeBlack2": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/black_new\/2-hockey.svg",
        "logoColor": "\/ContentCommon\/Logotypes\/SportKinds\/color\/hockey.svg",
        "logoColor2": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/color_new\/2-hockey.svg",
        "caption": "Хоккей",
        "logoWhiteOutline": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/outline\/white\/2-hockey.svg",
        "logoBlackOutline": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/outline\/black\/2-hockey.svg",
        "logoColorOutline": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/outline\/color\/2-hockey.svg",
        "name": "Хоккей"
      }
    },
    "39009": {
      "class": "Fon.Logo.SportLogo",
      "id": "39009",
      "version": "2389997",
      "object": {
        "logoMonochrome": "\/ContentCommon\/Logotypes\/SportKinds\/monochrome\/white\/basket.svg",
        "logoMonochrome2": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/white_new\/3-basketball.svg",
        "logoMonochromeBlue": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/blue_3\/3-basketball.svg",
        "logoMonochromeBlack": "\/ContentCommon\/Logotypes\/SportKinds\/monochrome\/black\/basket.svg",
        "logoMonochromeBlack2": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/black_new\/3-basketball.svg",
        "logoColor": "\/ContentCommon\/Logotypes\/SportKinds\/color\/basket.svg",
        "logoColor2": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/color_new\/3-basketball.svg",
        "caption": "Баскетбол",
        "logoWhiteOutline": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/outline\/white\/3-basketball.svg",
        "logoBlackOutline": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/outline\/black\/3-basketball.svg",
        "logoColorOutline": "\/ContentCommon\/Logotypes\/SportKinds\/new-design\/outline\/color\/3-basketball.svg",
        "name": "Баскетбол"
      }
    }
  }
}
```
