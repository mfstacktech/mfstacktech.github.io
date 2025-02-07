import React, { useEffect } from "react";

const ConvertKitForm = () => {
  useEffect(() => {
    // Load script for ConvertKit
    const script = document.createElement("script");
    script.src = "https://f.convertkit.com/ckjs/ck.5.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <form
      action="https://app.kit.com/forms/7657561/subscriptions"
      className="seva-form formkit-form"
      method="post"
      data-sv-form="7657561"
      data-uid="b5925d1137"
      data-format="inline"
      data-version="5"
      data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
      min-width="400 500 600 700 800"
      style={{ backgroundColor: "rgb(249, 250, 251)", borderRadius: "4px" }}
    >
      <div className="formkit-background" style={{ opacity: 0.2 }}></div>
      <div data-style="minimal">
        <div
          className="formkit-header"
          data-element="header"
          style={{
            color: "rgb(77, 77, 77)",
            fontSize: "27px",
            fontWeight: 700,
          }}
        >
          <h2>Join the Newsletter</h2>
        </div>
        <div
          className="formkit-subheader"
          data-element="subheader"
          style={{ color: "rgb(104, 104, 104)", fontSize: "18px" }}
        >
          Subscribe to get our latest content by email.
        </div>
        <ul
          className="formkit-alert formkit-alert-error"
          data-element="errors"
          data-group="alert"
        ></ul>
        <div
          data-element="fields"
          data-stacked="false"
          className="seva-fields formkit-fields"
        >
          <div className="formkit-field">
            <input
              className="formkit-input"
              name="email_address"
              aria-label="Email Address"
              placeholder="Email Address"
              required=""
              type="email"
              style={{
                color: "rgb(0, 0, 0)",
                borderColor: "rgb(227, 227, 227)",
                borderRadius: "4px",
                fontWeight: 400,
              }}
            />
          </div>
          <button
            data-element="submit"
            className="formkit-submit formkit-submit"
            style={{
              color: "rgb(255, 255, 255)",
              backgroundColor: "rgb(22, 119, 190)",
              borderRadius: "4px",
              fontWeight: 400,
            }}
          >
            <div className="formkit-spinner">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span className="">Subscribe</span>
          </button>
        </div>
        <div
          className="formkit-guarantee"
          data-element="guarantee"
          style={{
            color: "rgb(77, 77, 77)",
            fontSize: "13px",
            fontWeight: 400,
          }}
        >
          We won't send you spam. Unsubscribe at any time.
        </div>
        <div className="formkit-powered-by-convertkit-container">
          <a
            href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"
            data-element="powered-by"
            className="formkit-powered-by-convertkit"
            data-variant="dark"
            target="_blank"
            rel="nofollow"
          >
            Built with Kit
          </a>
        </div>
      </div>
    </form>
  );
};

export default ConvertKitForm;
