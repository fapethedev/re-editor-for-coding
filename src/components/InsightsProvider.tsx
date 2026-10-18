import React from "react";
import Script from "next/script";

export default function InsightsProvider() {
  return (
    <React.Fragment>
      <Script
        defer
        src="https://analytics.fapethedev.com/script.js"
        data-website-id="a7eb7672-8515-478f-98cb-5ec9b39f42c2"
        strategy="afterInteractive"
      />

      <Script
        defer
        src="https://analytics.fapethedev.com/recorder.js"
        data-website-id="a7eb7672-8515-478f-98cb-5ec9b39f42c2"
        strategy="afterInteractive"
      />

      <Script
        async
        src="https://electerious.fapethedev.com/tracker.js"
        data-ackee-server="https://electerious.fapethedev.com"
        data-ackee-domain-id="332c63e6-7f4a-403b-9c27-7b9e3aabfe30"
        strategy="afterInteractive"
      />
    </React.Fragment>
  );
}