/* eslint-disable import/namespace */
import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container:{
        marginTop:50,
        paddingLeft:16,
        paddingRight:16,
        flex:1,
    },
    header:{
        height:'10%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle:{
        height:'100%',
        justifyContent: 'space-evenly',
    },
    title:{
        fontSize: 28,
        fontWeight: "700",
    },
    status:{
        fontSize: 20,
        fontWeight: "400",
    },
    cost:{
        fontSize: 20,
        fontWeight: "700",
    },
    projectImage:{
        marginTop:16,
        alignItems:'center'
    }


})
export default styles