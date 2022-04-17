import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    picture: 'a',
    depositCost: '1',
    deadlineFee: '2',
    title: 'Test',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    picture: 'a',
    depositCost: '1',
    deadlineFee: '2',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    picture: 'a',
    depositCost: '1',
    deadlineFee: '1',
    title: 'fourth Item',
  },
];

const Item = ({ title, depositCost, deadlineFee }) => (
  <View style={styles.item}>
    <Text style={styles.title} numberOfLines={1}>{title}</Text>
    <View style = {styles.itemContainer}>
        <Text style = {styles.itemBody}>Deposit cost: {depositCost}</Text>
        <Text style = {styles.itemBody}>Deadline fee: {deadlineFee}</Text>
    </View>
    <Button title="Return" style = {styles.button} color= "#fff"/>
    
    
  </View>
);

const Tileset = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} 
        depositCost = {item.depositCost} 
        deadlineFee = {item.deadlineFee}
        />
  );

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.title1}><Text >Active Lockrs</Text></View>
    
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns = "3"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    
    marginTop: StatusBar.currentHeight || 0,
    shadowColor: "#90ab9d",
    shadowRadius: 20,
  },
  item: {
    borderRadius:10,
    overflow: 'hidden',
    backgroundColor: "#558B6E",
    padding: 20,
    width: 250,
    height: 350,
    marginVertical: 8,
    marginHorizontal: 16,
    
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
  title1:{
    alignItems: "center",
  },
  itemContainer:{
    backgroundColor: '#fff',
    padding: 7,
    borderRadius: 5,
  },

  button:{
    backgroundColor: "#fff",
    color: "#fff",
  },
});

export default Tileset;