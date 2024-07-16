import { StyleSheet, View, Text } from "react-native";

export default function Loading () {
    return (
        <View style={styles.maincontainer}>
            <Text>App is loading...</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    maincontainer: {
        padding: 24,
    }
});