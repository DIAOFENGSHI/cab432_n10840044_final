import React from "react";
import GoogleMapReact from "google-map-react";
import { Tweet } from "../Components/TwitterCard";
import "../CSS/App.css";

export function Map({ data }) {
  const defaultProps = {
    center: {
      lat: -27.0,
      lng: 133.0,
    },
    zoom: 3,
  };
  const showTweet = () => {
    if (data !== null && data !== "not found") {
      return data.map((book) => {
        return book.twitter.map((tweet) => {
          return (
            <div
              lat={tweet.geoLocation.lat}
              lng={tweet.geoLocation.lng}
              style={{ width: "300px", height: "50px" }}
            >
              <Tweet tweet={tweet} />
            </div>
          );
        });
      });
    } else if (data === null) {
      const temp = [
        {
          author_id: "3128870110",
          content:
            "We know you Shindiggers are music aficionados so we’d love to get some ideas from you all about acts you’ve seen recently or even just been digging online. We’re starting the line ups for next year so would love your input on who we should book. Go… https://t.co/Ka9wokUOiA",
          time: "2022-09-16",
          location: "Bath, England",
          author: "shindigfestival",
          profile_image:
            "https://pbs.twimg.com/profile_images/1552615731111632897/AUFhWQ6a_normal.jpg",
          geoLocation: {
            lat: 51.3781018,
            lng: -2.3596827,
          },
        },
        {
          author_id: "127113502",
          content:
            "RT @HOTDsource: Alright, everyone we love that you all engage under our tweets, and talk about hotd, but can you all please be respectful o…",
          time: "2022-09-16",
          location: "Chicago",
          author: "ellchicago",
          profile_image:
            "https://pbs.twimg.com/profile_images/1274745645388238848/F3chQkVk_normal.jpg",
          geoLocation: {
            lat: 41.8781136,
            lng: -87.6297982,
          },
        },
        {
          author_id: "1403227478965972998",
          content:
            "@sellkpopfess WTS All about NCT WayV\n✔ Yangyang polaroid/pola Mini Collect Book (Kolbuk) NCT 2020 - RESONANCE Pt.2 : 90's Love\n✔ Kun pc benefit Ktown SG 2021\nhttps://t.co/iVUA8Zfbd5",
          time: "2022-09-16",
          location: "Jakarta Capital Region, Indone",
          author: "wowmyustore",
          profile_image:
            "https://pbs.twimg.com/profile_images/1530733873008500736/jMwUHqcd_normal.jpg",
          geoLocation: {
            lat: -8.2087634,
            lng: 68.845599,
          },
        },
        {
          author_id: "1552824120596905985",
          content:
            "RT @HOTDsource: Alright, everyone we love that you all engage under our tweets, and talk about hotd, but can you all please be respectful o…",
          time: "2022-09-16",
          location: "hell's kitchen.",
          author: "loversrockaboy",
          profile_image:
            "https://pbs.twimg.com/profile_images/1568962418734206979/sh_hFMJq_normal.jpg",
          geoLocation: {
            lat: 40.7637581,
            lng: -73.9918181,
          },
        },
        {
          author_id: "1205385501881946113",
          content:
            "For The Love Of Cats (A Comprehensive Guide All About Cats) Ebook by @plrebookspub\n\n💰 $0.97\n📚 https://t.co/dDgIgiqqRi\n\n#Cats #Catcare #Catfights #Cattoilettraining #Catfurniture #WritingCommunity #Readers #Read #BookLover #BookPromo #Book #BookPlug #BookBoost #MustRead https://t.co/NEPuPxNDor",
          time: "2022-09-16",
          location: "Corona, CA",
          author: "eBookLingo",
          profile_image:
            "https://pbs.twimg.com/profile_images/1205409020984602625/k13v3Hpy_normal.png",
          geoLocation: {
            lat: 33.8752935,
            lng: -117.5664384,
          },
        },
        {
          author_id: "951617670885138437",
          content:
            "Come learn the Word with us! Sundays @ 9 and 11 am. (kids and online service for 11 am only)\n\nThis week, we are in our in 1 John, chapter 5 - a book about love above all else!\n\nAddress: 3050 N. Horseshoe Drive, Suite 198, Naples, FL 34104. \n\nOnline: https://t.co/AWxUmqivTo https://t.co/7zoOdE00wF",
          time: "2022-09-16",
          location: "Naples, FL",
          author: "CalvaryNaples",
          profile_image:
            "https://pbs.twimg.com/profile_images/951618244158222337/BpHu0nAb_normal.jpg",
          geoLocation: {
            lat: 26.1420358,
            lng: -81.7948103,
          },
        },
      ];
      return temp.map((tweet) => {
        return (
          <div
            lat={tweet.geoLocation.lat}
            lng={tweet.geoLocation.lng}
            style={{ width: "300px", height: "50px" }}
          >
            <Tweet tweet={tweet} />
          </div>
        );
      });
    }
  };

  return (
    <div style={{ height: "40vh", padding: 0 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAWERenNxeKPK3auMv4oYdtPm3DB1G7dzg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {showTweet()}
      </GoogleMapReact>
    </div>
  );
}
