import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  Image,
} from "react-native";
import {
  getAllLocrItems,
  returnLockrItem,
  takeLockrItem,
} from "../firebase/firebaseFunctions";

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     picture: 'a',
//     depositPrice: '1',
//     deadlineFee: '2',
//     name: 'Test',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     picture: 'a',
//     depositPrice: '1',
//     deadlineFee: '2',
//     name: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     picture: 'a',
//     depositPrice: '1',
//     deadlineFee: '1',
//     name: 'fourth Item',
//   },
// ];

const Item = ({
  name,
  depositPrice,
  deadlineFee,
  itemImage,
  duration,
  buttonMode,
  itemId,
  lockrId,
}) => (
  <View style={styles.item}>
    <Text style={styles.name} numberOfLines={1}>
      {name}
    </Text>

    <View style={styles.itemContainer2}>
      <Image
        style={{ width: 210, height: 120, borderRadius: 10 }}
        source={{ uri: itemImage }}
        resizeMode={"cover"} // cover or contain its upto you view look
      />
    </View>
    <View style={styles.itemContainer}>
      <Text style={styles.itemBody}>Deposit cost: {depositPrice}</Text>
      <Text style={styles.itemBody}>Deadline fee: {deadlineFee}</Text>
      <Text style={styles.itemBody}>Duration: {duration}</Text>
    </View>
    <Button
      title={buttonMode ? "Borrow" : "Return"}
      onPress={() => {
        console.log(buttonMode, lockrId);
        buttonMode
          ? takeLockrItem(lockrId, "bruh")
          : returnLockrItem(lockrId, "bruh");
      }}
      style={styles.button}
      color="#fff"
    />
  </View>
);

const Tileset = () => {
  const [active, setActive] = useState([]);
  const [available, setAvailable] = useState([]);

  useEffect(() => {
    async function bruh() {
      let DATA = await getAllLocrItems(2);
      let temp1 = [];
      let temp2 = [];

      for (let i = 0; i < DATA.length; i++) {
        if (DATA[i].hasOwnProperty("currUserId") && DATA[i].currUserId !== "") {
          DATA[i].buttonMode = false;
          temp1.push(DATA[i]);
        } else if (
          !DATA[i].hasOwnProperty("currUserId") ||
          DATA[i].currUserId === ""
        ) {
          DATA[i].buttonMode = true;
          temp2.push(DATA[i]);
        }
      }

      console.log("ACTIVE", temp1);
      console.log("Available", temp2);

      setActive(temp1);
      setAvailable(temp2);
    }
    bruh();
  }, []);
  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      depositPrice={item.depositPrice}
      deadlineFee={item.deadlineFee}
      itemImage={item.itemImage}
      duration={item.duration}
      itemId={item.itemId}
      buttonMode={item.buttonMode}
      lockrId={item.lockrId}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.name1}><Text style={styles.name2}>Active Lockrs</Text></View> */}

      <FlatList
        data={active}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId}
        numColumns="3"
      />
      {/* <View style={styles.name1}><Text style={styles.name2} >Available Lockrs</Text></View> */}

      <FlatList
        data={available}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId}
        numColumns="3"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,

    marginTop: 20,
    shadowColor: "#90ab9d",
    shadowRadius: 20,
  },
  item: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#558B6E",
    padding: 15,
    width: 250,
    height: 300,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 24,
    color: "#fff",
  },
  name1: {
    marginTop: 10,
    alignItems: "center",
  },
  name2: {
    fontSize: 25,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 7,
    borderRadius: 5,
  },
  itemContainer2: {
    alignItems: "center",
    marginVertical: 15,
  },
  button: {
    backgroundColor: "#fff",
    color: "#fff",
  },
});

export default Tileset;
