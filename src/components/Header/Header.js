import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import TitleText from '../TitleText/TitleText';
import styles from './HeaderStyle';

const header = ({ text }) => (
    <View style={styles.container}>
        <TitleText
            text={text}
            fontSize={24}
            fontWeight='bold'
        />
    </View>
);  

header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default header;
