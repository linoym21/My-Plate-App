

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CaloriePage = () => {
    const [calories, setCalories] = useState(0);

    useEffect(() => {
        // פונקציה שמביאה את ערכי הקלוריות מהשרת או מאחסון מקומי
        fetchCaloriesFromServer();
    }, []);

    const fetchCaloriesFromServer = () => {
        // הבאת ערכי הקלוריות מהשרת
        // ניתן להשתמש ב Axios או בפונקציות fetch כדי לשלוח בקשות HTTP לשרת
        // לדוגמה:
        fetch('https://api.example.com/calories')
            .then((response) => response.json())
            .then((data) => setCalories(data.calories))
            .catch((error) => console.error(error));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ערכים קלוריים באלפירציה</Text>
            <Text style={styles.calories}>{calories} קלוריות</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    calories: {
        fontSize: 18,
    },
});

export default CaloriePage;
