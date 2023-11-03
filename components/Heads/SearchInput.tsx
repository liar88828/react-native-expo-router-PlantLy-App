import {TextInput, View} from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";

export default function SearchInput({setSearch,search  }: {
    setSearch: React.Dispatch<React.SetStateAction<string>>,

    search: string
}) {

    // const [reset,setReset]=useState('')
    return <View
        style={{
            marginVertical: 16,
            position: "relative",
            marginHorizontal: 16,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 25,
        }}>

        <TextInput
            onChange={e => setSearch(e.nativeEvent.text)}
            placeholder="search any plant"
            // defaultValue={search}
            value={search}
            style={{
                fontSize: 16,
                paddingVertical: 5,
                "paddingLeft": 16,
                "lineHeight": 24,
                "letterSpacing": 2,
                fontWeight: "bold",

                borderWidth: 2,
                borderColor: "gray",
                borderRadius: 10,
                width: '100%',
                backgroundColor: "rgba(255,255,255,0.55)",

            }}
        />
        <View
            style={{
                "padding": 6,
                "borderRadius": 25,
                // "backgroundColor": "#ffffff",
                position: "absolute",
                right: 2

            }}
            //className="bg-white rounded-full p-3"
        >
            <Ionicons name="close-circle" color={'red'} size={35}
                      onPress={() => {
                          setSearch('')
                          // setReset('')
                      }
                      }/>
            {/*<MagnifyingGlassIcon size={10}*/}
            {/*                     strokeWidth={3}*/}
            {/*                     color={"gray"}/>*/}
        </View>
    </View>;
}
