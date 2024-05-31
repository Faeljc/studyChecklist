import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Tarefas({ data, deleteItem }) {
    return (
        <View style={styles.list} >
            <View><TouchableOpacity onPress={deleteItem}><FontAwesome name="trash-o" size={24} color="#d22e2e" /></TouchableOpacity></View><Text style={styles.listText}> {data.item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    list: {
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
        height: 42,
        backgroundColor: 'rgba(196,196,196,0.20)',
        flexDirection: 'row',
    }
})