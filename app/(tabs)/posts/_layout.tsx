import React from 'react';
import {Stack} from "expo-router";

function _layout() {
    return (<Stack>

            <Stack.Screen
                name="index"
                options={{
                    title: "Posts"
                }}/>
            <Stack.Screen
                name="[id]"
                options={{
                    title:"Post detail"
                }}/>
    </Stack>
    );
}

export default _layout;