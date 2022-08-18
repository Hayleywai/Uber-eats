import React from 'react';
import { useEffect , useState, useCallback} from 'react';
import { View, Text, SafeAreaView, ScrollView  } from 'react-native';
import { Divider } from 'react-native-elements';
import BottomTabs from '../Components/Home/BottomTabs';
import Categories from '../Components/Home/Categories';
import HeaderTabs from '../Components/Home/HeaderTabs';
import RestaurantItems, { 
  localRestaurants, 
} from '../Components/Home/RestaurantItems';
import SearchBar from '../Components/Home/SearchBar';


const YELP_API_KEY = 
"JmrxxwPFW6XSHtvfEvlj71Fz8Q3YR1OF6gJuR7S36UN7T5Zl4s3MoKhtYOaOcDN9U48368AotKJg9Olo5JpPpSxsFX0HwxrifuQSd0rusFcYZz8daF_VwpussuHDYnYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Hong Kong");
  const [activeTab, setActiveTab] = useState("Delivery");


  const getRestaurantsFromYelp = useCallback(() => {
    const yelpUrl = 
    `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    console.log('yelpUrl', yelpUrl)
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>{
        console.log('jack return data', json.businesses)
      
        setRestaurantData(
          // json.businesses.filter((business) => {
            json.businesses.filter((business) =>
            // if(business.transactions.length) {
            //   console.log('business.transactions', business.transactions)
            //   console.log('activeTab.toLowerCase()', activeTab.toLowerCase())
            // }
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
        setRestaurantData(json.businesses)
      }
      );
  }, [city]);


  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
