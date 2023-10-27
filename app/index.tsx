import React from 'react';
import {Button, Text, View} from "react-native";
import {Link} from "expo-router";

{/*--------------  Menu Utama  -------------------*/}

function Index() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            {/*<StatusBar style={"light"}/>*/}
            <Text>Home Page</Text>

            <View style={{
                // display: "flex",
                flex:1,
                gap:10,
                justifyContent: "center",
                alignItems: "center"}}>
                <Link href={"/register/"} asChild>
                    <Button title={"Open the register"}/>
                </Link>

                <Link href={"/one"} asChild>
                    <Button title={"Open tab one"}/>
                </Link>

                <Link href={"/two"} asChild>
                    <Button title={"Open tab two"}/>
                </Link>


                {/*<Link href={"/error"} asChild>*/}
                {/*    <Button title={"error"}/>*/}
                {/*</Link>*/}
            </View>
        </View>
    );
}

export default Index;