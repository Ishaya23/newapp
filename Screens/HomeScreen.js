import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet,SafeAreaView,ScrollView, FlatList } from "react-native";
import Article from "../Components/Article";
import axios from "axios";

const HomeScreen = () => {
  const[articles, setAticles] = useState([]);
    const getNews = () => {
            axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a302c60794a346e1bf5ea5593437d183',{
              params:{
                category:"technology"
              }
            })
        .then((response) => {
          // handle success
          console.log(response.data.articles);
          setAticles(response.data.articles)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
          }

          useEffect(() =>{
            getNews()
          },[])

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <FlatList 
          data={articles}
          renderItem={({item})=> 
          <Article 
          urlToImage= {item.urlToImage}
          title = {item.title}
          desscription = {item.desscription}
          author = {item.author}
          publishedAt = {item.publishedAt}
          sourceName = {item.source.name}
          
          />}
          keyExtractor={(item) => item.title}
          />
        </View>
      </SafeAreaView>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container:{

    }
})