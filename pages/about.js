import React from 'react';

const About = () => {

  return ( <div>
                <h2 className="text-xl font-medium text-center title-font text-gray-900 mt-0">"Your Personalized Weather Experience, Tailored Just for You!"</h2>

    <div className=" py-6 px-4 sm:px-6 lg:px-0 flex flex-col items-center justify-center">
      <div className="bg-white max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Our Weather Website</h1>
        <p className="text-gray-600 text-lg mb-6">
          Welcome to Weather-Ash! We are dedicated to providing you with accurate and up-to-date weather information from around the world.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          Our team of meteorologists and weather enthusiasts work tirelessly to ensure that the data we present is reliable and easy to understand.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What You Can Expect:</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg mb-6">
          <li>Current weather conditions, including temperature, humidity, wind speed, and more</li>
          <li>Hourly and daily forecasts for your location</li>
          <li>Weather maps with radar, satellite imagery, and other visualizations</li>
          <li>Severe weather alerts and notifications</li>
          <li>Informative articles and news related to weather and climate</li>
        </ul>
        <p className="text-gray-600 text-lg mb-6">
          Whether you're planning a trip, need to dress appropriately for the day, or simply have a fascination with weather, Weather-Ash is here to assist you.
        </p>
        <p className="text-gray-600 text-lg">
          Thank you for choosing Weather-Ash. We hope you find our website useful and enjoyable!
        </p>
    <div id="ww_6fb14c53ac52a" v='1.3' loc='id' a='{"t":"responsive","lang":"en","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'>More forecasts: <a href="https://oneweather.org/london/" id="ww_6fb14c53ac52a_u" target="_blank">Weather London tomorrow</a></div><script async src="https://app1.weatherwidget.org/js/?id=ww_6fb14c53ac52a"></script>
      </div>
       <div>
    </div>
    </div>
</div>
  );
};

export default About;
