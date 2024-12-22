import { StyleSheet, Text, View, TextInput,  TouchableOpacity } from 'react-native';
import Footer from './components/footer';
import BK from '../assets/Better Kick.svg';
import Icon from '../assets/Icon.svg';
import Ms from '../assets/ms.svg';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { IPContext } from '../contexts';
import Loading from './loading'

export default function Main({route}){
    const navigation = useNavigation();
    const {IP} = useContext(IPContext);
    const {userId} = route.params
    const [loading, setLoading] = useState(false);
    
    const postData = async ()=>{
        setLoading(true)
        setTimeout(()=>navigation.navigate('Result', {list :[2,3,1], userId : userId}), 3000) 
        
        // return 
        // try{
        //     const res = await fetch(`http://${IP}/solution`, {
        //         method:'POST',
        //         headers:{ 
        //             'Content-Type':'application/json'
        //         },
        //         body:JSON.stringify({
        //             user_id:userId
        //         })
        //     })
        //     if(res.ok){
                
        //     }
        //     else{
        //         console.log(res.status);
        //     }
        // }catch(error){
        //     console.log(error);
        // }finally{
        //     setLoading(false);
        // }
    }
    if (loading) {
        return <Loading/>;
    }
    return(
        <View style={styles.container}>
            <View style={styles.wrap}>
                <BK width={180} style={[{marginBottom:20}]}/>
                <View style={[{marginBottom:25}]}>
                    <Text style={styles.title}>안녕하세요. 홍준님</Text>
                    <Text style={styles.title2}>스트레스를 많이 받으셨나요?</Text>
                </View>
                
                <View style={styles.section} >
                    <Icon />
                    <View>
                        <Text style={[{color:'#CA848A'}, {fontSize:16}]}>스트레스 해소 방법 알아보기</Text>
                        <TouchableOpacity style={styles.findBox} onPress={postData}>
                            <Text style={styles.findText}>Find Out ></Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.title}>최근 저장한 스트레스 해소방법</Text>
                <View style={styles.section2}>
                    <Text style={styles.title3}>명상</Text>
                    <Ms style={[{marginBottom:10}]}/>
                    <Text style={[{marginBottom:10}]}>나는야 명상</Text>
                    <TouchableOpacity style={styles.Btn}>
                        <Text style={styles.detail}>상세 보기</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer mypage = {false} home= {true} storage = {false} />
        </View>
    )
}

const styles = StyleSheet.create({
    title3:{
        color:'#CA848A',
        fontSize:16,
        fontWeight:'600',
        marginBottom:10
    },
    section2:{
        width:'100%',
        backgroundColor:'white',
        borderRadius:10,
        padding:20,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        shadowColor: '#000', // 그림자 색상
        shadowOffset: { width: 0, height: 0 }, // X: 0, Y: 0
        shadowOpacity: 0.1, // 그림자 투명도 (10%로 설정)
        shadowRadius: 10, // 강도 (Blur 효과)
        elevation: 10, // 안드로이드에서 그림자 효과를 적용하려면 elevation 필요
    },
    detail:{
        color:'#CA848A',
        fontSize:14,
        textAlign:'center',
        fontWeight:'700'
    },
    findText:{
        textAlign:'center',
        fontSize:18,
        color:'#CA848A',
        fontWeight:'bold'
    },
    findBox:{
        paddingTop:4,
        paddingBottom:4,
        marginTop:10,
        borderRadius:10,
        borderWidth: 2,         // 테두리 두께
        borderColor: '#CA848A',   // 테두리 색상
        borderStyle: 'solid',
    },
    Btn:{
        borderWidth: 2,         // 테두리 두께
        borderColor: '#CA848A',   // 테두리 색상
        borderStyle: 'solid',
        borderRadius:10,
        paddingTop:8,
        paddingBottom:8
    },
    section:{
        width:'100%',
        backgroundColor:'white',
        borderRadius:10,
        padding:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        shadowColor: '#000', // 그림자 색상
        shadowOffset: { width: 0, height: 0 }, // X: 0, Y: 0
        shadowOpacity: 0.1, // 그림자 투명도 (10%로 설정)
        shadowRadius: 10, // 강도 (Blur 효과)
        elevation: 10, // 안드로이드에서 그림자 효과를 적용하려면 elevation 필요
        marginBottom:20
    },
    container:{
        flex: 1,
        position:'relative',
        backgroundColor:'#F8F5F1',
    },
    wrap:{
        position:'absolute',
        top:80,
        left:30,
        width:320,
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:10
    },
    title2:{
        color:'#7A7A7A'
    }
})