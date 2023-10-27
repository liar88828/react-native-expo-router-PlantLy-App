import React from 'react';
import {Stack, useRouter} from "expo-router";
import {Button} from "react-native";

function _layout() {
    const router = useRouter()

    return (<Stack>

            <Stack.Screen
                name="login/index"
                options={{
                    title: "Login",
                    // headerRight: () => <Button title={'Register'}
                    //                            onPress={() => router.push('/register/')}/>
                }}/>

            <Stack.Screen
                name="register/index"
                options={{
                    title: "Register",
                    headerRight: () => <Button title={'Login'}
                                               onPress={() => router.push('/login/')}/>,
                    // headerLeft:()=>router.back()
                }}/>
        </Stack>
    );
}

export default _layout;