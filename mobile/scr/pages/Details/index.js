import React, { useState } from 'react';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import logoImg from '../../assets/logo.png';
import style from './style';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';


export default function Details(){

    const route = useRoute();
    const incident = route.params.incident;

    const navigation = useNavigation();
    const message = `Olá ${incident.name}, estou entrando em contato para ajudar com o caso ${incident.title}, com o valor de ${Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(incident.value)}`;

    function handleReturn(){
        navigation.navigate('Incidents');
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Heroi do caso ${incident.title}`,
            recipients: [`${incident.email}`],
            body: message
        });
    }
    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={handleReturn}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>

            </View>

            <View style={style.incident}>
                <Text style={style.incidentProperty}>ONG</Text>
                <Text style={style.incidentPropertyValue}>{incident.name}</Text>

                <Text style={style.incidentProperty}>Caso:</Text>
                <Text style={style.incidentPropertyValue}>{incident.title}</Text>

                <Text style={style.incidentProperty}>Valor:</Text>
                <Text style={style.incidentPropertyValue}>{Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
            </View>

            <View style={style.incident}>
                <Text style={style.incidentProperty}>Salve o dia!</Text>
                <Text style={style.incidentProperty}>Seja o herói desse caso.</Text>

                <Text style={style.incidentPropertyValue}>Entre em contato.</Text>
                
                <View style={style.actionContatoConteiner}>
                    <TouchableOpacity style={style.actionContato} onPress={sendWhatsApp}>
                        <Text style={style.actionContatoText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.actionContato} onPress={sendMail}>
                        <Text style={style.actionContatoText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}