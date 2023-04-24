const dfeAnalyticsDataform = require("dfe-analytics-dataform");

// Repeat the lines below for each and every events table you want dfe-analytics-dataform to process in your Dataform project - distinguish between them by giving each one a different eventSourceName. This will cause all the tables produced automatically by dfe-analytics-dataform to have your suffix included in them to allow users to tell the difference between them.
dfeAnalyticsDataform({
  eventSourceName: "prod",
  bqDatasetName: "events_production",
  bqEventsTableName: "events",
  urlRegex: "refer-serious-misconduct.education.gov.uk", // re-2 formatted regular expression to use to identify whether a URL is this service's own URL or an external one. If your service only has one domain name set this to 'www.yourdomainname.gov.uk' (without the protocol). If you have more than one use something like '(?i)(www.domain1.gov.uk|www.domain2.gov.uk|www.domain3.gov.uk)'
  dataSchema: [{
    entityTableName: "events_prod",
    description: "Description of this entity to include in metadata of denormalised tables produced for this entity.",
    keys: [
  {
    "name": "occurred_at",
    "mode": "",
    "type": "TIMESTAMP",
    "description": "The timestamp at which the event occurred in the application.",
    "fields": []
  },
  {
    "name": "request_uuid",
    "mode": "",
    "type": "STRING",
    "description": "UUID of the web request that either is this event, or that caused this event.",
    "fields": []
  },
  {
    "name": "event_type",
    "mode": "",
    "type": "STRING",
    "description": "The type of the event, for example web_request. This determines the schema of the data which will be included in the data field.",
    "fields": []
  },
  {
    "name": "environment",
    "mode": "",
    "type": "STRING",
    "description": "The application environment that the event was streamed from.",
    "fields": []
  },
  {
    "name": "namespace",
    "mode": "",
    "type": "STRING",
    "description": "The namespace of the instance of dfe-analytics that streamed this event. For example this might identify the name of the service that streamed the event.",
    "fields": []
  },
  {
    "name": "data",
    "mode": "REPEATED",
    "type": "RECORD",
    "description": "ARRAY of STRUCTs, each with a key and a value. Contains a set of data points appropriate to the event_type of this event. For example, if this event was an entity create, update, delete or import event, data will contain the values of each field in the database after this event took place - according to the settings in the analytics.yml configured for this instance of dfe-analytics. Value be anonymised as a one way hash, depending on configuration settings.",
    "fields": [
      {
        "name": "key",
        "mode": "",
        "type": "STRING",
        "description": null,
        "fields": []
      },
      {
        "name": "value",
        "mode": "REPEATED",
        "type": "STRING",
        "description": null,
        "fields": []
      }
    ]
  },
  {
    "name": "entity_table_name",
    "mode": "",
    "type": "STRING",
    "description": "If event_type was an entity create, update, delete or import event, the name of the table in the database that this entity is stored in. NULL otherwise.",
    "fields": []
  },
  {
    "name": "request_path",
    "mode": "",
    "type": "STRING",
    "description": "The path, starting with a / and excluding any query parameters, of the web request that either is this event, or caused this event.",
    "fields": []
  },
  {
    "name": "request_user_id",
    "mode": "",
    "type": "STRING",
    "description": "If a user was logged in when they sent a web request event that is, or caused, this event, then this is the UID of this user.",
    "fields": []
  },
  {
    "name": "request_method",
    "mode": "",
    "type": "STRING",
    "description": "Whether the web request that either is this event, or caused this event, was a GET or a POST request.",
    "fields": []
  },
  {
    "name": "request_user_agent",
    "mode": "",
    "type": "STRING",
    "description": "The user agent of the web request that either is this event or caused this event. Allows a user's browser and operating system to be identified.",
    "fields": []
  },
  {
    "name": "request_referer",
    "mode": "",
    "type": "STRING",
    "description": "The URL of any page the user was viewing when they initiated the web request that either is this event or caused this event. This is the full URL, including protocol (https://) and any query parameters, if the browser shared these with our application as part of the web request. It is very common for this referer to be truncated for referrals from external sites.",
    "fields": []
  },
  {
    "name": "request_query",
    "mode": "REPEATED",
    "type": "RECORD",
    "description": "ARRAY of STRUCTs, each with a key and a value. Contains any query parameters that were sent to the application as part of the web request that was this event or caused this event.",
    "fields": [
      {
        "name": "key",
        "mode": "",
        "type": "STRING",
        "description": null,
        "fields": []
      },
      {
        "name": "value",
        "mode": "REPEATED",
        "type": "STRING",
        "description": null,
        "fields": []
      }
    ]
  },
  {
    "name": "response_status",
    "mode": "",
    "type": "STRING",
    "description": "HTTP response code returned by the application in response to the web request that either was this event or caused this event. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status.",
    "fields": []
  },
  {
    "name": "response_content_type",
    "mode": "",
    "type": "STRING",
    "description": "Content type of any data that was returned to the browser following the web request that either was this event or caused this event. For example, 'text/html; charset=utf-8'. Image views, for example, may have a non-text/html content type.",
    "fields": []
  },
  {
    "name": "anonymised_user_agent_and_ip",
    "mode": "",
    "type": "STRING",
    "description": "One way hash of a combination of the user's IP address and user agent. Can be used to identify the user anonymously, even when user_id is not set. Cannot be used to identify the user over a time period of longer than about a month, because of IP address changes and browser updates.",
    "fields": []
  },
  {
    "name": "device_category",
    "mode": "",
    "type": "STRING",
    "description": "The category of device used to cause this event - desktop, mobile, bot or unknown.",
    "fields": []
  },
  {
    "name": "browser_name",
    "mode": "",
    "type": "STRING",
    "description": "The name of the browser used to cause this event.",
    "fields": []
  },
  {
    "name": "browser_version",
    "mode": "",
    "type": "STRING",
    "description": "The version of the browser used to cause this event.",
    "fields": []
  },
  {
    "name": "operating_system_name",
    "mode": "",
    "type": "STRING",
    "description": "The name of the operating system used to cause this event.",
    "fields": []
  },
  {
    "name": "operating_system_vendor",
    "mode": "",
    "type": "STRING",
    "description": "The vendor of the operating system used to cause this event.",
    "fields": []
  },
  {
    "name": "operating_system_version",
    "mode": "",
    "type": "STRING",
    "description": "The version of the operating system used to cause this event.",
    "fields": []
  }
]
  }]
});