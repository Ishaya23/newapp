import react, { useState } from "react";
import { View,Text,StyleSheet,FlatList } from "react-native";
import SearchBar from "../Components/searchBar";
import Article from "../Components/Article";




const SearchScreen = () => {
    const[searchText, setSearchText] = useState();
    const [articles,setAticles] = useState([])

    const SearchArticle = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a302c60794a346e1bf5ea5593437d183',{
            params:{
              category:"technology",
              q:searchText
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
    return (
        <View style = {styles.container}>
            <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={setAticles}/>
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
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    }
})