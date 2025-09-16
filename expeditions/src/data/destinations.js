import falls from "../assets/falls.jpg";
import chobe from "../assets/chobe.jpg";
import okavango from "../assets/delta.jpg";
import hwange from "../assets/hwange.jpg";
import kalahari from "../assets/kalahari.jpg";
import capetown from "../assets/capetown.jpg";
import etoshanationalpark from "../assets/etoshanationalpark.jpg";
import liwondenationalpark from "../assets/liwondenationalpark.jpg";
import greatzimbabwe from "../assets/greatzimbabwe.jpg";

const destinations = [
  {
    id: 0,
    slug: "victoria-falls",
    name: "Victoria Falls",
    subheading: "The Smoke That Thunders – one of the Seven Natural Wonders of the World.",
    image: falls,
    experiencesCount: 32,
    trips: [
      {
        image: falls,
        title: "Victoria Falls Adventure",
        description: "Experience the magnificent waterfalls and thrilling activities.",
        price: "$499",
        duration: "3 Days",
      },
      {
        image: hwange,
        title: "Hwange Safari Tour",
        description: "Witness wildlife in their natural habitat with guided safaris.",
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
    experiencesCount: 25,
    trips: [],
  },
  {
    id: 2,
    slug: "okavango-delta",
    name: "Okavango Delta",
    subheading: "The world’s largest inland delta.",
    image: okavango,
    experiencesCount: 20,
    trips: [],
  },
  {
    id: 3,
    slug: "hwange-national-park",
    name: "Hwange National Park",
    subheading: "Home to large elephant herds and diverse wildlife.",
    image: hwange,
    experiencesCount: 22,
    trips: [],
  },
  {
    id: 4,
    slug: "kalahari-desert",
    name: "Kalahari Desert",
    subheading: "Endless dunes and striking desert landscapes.",
    image: kalahari,
    experiencesCount: 15,
    trips: [],
  },
  {
    id: 5,
    slug: "cape-town",
    name: "Cape Town",
    subheading: "Table Mountain and stunning beaches.",
    image: capetown,
    experiencesCount: 30,
    trips: [],
  },
  {
    id: 6,
    slug: "etosha-national-park",
    name: "Etosha National Park",
    subheading: "Unique salt pan and amazing wildlife.",
    image: etoshanationalpark,
    experiencesCount: 18,
    trips: [],
  },
  {
    id: 7,
    slug: "liwonde-national-park",
    name: "Liwonde National Park",
    subheading: "Beautiful riverside park in Malawi.",
    image: liwondenationalpark,
    experiencesCount: 14,
    trips: [],
  },
  {
    id: 8,
    slug: "great-zimbabwe",
    name: "Great Zimbabwe",
    subheading: "Ancient ruins rich in history and culture.",
    image: greatzimbabwe,
    experiencesCount: 10,
    trips: [],
  },
];

export default destinations;
