import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerText:{
        fontSize: 15,
        color: '#737380',
    },
    headerTextBold:{
        fontWeight: "bold",
    },
    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
    },
    description:{
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },
    incidentList:{
        marginTop: 32,
    },
    incident:{
        marginTop: 32,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    incidentProperty:{
        fontSize: 16,
        color: '#41414d',
    },
    incidentPropertyValue:{
        marginTop: 8,
        fontSize: 14,
        marginBottom: 24,
        color: '#737380'
    },
    detailsButton:{
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    detailsButtonText:{
        color:'#e02041',
        fontWeight: "bold",
    },
    contactBox:{
        fontSize: 14,
        color: '#41414d',
    },

    actionContatoConteiner:{
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },

    actionContato:{
        width: '48%',
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    actionContatoText:{
        textAlignVertical: "center",
        color: '#FFF',
        fontSize: 16,
        fontWeight: "bold",
    }


});