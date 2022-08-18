import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


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


  const styles = StyleSheet.create({
    menuItemStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 20,
    },
  
    titleStyle: {
      fontSize: 19,
      fontWeight: "600",
    },
  });
  
  export default function MenuItems({
    restaurantName,
    foods,
    hideCheckbox,
    marginLeft,
  }) {
    const dispatch = useDispatch();
  
    const selectItem = (item, checkboxValue) =>
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...item,
          restaurantName: restaurantName,
          checkboxValue: checkboxValue,
        },
      });
  
    const cartItems = useSelector(
      (state) => state.cartReducer.selectedItems.items
    );
  
    const isFoodInCart = (food, cartItems) =>
      Boolean(cartItems.find((item) => item.title === food.title));
  
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => (
          <View key={index}>
            <View style={styles.menuItemStyle}>
              {hideCheckbox ? (
                <></>
              ) : (
                <BouncyCheckbox
                  iconStyle={{ borderColor: "lightgrey", borderRadius: 0 }}
                  fillColor="green"
                  isChecked={isFoodInCart(food, cartItems)}
                  onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                />
              )}
              <FoodInfo food={food} />
              <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
            </View>
            <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        ))}
      </ScrollView>
    );
  }
  
  const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
  
  const FoodImage = ({ marginLeft, ...props }) => (
    <View>
      <Image
        source={{ uri: props.food.image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
          marginLeft: marginLeft,
        }}
      />
    </View>
  );