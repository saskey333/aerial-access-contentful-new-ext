import React from 'react';
import GoogleMapReact from 'google-map-react';

const googleMapKey = process.env.GATSBY_GOOGLE_MAP_KEY;

const Marker = ({ text }) => <div className="markerGoogleMaps">{text}</div>;

const ContactMap = (props) => {
  const center = {
    lat: 52.458740,
    lng: 4.590320,
  };
  const zoom = 11;

  return (
    <div className='contacts-map'>
     <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Trawlerkade%2060&amp;t=m&amp;z=11&amp;output=embed&amp;iwloc=near" aria-label="Trawlerkade 60"></iframe>
    </div>
  );
};

export default ContactMap;
