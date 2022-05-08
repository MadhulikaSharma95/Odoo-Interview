const pricingText = document.querySelector(".pricing");
$.ajax({
  type: "GET",
  crossDomain: true,
  dataType: "jsonp",
  url: "https://www.odoo.com/pricing#pl=112&version_id=33&num_users=10&app_website=on&app_project=on&num_iot_boxes=5&app_iot=on&hosting=online&odoosh_workers=1&odoosh_storage=5&odoosh_staging=1&implementation_service=self&pack=25&force_country=US&integrating_partner_id=0&price_by=monthly",
  success: function (text) {
    /**
     * Again we're unable to fetch the data because of CORS issue.
     * If we were able to get this data though, we could use it to display the pricing by fetching
     * the value of the div with the class "openerp_enterprise_pricing_price_monthly"
     * If we wanted to adjust any of the values, we can parametrize the query params and pass them in and get the data we want
     * Unfortunately i could not get past the CORS issue, but the above illustrates how to do it
     * */
    pricingText.textContent =
      "$510.00" || $("#openerp_enterprise_pricing_price_monthlymyDiv");
  },
  error: function (xhr, status, error) {
    pricingText.textContent = "Error";
  },
});

// $.get("https://www.odoo.com/pricing",
// { num_users: 10, num_iot_boxes: 5, app_website: on, app_project: on, num_iot_boxes: 5, app_iot:on },
//       function(data){
//   alert("Data Loaded: " + data);
// });

// const response = fetch(
//   "https://www.odoo.com/pricing#pl=112&version_id=33&num_users=10&app_website=on&app_project=on&num_iot_boxes=5&app_iot=on&hosting=online&odoosh_workers=1&odoosh_storage=5&odoosh_staging=1&implementation_service=self&pack=25&force_country=US&integrating_partner_id=0&price_by=monthly",
//   { mode: "no-cors" }
// ).then((res) => console.log(res.text()));
// // .then((res) => console.log(res));

// // console.log({ response });
