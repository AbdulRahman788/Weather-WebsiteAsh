import React, { useEffect } from 'react';

const WeatherWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tomorrow" data-location-id="122795,050388,102874,007541,132132,007408" data-language="EN" data-unit-system="METRIC" data-skin="dark" data-widget-type="aqi6" style={{ paddingBottom: '22px', position: 'relative' }}>
      <a href="https://www.tomorrow.io/weather-api/" rel="nofollow noopener noreferrer" target="_blank" style={{ position: 'absolute', bottom: '0', transform: 'translateX(-50%)', left: '50%' }}>
        <img alt="Powered by the Tomorrow.io Weather API" src="https://weather-website-client.tomorrow.io/img/powered-by.svg" width="250" height="18" />
      </a>
    </div>
  );
};

export default WeatherWidget;
