import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import {useNavigation} from '@react-navigation/native';
import style from './style';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api';

export default function Incidents(){

    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(1);

    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [totalCasos, setTotalCasos] = useState(0);

    function handleVerDetalhes(incident){
        navigation.navigate('Details', {incident});
    }

    async function getIncidents(){
        
        setIsLoading(true);


        const res = await api.get('incidents', {params:{page}});
        setIncidents([...incidents, ...res.data]);
        setTotalCasos(res.headers['x-total-count']);
        setPage(page + 1);
        setIsLoading(false);
    }

    useEffect(()=>{
        getIncidents();
    },[]);

    return(
        <View style={style.container}>
            <View style={style.header}>
            <Image source={logoImg}/>
            <Text style={style.headerText}>
                Total de <Text> {totalCasos} casos.</Text>
            </Text>

            </View>

            <Text style={style.title}>Bem Vindo</Text>
            <Text style={style.description}>Escolha um dos casos a baixo</Text>

            <FlatList data={incidents}
                style={style.incidentList}
                keyExtractor={incident => String(incident.id)} 
                showsVerticalScrollIndicator={true}
                onEndReached={getIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({item: incident})=>(
                
                <View style={style.incident}>
                    <Text style={style.incidentProperty}>ONG</Text>
                    <Text style={style.incidentPropertyValue}>{incident.name}</Text>

                    <Text style={style.incidentProperty}>Caso:</Text>
                    <Text style={style.incidentPropertyValue}>{incident.title}</Text>

                    <Text style={style.incidentProperty}>Valor:</Text>
                    <Text style={style.incidentPropertyValue}>{Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
                    <TouchableOpacity style={style.detailsButton} onPress={()=>handleVerDetalhes(incident)}>
                        <Text style={style.detailsButtonText}>
                            Veja mais detalhes
                        </Text>
                        <Feather name="arrow-right" size={16} color="#E02041"/>
                    </TouchableOpacity>
                </View>

            )}/>

        </View>
    );
}