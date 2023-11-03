import React from 'react';
import {Drawer} from 'expo-router/drawer';
import {Ionicons} from "@expo/vector-icons";

function _layout() {
    // const router = useRouter()
    return (<Drawer>
            <Drawer.Screen
                name="index"
                options={{
                    title: "Home",
                    drawerIcon: ({size, color}) => <Ionicons name={'home'} size={size} color={color}/>

                }}/>

            <Drawer.Screen
                name="[missing]"
                options={{
                    title: "Error",
                    drawerItemStyle: {height: 0}
                }}/>

            <Drawer.Screen
                name="detail"
                options={{
                    title: "detail",
                    headerShown: false,
                    drawerItemStyle: {height: 0},
                }}/>

            <Drawer.Screen
                name="about/index"
                options={{
                    title: "about",
                    drawerIcon: ({size, color}) => <Ionicons name="people-outline" size={size} color={color}/>
                }}/>

        </Drawer>
    );
}

export default _layout;
