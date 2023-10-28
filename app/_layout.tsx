import React from 'react';
import {Stack} from "expo-router"

// import {Button} from "react-native";

function _layout() {
    // const router = useRouter()
    return (<Stack>
            <Stack.Screen name="index" options={{title: "Home"}}/>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            {/*<Stack.Screen name="detail" options={{title: "Detail"}}/>*/}
            <Stack.Screen name="[missing]" options={{title: "Error"}}/>
        </Stack>
    );
}

export default _layout;
