import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import LottieView from "lottie-react-native";
import MenuItems from '../Components/restaurantDetail/MenuItems';
import { ScrollView } from 'react-native';


export default function OrderCompleted() {

    const [lastOrder, setLastOrder] = useState({
        items:[
            {
            title: "PadThai",
            description: "With tomato sauce",
            price: "$13.50",
            image:
            "https://eatkc.com/wp-content/uploads/2019/01/Thai-Food.jpg",
            },
    ],
    });
    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
    const total = items
    .map((item) => Number(item.price.replace('$','')))
    .reduce((prev, curr) => prev + curr, 0);
    
    const totalHKD = total.toLocaleString("zh-HK" , {
      style: "currency",
      currency: "HKD",
    });

    // useEffect(() => {
    //     const db = addOrderCompleted();
    //     const unsubscribe = db
    //       .collection("orders")
    //       .orderBy("createdAt", "desc")
    //       .limit(1)
    //       .onSnapshot((snapshot) => {
    //         snapshot.docs.map((doc) => {
    //           setLastOrder(doc.data());
    //         });
    //       });
    
    //     return () => unsubscribe();
    //   }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    <View style={{
        margin: 15,
        alignItems: "center",
        height: "100%",
    }}
    >
        <LottieView 
            style={{height: 100, alignSelf: "center", marginBottom: 30}}
            source={require("../assets/animations/check-mark.json")}
            autoPlay
            speed={0.5}
            loop={false}
        />
        <Text style={{fontSize: 20, fontWeight: "bold"}}>
            Your order at {restaurantName} has been placed for {totalHKD}
        </Text>
        <ScrollView>
        <MenuItems foods={lastOrder.items} 
        hideCheckbox={true}
        marginLeft={10} 

        />
        <LottieView 
            style={{height: 230, alignSelf: "center", marginBottom: 50}}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
        />
        </ScrollView>
        </View>
    </SafeAreaView>
  );
}