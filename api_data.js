define({ "api": [
  {
    "type": "post",
    "url": "v1/auth/login",
    "title": "Login",
    "description": "<p>Get an accessToken(Login to the system)</p>",
    "version": "1.0.0",
    "name": "Login",
    "group": "Auth",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token.tokenType",
            "description": "<p>Access Token's type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token.accessToken",
            "description": "<p>Authorization Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token.refreshToken",
            "description": "<p>Token to get a new accessToken after expiration time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "token.expiresIn",
            "description": "<p>Access Token's expiration time in miliseconds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.createdAt",
            "description": "<p>Timestamp</p>"
          }
        ],
        "Created 201": [
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "user.preferredWorkingHourPerDay",
            "description": "<p>User's preferredWorkingHourPerDay</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Incorrect email or password</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "v1/auth/refresh-token",
    "title": "Refresh Token",
    "description": "<p>Refresh expired accessToken</p>",
    "version": "1.0.0",
    "name": "RefreshToken",
    "group": "Auth",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Refresh token aquired when user logged in</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tokenType",
            "description": "<p>Access Token's type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Authorization Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Token to get a new accessToken after expiration time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expiresIn",
            "description": "<p>Access Token's expiration time in miliseconds</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Incorrect email or refreshToken</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "v1/auth/register",
    "title": "Register",
    "description": "<p>Register a new user</p>",
    "version": "1.0.0",
    "name": "Register",
    "group": "Auth",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..128",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..128",
            "optional": false,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "preferredWorkingHourPerDay",
            "description": "<p>User's preferred working hour per day</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.tokenType",
            "description": "<p>Access Token's type</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.accessToken",
            "description": "<p>Authorization Token</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.refreshToken",
            "description": "<p>Token to get a new accessToken after expiration time</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "token.expiresIn",
            "description": "<p>Access Token's expiration time in miliseconds</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.timezone",
            "description": "<p>The server's Timezone</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "user.preferredWorkingHourPerDay",
            "description": "<p>User's preferredWorkingHourPerDay</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "user.createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "v1/users/:userId/timeTracks/",
    "title": "Create timeTrack",
    "description": "<p>Create a new timeTrack</p>",
    "version": "1.0.0",
    "name": "CreateTimeTrack",
    "group": "TimeTrack",
    "permission": [
      {
        "name": "super-admin, loggedUser"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>Time track's note or textual description</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0,24",
            "optional": false,
            "field": "duration",
            "description": "<p>number of hours spent in this time track</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date(yyyy-mm-dd) for the time track</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>TimeTrack's id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>TimeTrack's note</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Duration of time track</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of timeTrack's owner</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date of time track</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can create the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can create the data</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/timeTrack.js",
    "groupTitle": "TimeTrack"
  },
  {
    "type": "delete",
    "url": "v1/users/:userId/timeTracks/:timeTrackId",
    "title": "Delete TimeTrack",
    "description": "<p>Delete a timeTrack</p>",
    "version": "1.0.0",
    "name": "DeleteTimeTrack",
    "group": "TimeTrack",
    "permission": [
      {
        "name": "super-admin, user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token prepended by <code>bearer</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "No Content 204": [
          {
            "group": "No Content 204",
            "optional": false,
            "field": "Successfully",
            "description": "<p>deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can delete the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can delete the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/timeTrack.js",
    "groupTitle": "TimeTrack"
  },
  {
    "type": "get",
    "url": "v1/users/:userId/timeTracks/filter-by-date",
    "title": "filter timeTracks in a date-range",
    "description": "<p>Filter timeTracks of the specified user between a date range</p>",
    "version": "1.0.0",
    "name": "FilterTimeTracks",
    "group": "TimeTrack",
    "permission": [
      {
        "name": "super-admin, loggedUser"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer followed by User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "Number",
            "size": "1-",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>List page</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "size": "1-100",
            "optional": true,
            "field": "perPage",
            "defaultValue": "30",
            "description": "<p>timeTracks per page</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "allowedValues": [
              "\"date\"",
              "\"duration\"",
              "\"createdAt\""
            ],
            "optional": true,
            "field": "sortBy",
            "defaultValue": "date",
            "description": "<p>name of the field to sort by</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "allowedValues": [
              "-1",
              "1"
            ],
            "optional": true,
            "field": "sortOder",
            "defaultValue": "1",
            "description": "<p>sort order (1 for ascending and -1 for descending)</p>"
          },
          {
            "group": "Query string",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>lower limit of date range(yyyy-mm-dd) for filtering timeTracks</p>"
          },
          {
            "group": "Query string",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>lower limit of date range(yyyy-mm-dd) for filtering timeTracks</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "TimeTrack",
            "description": "<p>List of timeTracks.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>specifies if next page of users list exist</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>specifies if previous page of users list exist</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can access the data</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/timeTrack.js",
    "groupTitle": "TimeTrack"
  },
  {
    "type": "get",
    "url": "v1/users/:userId/timeTracks/generate-report",
    "title": "filter timeTracks in a date-range and generates report of consolidated result",
    "description": "<p>Filter timeTracks of the specified user between a date range</p>",
    "version": "1.0.0",
    "name": "GenerateConsolidatedTimeTrackReport",
    "group": "TimeTrack",
    "permission": [
      {
        "name": "super-admin, loggedUser"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer followed by User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>lower limit of date range(yyyy-mm-dd) for filtering timeTracks</p>"
          },
          {
            "group": "Query string",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>lower limit of date range(yyyy-mm-dd) for filtering timeTracks</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Consolidated",
            "description": "<p>report in HTML format</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can access the data</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/timeTrack.js",
    "groupTitle": "TimeTrack"
  },
  {
    "type": "get",
    "url": "v1/users/:userId/timeTracks/:timeTrackId",
    "title": "Get TimeTrack object",
    "description": "<p>Get timeTrack's information</p>",
    "version": "1.0.0",
    "name": "GetTimeTrack",
    "group": "TimeTrack",
    "permission": [
      {
        "name": "super-admin, user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>TimeTrack's id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>TimeTrack's note</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Duration of time track</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of timeTrack's owner</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date of time track</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/timeTrack.js",
    "groupTitle": "TimeTrack"
  },
  {
    "type": "get",
    "url": "v1/users/:userId/timeTracks",
    "title": "List TimeTracks",
    "description": "<p>Get a list of TimeTracks for a userId</p>",
    "version": "1.0.0",
    "name": "ListTimeTracks",
    "group": "TimeTrack",
    "permission": [
      {
        "name": "super-admin, loggedUser"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer followed by User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "Number",
            "size": "1-",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>List page</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "size": "1-100",
            "optional": true,
            "field": "perPage",
            "defaultValue": "30",
            "description": "<p>timeTracks per page</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "allowedValues": [
              "\"date\"",
              "\"duration\"",
              "\"createdAt\""
            ],
            "optional": true,
            "field": "sortBy",
            "defaultValue": "date",
            "description": "<p>name of the field to sort by</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "allowedValues": [
              "-1",
              "1"
            ],
            "optional": true,
            "field": "sortOder",
            "defaultValue": "1",
            "description": "<p>sort order (1 for ascending and -1 for descending)</p>"
          },
          {
            "group": "Query string",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>date of timeTracks to be used as filter</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>timeTrack's note to be used as filter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "TimeTrack",
            "description": "<p>List of timeTracks.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>specifies if next page of users list exist</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>specifies if previous page of users list exist</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can access the data</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/timeTrack.js",
    "groupTitle": "TimeTrack"
  },
  {
    "type": "get",
    "url": "v1/users/:userId/timeTracks/search",
    "title": "Search timeTracks",
    "description": "<p>Search timeTracks of the specified user using query string</p>",
    "version": "1.0.0",
    "name": "SearchTimeTracks",
    "group": "TimeTrack",
    "permission": [
      {
        "name": "super-admin, loggedUser"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer followed by User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "Number",
            "size": "1-",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>List page</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "size": "1-100",
            "optional": true,
            "field": "perPage",
            "defaultValue": "30",
            "description": "<p>timeTracks per page</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "allowedValues": [
              "\"date\"",
              "\"duration\"",
              "\"createdAt\""
            ],
            "optional": true,
            "field": "sortBy",
            "defaultValue": "date",
            "description": "<p>name of the field to sort by</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "allowedValues": [
              "-1",
              "1"
            ],
            "optional": true,
            "field": "sortOder",
            "defaultValue": "1",
            "description": "<p>sort order (1 for ascending and -1 for descending)</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>string to match notes in timeTracks of a particular user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "TimeTrack",
            "description": "<p>List of timeTracks.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>specifies if next page of users list exist</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>specifies if previous page of users list exist</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can access the data</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/timeTrack.js",
    "groupTitle": "TimeTrack"
  },
  {
    "type": "patch",
    "url": "v1/users/:userId/timeTracks/:timeTrackId",
    "title": "Update TimeTrack",
    "description": "<p>Update some fields of a TimeTrack document</p>",
    "version": "1.0.0",
    "name": "UpdateTimeTrack",
    "group": "TimeTrack",
    "permission": [
      {
        "name": "super-admin, user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>Time track's note or textual description</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0,24",
            "optional": false,
            "field": "duration",
            "description": "<p>number of hours spent in this time track</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date(yyyy-mm-dd) for the time track</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>TimeTrack's id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>TimeTrack's note</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Duration of time track</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of timeTrack's owner</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date of time track</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can modify the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/timeTrack.js",
    "groupTitle": "TimeTrack"
  },
  {
    "type": "post",
    "url": "v1/users",
    "title": "Create User",
    "description": "<p>Create a new user</p>",
    "version": "1.0.0",
    "name": "CreateUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..128",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": false,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "preferredWorkingHourPerDay",
            "description": "<p>User's preferredWorkingHourPerDay</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "user",
              "user-manager",
              "super-admin"
            ],
            "optional": true,
            "field": "role",
            "description": "<p>User's role</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "user.preferredWorkingHourPerDay",
            "description": "<p>User's preferredWorkingHourPerDay</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can create the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can create the data</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "v1/users/:id",
    "title": "Delete User",
    "description": "<p>Delete a user</p>",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token prepended by <code>bearer</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "No Content 204": [
          {
            "group": "No Content 204",
            "optional": false,
            "field": "Successfully",
            "description": "<p>deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can delete the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can delete the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "v1/users/:id",
    "title": "Get User",
    "description": "<p>Get user information</p>",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ],
        "Created 201": [
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "user.preferredWorkingHourPerDay",
            "description": "<p>User's preferredWorkingHourPerDay</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "v1/users",
    "title": "List Users",
    "description": "<p>Get a list of users</p>",
    "version": "1.0.0",
    "name": "ListUsers",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer followed by User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "Number",
            "size": "1-",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>List page</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "size": "1-100",
            "optional": true,
            "field": "perPage",
            "defaultValue": "30",
            "description": "<p>Users per page</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "allowedValues": [
              "\"email\"",
              "\"name\"",
              "\"role\"",
              "\"createdAt\""
            ],
            "optional": true,
            "field": "sortBy",
            "defaultValue": "createdAt",
            "description": "<p>name of the field to sort by</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "allowedValues": [
              "-1",
              "1"
            ],
            "optional": true,
            "field": "sortOder",
            "defaultValue": "1",
            "description": "<p>sort order (1 for ascending and -1 for descending)</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "allowedValues": [
              "user",
              "user-manager",
              "super-admin"
            ],
            "optional": true,
            "field": "role",
            "description": "<p>User's role</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>specifies if next page of users list exist</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>specifies if previous page of users list exist</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can access the data</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "v1/users/search",
    "title": "Search users",
    "description": "<p>Search users using query string</p>",
    "version": "1.0.0",
    "name": "SearchUsers",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer followed by User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "Number",
            "size": "1-",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>List page</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "size": "1-100",
            "optional": true,
            "field": "perPage",
            "defaultValue": "30",
            "description": "<p>Users per page</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>search query</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "allowedValues": [
              "\"email\"",
              "\"name\"",
              "\"role\"",
              "\"createdAt\""
            ],
            "optional": true,
            "field": "sortBy",
            "defaultValue": "createdAt",
            "description": "<p>name of the field to sort by</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "allowedValues": [
              "-1",
              "1"
            ],
            "optional": true,
            "field": "sortOder",
            "defaultValue": "1",
            "description": "<p>sort order (1 for ascending and -1 for descending)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>specifies if next page of users list exist</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>specifies if previous page of users list exist</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can access the data</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/user.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "v1/users/:id",
    "title": "Update User",
    "description": "<p>Update some fields of a user document</p>",
    "version": "1.0.0",
    "name": "UpdateUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email(user's email can only be updated by a super-admin or user-manager)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..128",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "user",
              "admin"
            ],
            "optional": true,
            "field": "role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "preferredWorkingHourPerDay",
            "description": "<p>User's preferredWorkingHourPerDay (You must be an super-admin or user-manager to change the user's role. Only super-admin can change super-admin's information)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ],
        "Created 201": [
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "user.preferredWorkingHourPerDay",
            "description": "<p>User's preferredWorkingHourPerDay</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can modify the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "v1/users/profile",
    "title": "User Profile",
    "description": "<p>Get logged in user profile information</p>",
    "version": "1.0.0",
    "name": "UserProfile",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token prefixed with <code>bearer</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preferredWorkingHourPerDay",
            "description": "<p>User's preferredWorkingHourPerDay</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated Users can access the data</p>"
          }
        ]
      }
    },
    "filename": "src/server/api/routes/v1/user.js",
    "groupTitle": "User"
  }
] });