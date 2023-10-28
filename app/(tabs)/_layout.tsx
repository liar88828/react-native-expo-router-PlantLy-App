import React from 'react';
import {Tabs} from "expo-router";

function _layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name={"one"}
                options={{
                    headerTitle: "One",
                    tabBarLabel: "One"
                }}/>
            <Tabs.Screen
                name={"two"}
                options={{
                    // tabBarIcon:''
                    // headerTitle: "2",
                    // tabBarLabel: "One"
                }}
            />

            <Tabs.Screen
                name={"posts"}
                options={{
                    headerTitle: "Posts",
                    tabBarLabel: "Posts",
                    headerShown: false,

                }}/>

            {/*<Tabs.Screen*/}
            {/*    name={"detail"}*/}
            {/*    options={{*/}
            {/*        headerTitle: "Detail",*/}
            {/*        tabBarLabel: "Detail",*/}
            {/*        headerShown: false*/}
            {/*    }}/>*/}


        </Tabs>
    );
}

export default _layout;
