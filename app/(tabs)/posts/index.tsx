import React from 'react';
import {View} from "react-native";
import {Link} from "expo-router";


export default function Page() {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Link style={{fontSize: 20}} href="/posts/1">open post 1</Link>
            <Link style={{fontSize: 20}} href="/posts/2">open post 2</Link>
            <Link style={{fontSize: 20}} href="/posts/3">open post 3</Link>
        </View>
    );
}