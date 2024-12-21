import { StyleSheet, Text, View, TextInput,  TouchableWithoutFeedback } from 'react-native';
import Footer from './components/footer';

export default function Main(){
    return(
        <View style={styles.container}>
            
            <Footer mypage = {false} home= {true} storage = {false} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        position:'relative',
        backgroundColor:'#F8F5F1',
    }
})