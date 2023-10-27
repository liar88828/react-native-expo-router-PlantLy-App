import React from 'react';
import {Stack, useRouter} from "expo-router"
import {Button} from "react-native";

function _layout() {
    const router = useRouter()
    return (<Stack screenOptions={{
        // headerStyle: {
        //     backgroundColor: "black"
        // },
        // headerTintColor:"white"
    }}>

        <Stack.Screen
            name="index"
            options={{
                title: "Home"
            }}/>

        <Stack.Screen
            name="register/index"
            options={{
                title: "Register",
                headerRight: () => <Button
                    title={"Login"}
                    onPress={() => router.push("/login")}/>

            }}/>

        <Stack.Screen
            name="login"
            options={{
                title: "Login Modal",
                presentation: "modal"
            }}/>

        <Stack.Screen
            name="(tabs)"
            options={{headerShown: false}}
        />

        <Stack.Screen
            name="[missing]"
            options={{
                title: "Error"
            }}/>


    </Stack>);
}

export default _layout;