import { StyleSheet, View, Text, Button, Image } from "react-native";
import { globalStyles, images } from "../globalstyles/global";
import MainCard from "../components/mainCard";

export default function ReviewDetails ({route, navigation} ) {

const {title, body, rating} = route.params

        return (
        <View style={globalStyles.maincontainer}>
       
        <MainCard >
            <Text style={globalStyles.titletext}>{ title }</Text>
        
            <Text>{ body }</Text>
        
           
            <View style={styles.ratingbox}>
                
                <Image source={images.ratings[rating]} />
            </View>
        </MainCard>
          
            <Button 
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
      />
        </View>
    )
}

const styles = StyleSheet.create({
ratingbox: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
}
})

