import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, View} from "react-native";
import {categoriesPlant} from '../assets/jsons/CategoriesPlant.json';
import ListPlants from "../components/ListPlants";
import Heads from "../components/Heads/Heads";
import SearchInput from "../components/Heads/SearchInput";

{/*--------------  Menu Utama  -------------------*/
}

function Index() {
    const [categories, setCategories] = useState<{ name: string; img: string; }[]>([])
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
        setCategories(categoriesPlant)
    }, [])


    return (
        <View style={{
            display: 'flex',
            backgroundColor: "#ECFDF5"
        }}>
            <StatusBar barStyle={"dark-content"}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 50}}
            >
                <Heads/>
                <SearchInput setSearch={setSearch} search={search}
                />

                {categories.length > 0 && <ListPlants //plant={dataTumbuhan}
                    search={search}/>}
            </ScrollView>
        </View>
    );
}

export default Index;
