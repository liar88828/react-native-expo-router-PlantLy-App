import React, {useEffect, useState} from "react";
import {ScrollView, StatusBar, View} from "react-native";
import SearchInput from "../../components/Heads/SearchInput";
import {categoriesPlant} from '../../assets/jsons/CategoriesPlant.json';
import Flat from "../../components/flat/Flat";

export default function Index() {
    const [categories, setCategories] = useState<{ name: string; img: string; }[]>([])
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
        setCategories(categoriesPlant)
    }, [])


    return <View style={{
        display: 'flex',
        backgroundColor: "#ECFDF5"
    }}>
        <StatusBar barStyle={"dark-content"}/>
        <ScrollView>

            <SearchInput setSearch={setSearch} search={search}/>
            {categories.length > 0 && <Flat
                search={search}/>}

        </ScrollView>
    </View>
}
