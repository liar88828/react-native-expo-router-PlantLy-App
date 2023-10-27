import React from 'react';
import {Tabs} from "expo-router";

function _layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name={"one"}
                options={{
                    headerTitle:"One",
                    tabBarLabel: "One"
                }}/>
            <Tabs.Screen
                name={"two"}
                options={{
                    headerTitle:"2",
                    tabBarLabel: "One"
                }}/>
            <Tabs.Screen
                name={"posts"}
                options={{
                    headerTitle:"Posts",
                    tabBarLabel: "Posts",
                    headerShown:false
                }}/>
        </Tabs>
    );
}

export default _layout;