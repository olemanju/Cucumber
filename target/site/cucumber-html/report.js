$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Mynew.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I want to go ANZ office",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I swipe my card",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I show the id card",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I must move to 8th floor",
  "keyword": "Then "
});
formatter.match({
  "location": "Mynew.i_went_to_office()"
});
formatter.result({
  "duration": 232094726,
  "status": "passed"
});
formatter.match({
  "location": "Mynew.i_will_Swipe()"
});
formatter.result({
  "duration": 137444,
  "status": "passed"
});
formatter.match({
  "location": "Mynew.i_show_id()"
});
formatter.result({
  "duration": 76755,
  "status": "passed"
});
formatter.match({
  "location": "Mynew.i_must_move()"
});
formatter.result({
  "duration": 96836,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I want to write a step with \u003cname\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I check for the \u003cvalue\u003e in step",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I verify the \u003cstatus\u003e in step",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ],
      "line": 38,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;1"
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ],
      "line": 39,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;2"
    },
    {
      "cells": [
        "name2",
        "7",
        "Fail"
      ],
      "line": 40,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 31,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I want to write a step with name1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I check for the 5 in step",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I verify the success in step",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 40,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 31,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I want to write a step with name2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I check for the 7 in step",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I verify the Fail in step",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("com/cucumber/FifthScenarioOutLine.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Example of scenario outline",
  "description": "I want to use this template for my feature file",
  "id": "example-of-scenario-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Title of your scenario",
  "description": "",
  "id": "example-of-scenario-outline;title-of-your-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I though to stay in \u003cSource_place\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "we are group 3 Adults",
  "rows": [
    {
      "cells": [
        "Selva",
        "Vijay",
        "Srini"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "we orderd 3 varities of Food",
  "rows": [
    {
      "cells": [
        "Selva",
        "NagMohan",
        "Priya"
      ],
      "line": 30
    },
    {
      "cells": [
        "veg",
        "Egg",
        "NonVeg"
      ],
      "line": 31
    },
    {
      "cells": [
        "2",
        "3",
        "5"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "we went to see \u003cDestination\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Returned on \u003cReturnDate\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "example-of-scenario-outline;title-of-your-scenario;",
  "rows": [
    {
      "cells": [
        "Source_place",
        "ReturnDate",
        "Destination"
      ],
      "line": 37,
      "id": "example-of-scenario-outline;title-of-your-scenario;;1"
    },
    {
      "cells": [
        "Sydney",
        "25th June 2019",
        "Canada"
      ],
      "line": 38,
      "id": "example-of-scenario-outline;title-of-your-scenario;;2"
    },
    {
      "cells": [
        "Bangalore",
        "12th May 2018",
        "England"
      ],
      "line": 39,
      "id": "example-of-scenario-outline;title-of-your-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "Title of your scenario",
  "description": "",
  "id": "example-of-scenario-outline;title-of-your-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I though to stay in Sydney",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "we are group 3 Adults",
  "rows": [
    {
      "cells": [
        "Selva",
        "Vijay",
        "Srini"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "we orderd 3 varities of Food",
  "rows": [
    {
      "cells": [
        "Selva",
        "NagMohan",
        "Priya"
      ],
      "line": 30
    },
    {
      "cells": [
        "veg",
        "Egg",
        "NonVeg"
      ],
      "line": 31
    },
    {
      "cells": [
        "2",
        "3",
        "5"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "we went to see Canada",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Returned on 25th June 2019",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 20
    }
  ],
  "location": "FifthSecanrioOutLine.i_live_in_other(String)"
});
formatter.result({
  "duration": 4426785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "FourthParameter.adulst(int,String\u003e)"
});
formatter.result({
  "duration": 2973353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "FourthParameter.orderFood(int,String,String\u003e\u003e)"
});
formatter.result({
  "duration": 452942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canada",
      "offset": 15
    }
  ],
  "location": "FifthSecanrioOutLine.place_toSee(String)"
});
formatter.result({
  "duration": 137891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25th June 2019",
      "offset": 12
    }
  ],
  "location": "FifthSecanrioOutLine.return_date(String)"
});
formatter.result({
  "duration": 538176,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Title of your scenario",
  "description": "",
  "id": "example-of-scenario-outline;title-of-your-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I though to stay in Bangalore",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "we are group 3 Adults",
  "rows": [
    {
      "cells": [
        "Selva",
        "Vijay",
        "Srini"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "we orderd 3 varities of Food",
  "rows": [
    {
      "cells": [
        "Selva",
        "NagMohan",
        "Priya"
      ],
      "line": 30
    },
    {
      "cells": [
        "veg",
        "Egg",
        "NonVeg"
      ],
      "line": 31
    },
    {
      "cells": [
        "2",
        "3",
        "5"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "we went to see England",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Returned on 12th May 2018",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Bangalore",
      "offset": 20
    }
  ],
  "location": "FifthSecanrioOutLine.i_live_in_other(String)"
});
formatter.result({
  "duration": 413226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "FourthParameter.adulst(int,String\u003e)"
});
formatter.result({
  "duration": 1453432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "FourthParameter.orderFood(int,String,String\u003e\u003e)"
});
formatter.result({
  "duration": 259717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "England",
      "offset": 15
    }
  ],
  "location": "FifthSecanrioOutLine.place_toSee(String)"
});
formatter.result({
  "duration": 127180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12th May 2018",
      "offset": 12
    }
  ],
  "location": "FifthSecanrioOutLine.return_date(String)"
});
formatter.result({
  "duration": 302557,
  "status": "passed"
});
formatter.uri("com/cucumber/Mynew.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "First Feature file running",
  "description": "",
  "id": "first-feature-file-running",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 23,
  "name": "Title of your scenario",
  "description": "",
  "id": "first-feature-file-running;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I want to go ANZ office",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I swipe my card",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I show the id card",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I must move to 8th floor",
  "keyword": "Then "
});
formatter.match({
  "location": "Mynew.i_went_to_office()"
});
formatter.result({
  "duration": 77647,
  "status": "passed"
});
formatter.match({
  "location": "Mynew.i_will_Swipe()"
});
formatter.result({
  "duration": 80771,
  "status": "passed"
});
formatter.match({
  "location": "Mynew.i_show_id()"
});
formatter.result({
  "duration": 76755,
  "status": "passed"
});
formatter.match({
  "location": "Mynew.i_must_move()"
});
formatter.result({
  "duration": 183855,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "first-feature-file-running;title-of-your-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I want to write a step with \u003cname\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I check for the \u003cvalue\u003e in step",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I verify the \u003cstatus\u003e in step",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "first-feature-file-running;title-of-your-scenario-outline;",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ],
      "line": 37,
      "id": "first-feature-file-running;title-of-your-scenario-outline;;1"
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ],
      "line": 38,
      "id": "first-feature-file-running;title-of-your-scenario-outline;;2"
    },
    {
      "cells": [
        "name2",
        "7",
        "Fail"
      ],
      "line": 39,
      "id": "first-feature-file-running;title-of-your-scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "first-feature-file-running;title-of-your-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 30,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I want to write a step with name1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I check for the 5 in step",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I verify the success in step",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 39,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "first-feature-file-running;title-of-your-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 30,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I want to write a step with name2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I check for the 7 in step",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I verify the Fail in step",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("com/cucumber/ThirdParameters.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "With Expression and Parameters",
  "description": "I want to use this template for my feature file",
  "id": "with-expression-and-parameters",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 25,
  "name": "I want to Book Office",
  "description": "",
  "id": "with-expression-and-parameters;i-want-to-book-office",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I lived in Sydney",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I want to go to on Office",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "we are 3 Adults in the group",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "we tried to book it on 1st June 2019 to 15th June 2019",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I go to AgentOffice",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I should pay 5000 as a Advance",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I asked for some discount",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 11
    }
  ],
  "location": "ThirdParameters.i_live_in_otherplace(String)"
});
formatter.result({
  "duration": 312374,
  "status": "passed"
});
formatter.match({
  "location": "ThirdParameters.i_want_togo_holiday()"
});
formatter.result({
  "duration": 395376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 7
    }
  ],
  "location": "ThirdParameters.adulst(int)"
});
formatter.result({
  "duration": 236512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1st June 2019",
      "offset": 23
    },
    {
      "val": "15th June 2019",
      "offset": 40
    }
  ],
  "location": "ThirdParameters.BookTheDates(String,String)"
});
formatter.result({
  "duration": 207505,
  "status": "passed"
});
formatter.match({
  "location": "ThirdParameters.goto_Agent()"
});
formatter.result({
  "duration": 307465,
  "status": "passed"
});
formatter.match({
  "location": "ThirdParameters.pay_Advance()"
});
formatter.result({
  "duration": 87911,
  "status": "passed"
});
formatter.match({
  "location": "ThirdParameters.discount()"
});
formatter.result({
  "duration": 85233,
  "status": "passed"
});
formatter.uri("com/cucumber/fourthParametersAndTestdata.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Fourth parameter with Test data",
  "description": "I want to use this template for my feature file",
  "id": "fourth-parameter-with-test-data",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "I want to Book Coffee",
  "description": "",
  "id": "fourth-parameter-with-test-data;i-want-to-book-coffee",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I was in Sydney",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "we are group 3 Adults",
  "rows": [
    {
      "cells": [
        "Selva",
        "Vijay",
        "Srini"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "we orderd 3 varities of Food",
  "rows": [
    {
      "cells": [
        "Selva",
        "NagMohan",
        "Priya"
      ],
      "line": 29
    },
    {
      "cells": [
        "veg",
        "Egg",
        "NonVeg"
      ],
      "line": 30
    },
    {
      "cells": [
        "2",
        "3",
        "5"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 9
    }
  ],
  "location": "FourthParameter.i_live_in_other(String)"
});
formatter.result({
  "duration": 153509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "FourthParameter.adulst(int,String\u003e)"
});
formatter.result({
  "duration": 234281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "FourthParameter.orderFood(int,String,String\u003e\u003e)"
});
formatter.result({
  "duration": 448033,
  "status": "passed"
});
formatter.uri("com/cucumber/secondRegularExpers.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Second with out Regular exoressions",
  "description": "I want to use this template for my feature file",
  "id": "second-with-out-regular-exoressions",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "I want to Book Hotel",
  "description": "",
  "id": "second-with-out-regular-exoressions;i-want-to-book-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I live in Melbourne",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I want to go to on Holiday",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "we are 4 Adults",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "we want to book it on 1st June 2019 to 10th June 2019",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I go to Agent",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I should pay 500 as a Advance",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I asked for discount",
  "keyword": "But "
});
formatter.match({
  "location": "Secondfile.i_live()"
});
formatter.result({
  "duration": 169129,
  "status": "passed"
});
formatter.match({
  "location": "Secondfile.i_want_togo_holiday()"
});
formatter.result({
  "duration": 89250,
  "status": "passed"
});
formatter.match({
  "location": "Secondfile.adulst()"
});
formatter.result({
  "duration": 350751,
  "status": "passed"
});
formatter.match({
  "location": "Secondfile.BookTheDates()"
});
formatter.result({
  "duration": 103976,
  "status": "passed"
});
formatter.match({
  "location": "Secondfile.goto_Agent()"
});
formatter.result({
  "duration": 89696,
  "status": "passed"
});
formatter.match({
  "location": "Secondfile.pay_Advance()"
});
formatter.result({
  "duration": 96390,
  "status": "passed"
});
formatter.match({
  "location": "Secondfile.discount()"
});
formatter.result({
  "duration": 87465,
  "status": "passed"
});
});