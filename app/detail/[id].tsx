import React from 'react';
import {Image, ScrollView, StatusBar, Text, View} from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";
import {dataTumbuhan} from '../../assets/jsons/DataTumbuhan.json';
import Keterangan from "../components/items/Keterangan";
import Menanam from "../components/items/Menanam";
import Manfaat from "../components/items/Manfaat";
import Memasak from "../components/items/Memasak";
import Missing from "../[missing]";

export default function Id() {
    const {id} = useLocalSearchParams()
    // const router = useRouter()
    const item = dataTumbuhan.find(d => d.id === id)

    // console.log(id)
    // console.log(item)
    // const [isFavorite, setIsFavorite] = useState(false)
    if (!item) {
        return <Missing/>
    }
    return (<ScrollView
            style={{
                display: 'flex',
                backgroundColor: "#ECFDF5"
            }}
            showsVerticalScrollIndicator={false}
            // contentContainerStyle={{paddingBottom: 30}}
        >
            <StatusBar barStyle={'light-content'}/>

            <Stack.Screen options={{headerTitle: `Details ${item.name}`}}/>
            {/*Recipe Image*/}
            <View style={{"flexDirection": "row", "justifyContent": "center"}}>
                <Image
                    source={{uri: item.img}}
                    style={{
                        width: 400,
                        height: 300,
                        borderRadius: 53,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        marginTop: 4
                    }}
                />
            </View>

            {/* back Button*/}
            {/*<View*/}
            {/*    style={{*/}
            {/*        "position": "absolute",*/}
            {/*        "paddingTop": 70,*/}
            {/*        "flexDirection": "row",*/}
            {/*        "justifyContent": "space-between",*/}
            {/*        "alignItems": "center",*/}
            {/*        "width": "100%"*/}
            {/*    }}>*/}
            {/*    <TouchableOpacity*/}
            {/*        onPress={() => router.back()}*/}
            {/*        style={{*/}
            {/*            "padding": 8,*/}
            {/*            "marginLeft": 20,*/}
            {/*            "borderRadius": 25,*/}
            {/*            "backgroundColor": "#ffffff"*/}
            {/*        }}>*/}
            {/*        /!*<ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color={"#f14848"}/>*!/*/}
            {/*    </TouchableOpacity>*/}

            {/*    <TouchableOpacity*/}
            {/*        onPress={() => setIsFavorite(!isFavorite)}*/}
            {/*        style={{"padding": 8, "marginRight": 20, "borderRadius": 25, "backgroundColor": "#ffffff"}}>*/}
            {/*        /!*<HeartIcon size={hp(3.5)} strokeWidth={4.5} color={isFavorite ? "red" : "gray"}/> *!/*/}
            {/*    </TouchableOpacity>*/}
            {/*</View>*/}


            <View style={{
                "display": "flex",
                "paddingHorizontal": 16,
                "paddingTop": 32,
                "marginTop": 16,
                "justifyContent": "space-between"
            }}>

                {/*-----------name and area*/}
                <View style={{marginVertical: 8}}>
                    <Text style={{fontSize: 15, display: "flex", "fontWeight": '700'}}>
                        {item.name} ( {item?.family} )
                    </Text>

                    <Text style={{fontSize: 20, display: "flex", "fontWeight": '500'}}>
                        Di tanam : {item.area}
                    </Text>
                </View>

                {/*  -----misc*/}
                <View
                    className={"flex-row justify-around my-6"}
                    style={{"marginVertical": 24, "flexDirection": "row", "justifyContent": "space-around"}}>
                    {/*<ItemIcons text1={item.panen} text2={"Bulan"}>*/}
                    {/*    /!*<ClockIcon size={hp(4)} strokeWidth={2.5} color={"#0cc546"}/>*!/*/}
                    {/*</ItemIcons>*/}

                    {/*<ItemIcons text1={item.harga} text2={"Harga"}>*/}
                    {/*    /!*<BanknotesIcon size={hp(4)} strokeWidth={2.5} color={"#0cc546"}/>*!/*/}
                    {/*</ItemIcons>*/}

                    {/*<ItemIcons text1={item.suhu} text2={"C"}>*/}
                    {/*    /!*<FireIcon size={hp(4)} strokeWidth={2.5} color={"#0cc546"}/>*!/*/}
                    {/*</ItemIcons>*/}

                    {/*<ItemIcons text1={item.berat} text2={"gram"}>*/}
                    {/*    /!*<Square3Stack3DIcon size={hp(4)} strokeWidth={2.5} color={"#0cc546"}/>*!/*/}
                    {/*</ItemIcons>*/}

                </View>

                <Keterangan text={item.ket}/>
                <Manfaat manfaat={item.proses.manfaat}/>
                <Menanam menenam={item.proses.menanam}/>
                <Memasak memasak={item.proses.memasak}/>
                {/*<YouTubes data={item.yt}/>*/}
            </View>
            {/*)}*/}
        </ScrollView>
    )


}
