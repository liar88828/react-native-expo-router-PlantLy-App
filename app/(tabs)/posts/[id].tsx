import React from 'react';
import {Text, View} from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";


export default function Page() {
    const {id} = useLocalSearchParams()
    // console.log(id)
    return (
        <View>
            <Stack.Screen
                options={{
                    headerTitle: `Post Details ${id}`
                }}/>
            <Text style={{fontSize: 30}}>This is post detail page {id} </Text>
        </View>
    );
}