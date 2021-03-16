const { getServer } = require("./server")
const { _setToken, _getToken } = require("./token")
const axios = require('axios');

axios.defaults.withCredentials = true

const GetURL =  "/recordm/recordm/instances/"
const ResultURLTemplate = "/recordm/index.html#/instance/__INSTANCE_ID__"

var rmGetInstance = async function (instanceId) {

    axios.defaults.headers.Cookie = _getToken() 

    return axios
      .get(getServer() + GetURL + instanceId)
      .then(response => {
        _setToken(response.headers["set-cookie"])
        response.data.resultsUrl = GetURL + instanceId
        return response.data
      })
      .catch ( e => {
        throw(e)
      })
}

module.exports = { rmGetInstance }


exampleResult = {
  "id": 556,
  "attachmentPath": "556",
  "version": 0,
  "instanceLabel": [
    "ABW"
  ],
  "jsonDefinition": {
    "id": 1,
    "name": "Countries",
    "description": "@e-learning",
    "duplicable": false,
    "state": "enabled"
  },
  "fields": [
    {
      "id": 6617,
      "parent": null,
      "fieldDefinition": {
        "id": 1,
        "name": "Country Code",
        "description": "$instanceLabel",
        "condition": null,
        "required": null,
        "duplicable": false,
        "groupField": false,
        "order": 0,
        "fields": []
      },
      "value": "ABW",
      "duplicate": false,
      "off": false,
      "fields": []
    },
    {
      "id": 6618,
      "parent": null,
      "fieldDefinition": {
        "id": 2,
        "name": "Short Name",
        "description": null,
        "condition": null,
        "required": null,
        "duplicable": false,
        "groupField": false,
        "order": 1,
        "fields": []
      },
      "value": "Aruba",
      "duplicate": false,
      "off": false,
      "fields": []
    },
    {
      "id": 6619,
      "parent": null,
      "fieldDefinition": {
        "id": 3,
        "name": "Long Name",
        "description": "$instanceDescription",
        "condition": null,
        "required": null,
        "duplicable": false,
        "groupField": false,
        "order": 2,
        "fields": []
      },
      "value": "Aruba",
      "duplicate": false,
      "off": false,
      "fields": []
    },
    {
      "id": 6620,
      "parent": null,
      "fieldDefinition": {
        "id": 4,
        "name": "Details",
        "description": "$group",
        "condition": null,
        "required": null,
        "duplicable": false,
        "groupField": true,
        "order": 3,
        "fields": []
      },
      "value": null,
      "duplicate": false,
      "off": false,
      "fields": [
        {
          "id": 6621,
          "parent": 6620,
          "fieldDefinition": {
            "id": 5,
            "name": "2-alpha code",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 4,
            "fields": []
          },
          "value": "AW",
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": 6622,
          "parent": 6620,
          "fieldDefinition": {
            "id": 6,
            "name": "Currency Unit",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 5,
            "fields": []
          },
          "value": "Aruban florin",
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": -1,
          "parent": 6620,
          "fieldDefinition": {
            "id": 7,
            "name": "Special Notes",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 6,
            "fields": []
          },
          "value": null,
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": 6623,
          "parent": 6620,
          "fieldDefinition": {
            "id": 8,
            "name": "Region",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 7,
            "fields": []
          },
          "value": "Latin America & Caribbean",
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": 6624,
          "parent": 6620,
          "fieldDefinition": {
            "id": 9,
            "name": "Income Group",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 8,
            "fields": []
          },
          "value": "High income",
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": 6625,
          "parent": 6620,
          "fieldDefinition": {
            "id": 10,
            "name": "WB-2 code",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 9,
            "fields": []
          },
          "value": "AW",
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": 6626,
          "parent": 6620,
          "fieldDefinition": {
            "id": 11,
            "name": "National accounts base year",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 10,
            "fields": []
          },
          "value": "2000",
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": -2,
          "parent": 6620,
          "fieldDefinition": {
            "id": 12,
            "name": "National accounts reference year",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 11,
            "fields": []
          },
          "value": null,
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": 6627,
          "parent": 6620,
          "fieldDefinition": {
            "id": 13,
            "name": "SNA price valuation",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 12,
            "fields": []
          },
          "value": "Value added at basic prices (VAB)",
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": -3,
          "parent": 6620,
          "fieldDefinition": {
            "id": 14,
            "name": "Lending category",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 13,
            "fields": []
          },
          "value": null,
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": -4,
          "parent": 6620,
          "fieldDefinition": {
            "id": 15,
            "name": "Other groups",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 14,
            "fields": []
          },
          "value": null,
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": 6628,
          "parent": 6620,
          "fieldDefinition": {
            "id": 16,
            "name": "System of National Accounts",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 15,
            "fields": []
          },
          "value": "Country uses the 1993 System of National Accounts methodology",
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": -5,
          "parent": 6620,
          "fieldDefinition": {
            "id": 17,
            "name": "Alternative conversion factor",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 16,
            "fields": []
          },
          "value": null,
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": 6629,
          "parent": 6620,
          "fieldDefinition": {
            "id": 18,
            "name": "PPP survey year",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 17,
            "fields": []
          },
          "value": "2011",
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": 6630,
          "parent": 6620,
          "fieldDefinition": {
            "id": 19,
            "name": "Balance of Payments Manual in use",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 18,
            "fields": []
          },
          "value": "BPM5 (Converted into BPM6 by IMF)",
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": -6,
          "parent": 6620,
          "fieldDefinition": {
            "id": 20,
            "name": "External debt Reporting status",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 19,
            "fields": []
          },
          "value": null,
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": 6631,
          "parent": 6620,
          "fieldDefinition": {
            "id": 21,
            "name": "System of trade",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 20,
            "fields": []
          },
          "value": "General trade system",
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": -7,
          "parent": 6620,
          "fieldDefinition": {
            "id": 22,
            "name": "Government Accounting concept",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 21,
            "fields": []
          },
          "value": null,
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": 6632,
          "parent": 6620,
          "fieldDefinition": {
            "id": 23,
            "name": "IMF data dissemination standard",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 22,
            "fields": []
          },
          "value": "Enhanced General Data Dissemination System (e-GDDS)",
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": 6633,
          "parent": 6620,
          "fieldDefinition": {
            "id": 24,
            "name": "Latest population census",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 23,
            "fields": []
          },
          "value": "2010",
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": -8,
          "parent": 6620,
          "fieldDefinition": {
            "id": 25,
            "name": "Latest household survey",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 24,
            "fields": []
          },
          "value": null,
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": -9,
          "parent": 6620,
          "fieldDefinition": {
            "id": 26,
            "name": "Source of most recent Income and expenditure data",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 25,
            "fields": []
          },
          "value": null,
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": 6634,
          "parent": 6620,
          "fieldDefinition": {
            "id": 27,
            "name": "Vital registration complete",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 26,
            "fields": []
          },
          "value": "Yes",
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": -10,
          "parent": 6620,
          "fieldDefinition": {
            "id": 28,
            "name": "Latest agricultural census",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 27,
            "fields": []
          },
          "value": null,
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": -11,
          "parent": 6620,
          "fieldDefinition": {
            "id": 29,
            "name": "Latest industrial data",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 28,
            "fields": []
          },
          "value": null,
          "duplicate": false,
          "off": false,
          "fields": []
        },
        {
          "id": 6635,
          "parent": 6620,
          "fieldDefinition": {
            "id": 30,
            "name": "Latest trade data",
            "description": null,
            "condition": null,
            "required": null,
            "duplicable": false,
            "groupField": false,
            "order": 29,
            "fields": []
          },
          "value": "2016",
          "duplicate": false,
          "off": false,
          "fields": []
        }
      ]
    },
    {
      "id": -12,
      "parent": null,
      "fieldDefinition": {
        "id": 31,
        "name": "Indicadores",
        "description": "$references(Countries Series,Country Code,[showActions:true, showImport:true, showViews:false,view:teste jb, showCreateAndDelete:true,create:true])",
        "condition": null,
        "required": null,
        "duplicable": false,
        "groupField": false,
        "order": 30,
        "fields": []
      },
      "value": null,
      "duplicate": false,
      "off": false,
      "fields": []
    }
  ],
  "_links": {
    "size": "1",
    "update": "recordm/instances/556"
  }
}