import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'

export default function Categories(
    {
        categories,
        activeCategory,
        handleCategory
    }: {
        categories: { name: string, img: string }[],
        activeCategory: string,
        handleCategory: (category: any) => void
    }
) {
// console.log(categories)
    return (
        <View
            style={{
                "marginTop": 20,
                paddingVertical:10,
                borderTopLeftRadius:25,
                borderTopRightRadius:25,
                backgroundColor: "rgba(185,255,180,0.61)"
            }}>
            <ScrollView
                style={{
                    "marginLeft": 5,
                    // "marginRight": 10
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
            >
                {categories.map((cat: any, index: number) => {
                    let isActive = cat.name === activeCategory
                    let activeButtonClass = isActive
                        ? "#34D399"
                        : "#505050"

                    return (
                        <TouchableOpacity
                            style={{
                                "display": "flex",
                                "marginTop": 4,
                                "marginRight": 20,
                                "alignItems": "center",
                            }}
                            key={`${index + cat.name}`}
                            onPress={() => handleCategory(cat.name)}
                        >

                            <View style={{"borderRadius": 25, "padding": 2, "backgroundColor": activeButtonClass}}>
                                <Image source={{uri: cat.img}} style={{width: 50, height: 50, borderRadius: 25,}}/>
                            </View>

                            <Text
                                style={{fontSize: 16}}>
                                {cat.name}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}
