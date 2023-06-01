import React, { useState } from 'react';
import { View, Picker } from 'react-native';
function ChoiceComponent() {

    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        { label: 'Option 1', value: 'option1', action: () => console.log('Option 1 selected') },
        { label: 'Option 2', value: 'option2', action: () => console.log('Option 2 selected') },
        { label: 'Option 3', value: 'option3', action: () => console.log('Option 3 selected') },
    ];

    const handleOptionChange = (itemValue, itemIndex) => {
        setSelectedOption(itemValue);
        const selectedOption = options.find(option => option.value === itemValue);
        if (selectedOption && selectedOption.action) {
            selectedOption.action();
        }
    };

    return (
        <View>
            <Picker
                selectedValue={selectedOption}
                onValueChange={handleOptionChange}
            >
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option.label} value={option.value} />
                ))}
            </Picker>
        </View>
    );


};
export default ChoiceComponent;
