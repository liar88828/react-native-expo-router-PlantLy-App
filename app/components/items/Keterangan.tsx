import {Text, View} from "react-native";
import React from "react";

export default function Keterangan({text}:{text:string}) {
    return (<View style={{"marginVertical": 24,}}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>
                Keterangan
            </Text>
            <Text style={{fontSize: 20,textAlign:'justify'}}>{text}</Text>
        </View>


    )
}
