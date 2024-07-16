import { StyleSheet, View} from "react-native"

export default function MainCard (props) {
    return (
        <View style={styles.mainCard}>
            <View style={styles.cardContent}>
                { props.children}
            </View>

        </View>
    )
}

const styles = StyleSheet.create ({
    mainCard: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent: {
       marginHorizontal: 18,
       marginVertical: 10,    
    }
})