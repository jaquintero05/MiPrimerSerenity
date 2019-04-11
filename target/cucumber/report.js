$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/BusquedaDeGoogle.feature");
formatter.feature({
  "name": "searcg in google with data from feature",
  "description": "  Juan quiere hacer  una busqueda en google con datos",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "Juan esta en el sitio de google",
  "keyword": "Given "
});
formatter.step({
  "name": "el busca la palabra \"\u003cpalabra\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "el verifica la palabra \"\u003cpalabtra\u003e\" este en el resultado",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "palabra"
      ]
    },
    {
      "cells": [
        "switch"
      ]
    },
    {
      "cells": [
        "shopos cholution"
      ]
    },
    {
      "cells": [
        "sjjshuhedk[]}}{"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "Juan esta en el sitio de google",
  "keyword": "Given "
});
formatter.match({
  "location": "BusquedaEnGoogleStepDifinition.juanEstaEnElSitioDeGoogle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el busca la palabra \"switch\"",
  "keyword": "When "
});
formatter.match({
  "location": "BusquedaEnGoogleStepDifinition.elBuscaLaPalabra(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el verifica la palabra \"\u003cpalabtra\u003e\" este en el resultado",
  "keyword": "Then "
});
formatter.match({
  "location": "BusquedaEnGoogleStepDifinition.elVerificaLaPalabraEsteEnElResultado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "Juan esta en el sitio de google",
  "keyword": "Given "
});
formatter.match({
  "location": "BusquedaEnGoogleStepDifinition.juanEstaEnElSitioDeGoogle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el busca la palabra \"shopos cholution\"",
  "keyword": "When "
});
formatter.match({
  "location": "BusquedaEnGoogleStepDifinition.elBuscaLaPalabra(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el verifica la palabra \"\u003cpalabtra\u003e\" este en el resultado",
  "keyword": "Then "
});
formatter.match({
  "location": "BusquedaEnGoogleStepDifinition.elVerificaLaPalabraEsteEnElResultado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "Juan esta en el sitio de google",
  "keyword": "Given "
});
formatter.match({
  "location": "BusquedaEnGoogleStepDifinition.juanEstaEnElSitioDeGoogle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el busca la palabra \"sjjshuhedk[]}}{\"",
  "keyword": "When "
});
formatter.match({
  "location": "BusquedaEnGoogleStepDifinition.elBuscaLaPalabra(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el verifica la palabra \"\u003cpalabtra\u003e\" este en el resultado",
  "keyword": "Then "
});
formatter.match({
  "location": "BusquedaEnGoogleStepDifinition.elVerificaLaPalabraEsteEnElResultado(String)"
});
formatter.result({
  "status": "passed"
});
});