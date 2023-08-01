import moment from "moment/moment";
import React from "react";
import * as WebBrowser from 'expo-web-browser';
import { View,Text,StyleSheet,SafeAreaView , Image,Pressable} from "react-native";


const Article = (props) => {

    const goToSource = () => {
        WebBrowser.openBrowserAsync(props.url);
    }
    return (
        <Pressable style={styles.container} onPress={goToSource}>
            <Image source={{
                uri:props.urlToImage
            }} 
            style={styles.image}
            />

            <View style={{padding:20}}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>
                    {props.description}
                </Text>
                <View style={styles.data}>
                    <Text style={styles.heading}>by: <Text style={styles.author}>{props.author}</Text></Text>
                    <Text style={styles.date}>{moment(props.publishedAt).format('MMM Do yy')}</Text>
                </View>
                <View style={{marginTop:10}}>
                   <Text>source: <Text style={styles.source}>{props.sourceName}</Text></Text>
                </View>
            </View>
        </Pressable>
    )
}
export default Article;

const styles = StyleSheet.create({
    container:{
        width:'90%',
        alignSelf:'center',
        borderRadius:40,
        shadowOpacity:0.1,
        shadowColor:'#000',
        shadowOffset:{
            height:5,
            width:5,
        },
        backgroundColor:'#fff',
        marginTop:20

    },
    image:{
        height:200,
        marginTop:30,
        width:'100%',
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    },
    title:{
        fontSize:18,
        fontWeight:600,
        marginTop:10
    },
    description:{
        fontSize:15,
        fontWeight:'400',
        marginTop:5
    },
    data:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10

    },
    heading:{

    },
    author:{
        fontWeight:'bold',
        fontSize:15
    },
    date:{
        fontWeight:'bold',
        color:"#e63946",
        fontSize:15
    },
    source:{
        color:"#e63946",
        fontWeight:"bold",
        fontSize:18
    }
})