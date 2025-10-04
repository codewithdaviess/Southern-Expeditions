import falls from "../assets/falls.jpg";
import chobe from "../assets/chobe.jpg";
import hwange from "../assets/hwange.jpg";

const destinations = [
  {
    id: 0,
    slug: "victoria-falls",
    name: "Victoria Falls",
    subheading:
      "The Smoke That Thunders – one of the Seven Natural Wonders of the World.",
    image: falls,
    description:
      "Victoria Falls is one of the largest and most spectacular waterfalls in the world, straddling the border between Zimbabwe and Zambia. Known locally as 'Mosi-oa-Tunya' (The Smoke That Thunders), it offers breathtaking views, thrilling adventure activities, and rich cultural experiences.",
    location: "Victoria Falls,Zimbabwe", 
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13263.512645217226!2d25.856667!3d-17.924444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931b8c9b0b0b0b0%3A0x1234567890abcdef!2sVictoria%20Falls%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1633036800000!5m2!1sen!2sus",
    experiencesCount: 32,
    bestTime:
      "The best time to visit is during the dry season (May to October), when the skies are clear and the falls are most visible.",
    accommodation:
      "Top stays include The Victoria Falls Hotel, Ilala Lodge, and nearby river camps.",
    tips: [
      "Carry light clothing and sunscreen; it can get very hot.",
      "Stay hydrated during tours.",
      "Respect local customs; always ask before taking photos.",
      "Be careful near the falls’ edge; the currents are strong.",
    ],
    nearbyAttractions: [
      "Hwange National Park",
      "Chobe National Park",
      "Okavango Delta",
    ],
    trips: [
      {
        image: falls,
        title: "Victoria Falls Adventure",
        description:
          "Experience the magnificent waterfalls and thrilling activities.",
        price: "$499",
        duration: "3 Days",
      },
      {
        image: hwange,
        title: "Hwange Safari Tour",
        description:
          "Witness wildlife in their natural habitat with guided safaris.",
        price: "$699",
        duration: "4 Days",
      },
      {
        image: chobe,
        title: "Zambezi River Cruise",
        description: "Enjoy scenic river views and sunset cruises along the Zambezi.",
        price: "$599",
        duration: "2 Days",
      },
    ],
  },
  {
    id: 1,
    slug: "chobe-national-park",
    name: "Chobe National Park",
    subheading: "Wildlife paradise along the Chobe River.",
    image: chobe,
    description:
      "Chobe National Park in Botswana is renowned for its large elephant population and boat cruises on the Chobe River.",
    location: "Kasane,Botswana",
    mapEmbed:
      "https://www.google.com/maps/embed?...ChobeEmbedLinkHere",
    experiencesCount: 25,
    bestTime: "Dry season (May–October) for peak wildlife viewing.",
    accommodation: "Chobe Safari Lodge, Mowana Safari Resort.",
    tips: [
      "Best way to see wildlife is via boat cruises.",
      "Carry binoculars for bird watching.",
    ],
    nearbyAttractions: ["Victoria Falls", "Savuti Marsh"],
    trips: [],
  },
  {
    id: 2,
    slug: "hwange-national-park",
    name: "hwange National Park",
    subheading: "Wildlife paradise along the hwange River.",
    image: hwange,
    description:
      "hwange National Park in Botswana is renowned for its large elephant population and boat cruises on the hwange River.",
    location: "Kasane,Botswana",
    mapEmbed:
      "https://www.google.com/maps/embed?...hwangeEmbedLinkHere",
    experiencesCount: 25,
    bestTime: "Dry season (May–October) for peak wildlife viewing.",
    accommodation: "hwange Safari Lodge, Mowana Safari Resort.",
    tips: [
      "Best way to see wildlife is via boat cruises.",
      "Carry binoculars for bird watching.",
    ],
    nearbyAttractions: ["Victoria Falls", "Savuti Marsh"],
    trips: [{
        image: chobe,
        title: "Zambezi River Cruise",
        description: "Enjoy scenic river views and sunset cruises along the Zambezi.",
        price: "$599",
        duration: "2 Days",
      },],
  },
  // ... repeat for Okavango, Hwange, Kalahari, Cape Town, etc.
];

export default destinations;
