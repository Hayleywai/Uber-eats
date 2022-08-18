import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
        image_url:
        "https://www.sassyhongkong.com/wp-content/uploads/2020/06/beachside-restaurants-bars-waterfront-beach-eat-drink.jpg",
        Categories :["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:"https://storage.googleapis.com/benihana-2020-238473673204-wp-data/wp-media/steak_and_lobster.jpg",
        Categories :["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:"https://indiasgrills.com/wp-content/uploads/2020/10/bg9.jpg",
        Categories :["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];


export default function RestaurantItems({ navigation, ...props }) {
    return (
      <>
        {props.restaurantData.map((restaurant, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{ marginBottom: 30 }}
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                name: restaurant.name,
                image: restaurant.image_url,
                price: restaurant.price,
                reviews: restaurant.review_count,
                rating: restaurant.rating,
                categories: restaurant.categories,
              })
            }
          >
            <View
              style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
            >
              <RestaurantImage image={restaurant.image_url} />
              <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
            </View>
          </TouchableOpacity>
        ))}
      </>
    );
  }
  
  const RestaurantImage = (props) => (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
  
  const RestaurantInfo = (props) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  );