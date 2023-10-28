import React from 'react';
import {Text, View} from "react-native";

export default function Missing() {
    return (
        <View>
            <Text style={{fontSize: 20, color: "red"}}>
                Not found!!!
            </Text>
        </View>
    );
}
