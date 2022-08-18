import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import React , { useState } from 'react';
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';
import OrderCompleted from '../../screens/OrderCompleted';
import LottieView from "lottie-react-native";
// import firebase from '../../firebase';



export default function ViewCart({ navigation }) { 
  const [ modalVisible, setModalVisible ] = useState(false);
  const [loading, setLoading] = useState(false);


  const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
  const total = items
  .map((item) => Number(item.price.replace('$','')))
  .reduce((prev, curr) => prev + curr, 0);
  
  const totalHKD = total.toLocaleString("zh-HK" , {
    style: "currency",
    currency: "HKD",
  });

  const addOrderCompleted = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalVisible(false);
      navigation.navigate("OrderCompleted");
    },800
    );
    
    
  };


  const styles = StyleSheet.create({
    modalContainer :{
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0, 0, 0, .7)",
    },

    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 400,
      // borderWidth: 1,
    },

    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 20,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
  });


const checkoutModalContent = () => {
  return (
    <>
      <View style={styles.modalContainer}>
        <View style={styles.modalCheckoutContainer}>
          <Text style={styles.restaurantName}>{restaurantName}</Text>
          {items.map((item, index)=>(
            <OrderItem key={index} item={item} />
          ))}
          <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalText}>Subtotal</Text>
          <Text>{totalHKD}</Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "center"}}
          >
          <TouchableOpacity style={{
            marginTop: 20,
            backgroundColor: "black",
            alignItems: "center",
            padding: 13,
            borderRadius: 30,
            width: 280,
            position: "relative",
          }}
          onPress={()=> setModalVisible(false)}
          >
            <Text style={{ color: "white", fontSize: 20}}>Checkout</Text>
            <Text style={{
              position: "absolute",
              right: 10,
              color: "white",
              fontSize: 15,
              top: 17,
            }}
            >

            {total ? totalHKD : ""}
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

  return(
    <>
    <Modal animationType='slide' visible= {modalVisible}
      transparent = {true}
        onRequestClose = {()=> setModalVisible(false)}
        >
          {checkoutModalContent()}
        </Modal>
    {total ? (
  <View 
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'row',
      position: "absolute",
      zIndex: 999,
      // marginBottom: 36,
    }}
  >
    <View 
      style={{
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <TouchableOpacity 
        style={{
          // marginTop: 20,
          backgroundColor: "black",
          flexDirection: "row",
          justifyContent: "flex-end",
          padding: 15,
          borderRadius: 30,
          width: 280,
          position: "absolute",
          top: 580,
        }}



        onPress = {() => {
          addOrderCompleted();
        }}
      >
        <Text style={{ color: "white", fontSize: 20, marginRight: 30}}>
        Checkout
        </Text>
        <Text style={{ color: "lightgrey", fontSize: 17, top: 3}}>{totalHKD}</Text>
      </TouchableOpacity>
    </View>
    </View>
    ) : (
      <></>
      )}
      {loading ? (
        <View
      style={{
        backgroundColor: "black",
        position: "absolute", 
        opacity: 0.6,
        justifyContent: "center",
        flexDirection: "flex-end",
        height: 1000,
        weight: 200,
        
        }}
        >
        <LottieView
            style={{ height: 200, marginLeft:30, marginRight: 1000, marginBottom: 300 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      )  : (
          <></>
          )}
    </>
  );
}




