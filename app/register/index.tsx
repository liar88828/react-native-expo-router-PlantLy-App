import React from 'react';
import {Button, Text, View} from "react-native";
import {Link} from "expo-router";

function Index() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text>Page</Text>
            <Link href={"/"} asChild>
                <Button title={"back"}/>
            </Link>

            <Link href={"/login"} asChild>
                <Button title={"open login modal"}/>
            </Link>

        </View>
    );
}

export default Index;