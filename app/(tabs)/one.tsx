import React from 'react';
import {Button, Text, View} from "react-native";
import {useRouter} from "expo-router";


export default function Page() {
    const router = useRouter()
    return (
        <View>
            <Text style={{fontSize: 20}}>This is tab one</Text>
            <Button title={"Go Back"} onPress={() => router.back()}/>
        </View>
    );
}