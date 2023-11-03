import React from "react";
import AboutList from "../../components/items/AboutList";
import {Image, ScrollView, StatusBar, Text, View} from "react-native";
import {abouts} from "../../assets/jsons/abouts.json";
import {pembuatan} from "../../assets/jsons/pembuat.json";
import PembuatList from "../../components/items/PembuatList";

export default function Index() {
    return <ScrollView
        style={{display: 'flex', backgroundColor: "#ECFDF5"}}
        showsVerticalScrollIndicator={false}
    >

        <StatusBar barStyle={'dark-content'}/>
        <View style={{
            marginTop: 20, display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={{
                    width: 300,
                    height: 300,
                }}
            />
        </View>
        <AboutList list={abouts.list} titleAbout={abouts.h1}/>
        <PembuatList listPembuat={pembuatan.list} titlePembuat={pembuatan.h1}/>
        <View style={{
            backgroundColor: '#5ed286',
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            paddingVertical: 8
        }}>
            <Text style={{fontSize: 15}}>Create By Tim : Toga </Text>
            <Text style={{fontSize: 15}}>Copyright © 2023 </Text>
        </View>
    </ScrollView>
}
