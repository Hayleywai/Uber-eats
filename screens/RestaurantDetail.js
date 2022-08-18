import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../Components/restaurantDetail/About';
import MenuItems from '../Components/restaurantDetail/MenuItems';
import ViewCart from '../Components/restaurantDetail/ViewCart';

const foods = [
    {
      title: "PadThai",
      description: "With tomato sauce",
      price: "$13.50",
      image:
        "https://eatkc.com/wp-content/uploads/2019/01/Thai-Food.jpg",
    },
    {
      title: "Platter",
      description:
        "Include different kinds of small dishes🔥",
      price: "$10.20",
      image: "https://www.indulgebangkok.com/wp-content/uploads/2018/11/14-Indulge-Restaurant-Bangkok-Micha-Schulte-Photography.jpg",
    },
    {
      title: "Tom Yum Kung noodles",
      description:
        "Your favorite spicy Tom Yum Kung",
      price: "$14.50",
      image:
        "https://thethaiger.com/wp-content/uploads/2021/07/rsz_image_by_jcomp_from_freepikcom.jpg",
    },
    {
      title: "Laksa noodles",
      description:
        "Try our one of the best dishes with big prawn",
      price: "$20.50",
      image:
        "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/best_and_worst_thai_dishes_slideshow/1800x1200_slideshow_best_and_worst_thai_dishes_for_your_health.jpg",
    },
    {
      title: "Sticky Rice with Mango",
      description: "With sweet mango and coconut milk",
      price: "$13.50",
      image:
        "https://i.ndtvimg.com/i/2018-05/rice-mango_620x350_61525952416.jpg",
    },
  ];


  export default function RestaurantDetail({ route, navigation }) {
    return (
      <View>
        <About route={route} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        <MenuItems restaurantName={route.params.name} foods={foods} />
        <ViewCart navigation={ navigation } />
        
      </View>
    );
  }