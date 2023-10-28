import React, {useState} from 'react';
import {Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

function RecipeDetail() {
    const data = useNavigation()
    console.log(data)
    const [isFavorite, setIsFavorite] = useState(false)
    const navigation = useNavigation()
    return (<Text>
            Test
        </Text>
        // <ScrollView
        //     className={"bg-white flex-1"}
        //     showsVerticalScrollIndicator={false}
        //     contentContainerStyle={{paddingBottom: 30}}>
        //     <StatusBar barStyle={'light-content'}/>
        //
        //     {/*Recipe Image*/}
        //     <View className={"flex-row justify-center"}>
        //         <Image
        //             source={{uri: item.img}}
        //             style={{
        //                 width: wp(98),
        //                 height: hp(50),
        //                 borderRadius: 53,
        //                 borderBottomLeftRadius: 40,
        //                 borderBottomRightRadius: 40,
        //                 marginTop: 4
        //             }}
        //         />
        //     </View>
        //
        //     {/* back Button*/}
        //     <View
        //         className={"w-full absolute flex-row justify-between items-center pt-14 "}>
        //         <TouchableOpacity
        //             onPress={() => navigation.goBack()}
        //             className={"p-2 rounded-full ml-5 bg-white"}>
        //             <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color={"#f14848"}/>
        //         </TouchableOpacity>
        //
        //         <TouchableOpacity
        //             onPress={() => setIsFavorite(!isFavorite)}
        //             className={"p-2 rounded-full  bg-white mr-5"}>
        //             <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={isFavorite ? "red" : "gray"}/></TouchableOpacity>
        //     </View>
        //
        //
        //     <View className={"px-4 flex justify-between space-y-4 pt-8"}>
        //
        //         {/*-----------name and area*/}
        //         <View
        //
        //             className={"space-y-2"}>
        //
        //             <Text style={{fontSize: hp(3)}}
        //                   className="font-bold flex-1 text-neural-700">
        //                 {item.name} ( {item?.family} )
        //             </Text>
        //
        //             <Text style={{fontSize: hp(2)}}
        //                   className="font-medium flex-1 text-neural-500">
        //                 Di tanam : {item.area}
        //             </Text>
        //         </View>
        //
        //         {/*  -----misc*/}
        //         <View entering={FadeInDown.delay(100).duration(700).springify().damping(12)}
        //               className={"flex-row justify-around my-6"}>
        //             <ItemIcons text1={item.panen} text2={"Bulan"}>
        //                 {/*<ClockIcon size={hp(4)} strokeWidth={2.5} color={"#0cc546"}/>*/}
        //             </ItemIcons>
        //
        //             <ItemIcons text1={item.harga} text2={"Harga"}>
        //                 {/*<BanknotesIcon size={hp(4)} strokeWidth={2.5} color={"#0cc546"}/>*/}
        //             </ItemIcons>
        //
        //             <ItemIcons text1={item.suhu} text2={"C"}>
        //                 {/*<FireIcon size={hp(4)} strokeWidth={2.5} color={"#0cc546"}/>*/}
        //             </ItemIcons>
        //
        //             <ItemIcons text1={item.berat} text2={"gram"}>
        //                 {/*<Square3Stack3DIcon size={hp(4)} strokeWidth={2.5} color={"#0cc546"}/>*/}
        //             </ItemIcons>
        //
        //         </View>
        //
        //         <Keterangan data={item.ket}/>
        //         <Manfaat data={item.proses.manfaat}/>
        //         <Menanam data={item.proses.menanam}/>
        //         <Memasak data={item.proses.memasak}/>
        //         {/*<YouTubes data={item.yt}/>*/}
        //     </View>
        //     {/*)}*/}
        // </ScrollView>
    );
}


export default RecipeDetail;
