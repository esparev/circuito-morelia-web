import React, { useEffect, useState } from 'react';
import PageHeader from '@components/PageHeader';
import StopItem from '@components/StopItem';
import useGetStops from '@hooks/useGetStops';
import { envConfig } from '@config';

const Stops = () => {
  /* const stops = [
     {
       location: 'Tecnológico de Morelia',
       distanceInTime: 5,
       distanceInKm: 5,
     },
     {
       location: 'Psicología',
       distanceInTime: 12,
       distanceInKm: 5,
     },
     {
       location: 'Lomas de Morelia',
       distanceInTime: 60,
       distanceInKm: 5,
     },
     {
       location: 'Las Américas',
       distanceInTime: 30,
       distanceInKm: 5,
     },
     {
       location: 'Plaza Fiesta Camelinas',
       distanceInTime: 73,
       distanceInKm: 5,
     },
     {
       location: 'Crucero Mil Cumbres',
       distanceInTime: 47,
       distanceInKm: 5,
     },
   ];*/
  const stops = useGetStops(envConfig.apiUrl);
  const [filter, setFilter] = useState(false);
  const [filteredStops, setFilteredStops] = useState({});

  useEffect(() => {
    document.title = 'Paradas';
    window.scrollTo(0, 0);
  }, []);

  const stopsByOutward = () => {
    setFilter(!filter);
    setFilteredStops(stops.filter((stop) => stop.wayDirection === 'Ida'));
  };

  const stopsByReturn = () => {
    setFilter(!filter);
    setFilteredStops(stops.filter((stop) => stop.wayDirection === 'Regreso'));
  };

  const distance = (lat1, lon1, lat2, lon2, unit) => {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == 'K') {
        dist = dist * 1.609344;
      }
      if (unit == 'N') {
        dist = dist * 0.8684;
      }
      return dist;
    }
  };

  const time = (distance, speed = 7) => {
    return ((distance / speed) * 100).toFixed(0);
  };

  return (
    <>
      <PageHeader
        title='Paradas'
        isFilter
        isStopPage
        filterByOutward={stopsByOutward}
        filterByReturn={stopsByReturn}
      />

      <main className='hero'>
        <div className='entities__list'>
          {filter ? (
            <>
              {filteredStops.map((stop) => (
                <StopItem
                  key={stop.id}
                  location={stop.name}
                  distanceInTime={time(
                    distance(19.720708, -101.186338, stop.latitude, stop.longitude, 'K')
                  )}
                  distanceInKm={distance(
                    19.720708,
                    -101.186338,
                    stop.latitude,
                    stop.longitude,
                    'K'
                  ).toFixed(0)}
                />
              ))}
            </>
          ) : (
            <>
              {stops.map((stop) => (
                <StopItem
                  key={stop.id}
                  location={stop.name}
                  distanceInTime={Number(time(
                    distance(19.720708, -101.186338, stop.latitude, stop.longitude, 'K')
                  ))}
                  distanceInKm={distance(
                    19.720708,
                    -101.186338,
                    stop.latitude,
                    stop.longitude,
                    'K'
                  ).toFixed(0)}
                />
              ))}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Stops;
