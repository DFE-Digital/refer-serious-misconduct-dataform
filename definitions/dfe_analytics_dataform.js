const dfeAnalyticsDataform = require("dfe-analytics-dataform");

// Repeat the lines below for each and every events table you want dfe-analytics-dataform to process in your Dataform project - distinguish between them by giving each one a different eventSourceName. This will cause all the tables produced automatically by dfe-analytics-dataform to have your suffix included in them to allow users to tell the difference between them.
dfeAnalyticsDataform({
  eventSourceName: "prod",
  bqDatasetName: "events_production",
  bqEventsTableName: "events",
  urlRegex: "refer-serious-misconduct.education.gov.uk", // re-2 formatted regular expression to use to identify whether a URL is this service's own URL or an external one. If your service only has one domain name set this to 'www.yourdomainname.gov.uk' (without the protocol). If you have more than one use something like '(?i)(www.domain1.gov.uk|www.domain2.gov.uk|www.domain3.gov.uk)'
  dataSchema: [
  {
  entityTableName: "active_storage_attachments",
  description: "",
  keys: [{
     keyName: "blob_id",
     dataType: "integer",
     description: ""
  }, {
     keyName: "name",
     dataType: "string",
     description: ""
  }, {
     keyName: "record_id",
     dataType: "integer",
     description: ""
  }, {
     keyName: "record_type",
     dataType: "string",
     description: ""
  }]
},
{
   entityTableName: "active_storage_blobs",
   description: "",
   keys: [{
      keyName: "byte_size",
      dataType: "integer",
      description: ""
   }, {
      keyName: "checksum",
      dataType: "string",
      description: ""
   }, {
      keyName: "content_type",
      dataType: "string",
      description: ""
   }, {
      keyName: "filename",
      dataType: "string",
      description: ""
   }, {
      keyName: "key",
      dataType: "string",
      description: ""
   }, {
      keyName: "metadata",
      dataType: "string",
      description: ""
   }, {
      keyName: "service_name",
      dataType: "string",
      description: ""
   }]
},
{
   entityTableName: "eligibility_checks",
   description: "",
   keys: [{
      keyName: "complained",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "is_teacher",
      dataType: "string",
      description: ""
   }, {
      keyName: "reporting_as",
      dataType: "string",
      description: ""
   }, {
      keyName: "serious_misconduct",
      dataType: "string",
      description: ""
   }, {
      keyName: "teaching_in_england",
      dataType: "string",
      description: ""
   }, {
      keyName: "unsupervised_teaching",
      dataType: "string",
      description: ""
   }]
},
{
   entityTableName: "referral_evidences",
   description: "",
   keys: [{
      keyName: "filename",
      dataType: "string",
      description: ""
   }, {
      keyName: "referral_id",
      dataType: "integer",
      description: ""
   }]
},
{
   entityTableName: "referrals",
   description: "",
   keys: [{
      keyName: "address_known",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "address_line_1",
      dataType: "string",
      description: ""
   }, {
      keyName: "address_line_2",
      dataType: "string",
      description: ""
   }, {
      keyName: "age_known",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "allegation_consideration_details",
      dataType: "string",
      description: ""
   }, {
      keyName: "allegation_details",
      dataType: "string",
      description: ""
   }, {
      keyName: "allegation_details_complete",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "allegation_format",
      dataType: "string",
      description: ""
   }, {
      keyName: "contact_details_complete",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "country",
      dataType: "string",
      description: ""
   }, {
      keyName: "date_of_birth",
      dataType: "string",
      description: ""
   }, {
      keyName: "dbs_notified",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "duties_details",
      dataType: "string",
      description: ""
   }, {
      keyName: "duties_format",
      dataType: "string",
      description: ""
   }, {
      keyName: "eligibility_check_id",
      dataType: "string",
      description: ""
   }, {
      keyName: "email_address",
      dataType: "string",
      description: ""
   }, {
      keyName: "email_known",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "employment_status",
      dataType: "string",
      description: ""
   }, {
      keyName: "evidence_details_complete",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "first_name",
      dataType: "string",
      description: ""
   }, {
      keyName: "has_evidence",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "has_qts",
      dataType: "string",
      description: ""
   }, {
      keyName: "job_title",
      dataType: "string",
      description: ""
   }, {
      keyName: "last_name",
      dataType: "string",
      description: ""
   }, {
      keyName: "name_has_changed",
      dataType: "string",
      description: ""
   }, {
      keyName: "ni_number",
      dataType: "string",
      description: ""
   }, {
      keyName: "ni_number_known",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "organisation_address_known",
      dataType: "string",
      description: ""
   }, {
      keyName: "organisation_address_line_1",
      dataType: "string",
      description: ""
   }, {
      keyName: "organisation_address_line_2",
      dataType: "string",
      description: ""
   }, {
      keyName: "organisation_name",
      dataType: "string",
      description: ""
   }, {
      keyName: "organisation_postcode",
      dataType: "string",
      description: ""
   }, {
      keyName: "organisation_town_or_city",
      dataType: "string",
      description: ""
   }, {
      keyName: "personal_details_complete",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "phone_known",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "phone_number",
      dataType: "string",
      description: ""
   }, {
      keyName: "postcode",
      dataType: "string",
      description: ""
   }, {
      keyName: "previous_misconduct_complete",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "previous_misconduct_details",
      dataType: "string",
      description: ""
   }, {
      keyName: "previous_misconduct_format",
      dataType: "string",
      description: ""
   }, {
      keyName: "previous_misconduct_reported",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "previous_name",
      dataType: "string",
      description: ""
   }, {
      keyName: "reason_leaving_role",
      dataType: "string",
      description: ""
   }, {
      keyName: "role_end_date",
      dataType: "date",
      description: ""
   }, {
      keyName: "role_end_date_known",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "role_start_date",
      dataType: "date",
      description: ""
   }, {
      keyName: "role_start_date_known",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "same_organisation",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "submitted_at",
      dataType: "timestamp",
      description: ""
   }, {
      keyName: "teacher_role_complete",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "town_or_city",
      dataType: "string",
      description: ""
   }, {
      keyName: "trn",
      dataType: "string",
      description: ""
   }, {
      keyName: "trn_known",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "user_id",
      dataType: "integer",
      description: ""
   }, {
      keyName: "work_address_line_1",
      dataType: "string",
      description: ""
   }, {
      keyName: "work_address_line_2",
      dataType: "string",
      description: ""
   }, {
      keyName: "work_location_known",
      dataType: "string",
      description: ""
   }, {
      keyName: "work_organisation_name",
      dataType: "string",
      description: ""
   }, {
      keyName: "work_postcode",
      dataType: "string",
      description: ""
   }, {
      keyName: "work_town_or_city",
      dataType: "string",
      description: ""
   }, {
      keyName: "working_somewhere_else",
      dataType: "string",
      description: ""
   }]
},
{
   entityTableName: "referrers",
   description: "",
   keys: [{
      keyName: "complete",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "first_name",
      dataType: "string",
      description: ""
   }, {
      keyName: "job_title",
      dataType: "string",
      description: ""
   }, {
      keyName: "last_name",
      dataType: "string",
      description: ""
   }, {
      keyName: "phone",
      dataType: "string",
      description: ""
   }, {
      keyName: "referral_id",
      dataType: "integer",
      description: ""
   }]
},
{
   entityTableName: "staff",
   description: "",
   keys: [{
      keyName: "confirmation_sent_at",
      dataType: "timestamp",
      description: ""
   }, {
      keyName: "confirmed_at",
      dataType: "timestamp",
      description: ""
   }, {
      keyName: "current_sign_in_at",
      dataType: "timestamp",
      description: ""
   }, {
      keyName: "current_sign_in_ip",
      dataType: "string",
      description: ""
   }, {
      keyName: "deleted_at",
      dataType: "string",
      description: ""
   }, {
      keyName: "email",
      dataType: "string",
      description: ""
   }, {
      keyName: "failed_attempts",
      dataType: "integer",
      description: ""
   }, {
      keyName: "invitation_accepted_at",
      dataType: "timestamp",
      description: ""
   }, {
      keyName: "invitation_created_at",
      dataType: "timestamp",
      description: ""
   }, {
      keyName: "invitation_limit",
      dataType: "string",
      description: ""
   }, {
      keyName: "invitation_sent_at",
      dataType: "timestamp",
      description: ""
   }, {
      keyName: "invitations_count",
      dataType: "integer",
      description: ""
   }, {
      keyName: "invited_by_id",
      dataType: "integer",
      description: ""
   }, {
      keyName: "invited_by_type",
      dataType: "string",
      description: ""
   }, {
      keyName: "last_sign_in_at",
      dataType: "timestamp",
      description: ""
   }, {
      keyName: "last_sign_in_ip",
      dataType: "string",
      description: ""
   }, {
      keyName: "locked_at",
      dataType: "string",
      description: ""
   }, {
      keyName: "manage_referrals",
      dataType: "boolean",
      description: ""
   }, {
      keyName: "remember_created_at",
      dataType: "timestamp",
      description: ""
   }, {
      keyName: "reset_password_sent_at",
      dataType: "timestamp",
      description: ""
   }, {
      keyName: "sign_in_count",
      dataType: "integer",
      description: ""
   }, {
      keyName: "unconfirmed_email",
      dataType: "string",
      description: ""
   }, {
      keyName: "view_support",
      dataType: "boolean",
      description: ""
   }]
},
{
   entityTableName: "users",
   description: "",
   keys: [{
      keyName: "current_sign_in_at",
      dataType: "timestamp",
      description: ""
   }, {
      keyName: "current_sign_in_ip",
      dataType: "string",
      description: ""
   }, {
      keyName: "email",
      dataType: "string",
      description: ""
   }, {
      keyName: "last_sign_in_at",
      dataType: "timestamp",
      description: ""
   }, {
      keyName: "last_sign_in_ip",
      dataType: "string",
      description: ""
   }, {
      keyName: "otp_created_at",
      dataType: "timestamp",
      description: ""
   }, {
      keyName: "otp_guesses",
      dataType: "integer",
      description: ""
   }, {
      keyName: "remember_created_at",
      dataType: "string",
      description: ""
   }, {
      keyName: "sign_in_count",
      dataType: "integer",
      description: ""
   }, {
      keyName: "uuid",
      dataType: "string",
      description: ""
   }]
},
{
   entityTableName: "validation_errors",
   description: "",
   keys: [{
      keyName: "details",
      dataType: "string",
      description: ""
   }, {
      keyName: "form_object",
      dataType: "string",
      description: ""
   }]
}  
  ]
});