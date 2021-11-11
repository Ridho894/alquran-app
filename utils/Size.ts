import React from 'react'
import { Dimensions } from "react-native"

const { height } = Dimensions.get('window')

export const Size = {
    verySmall: 12,
    small: height / 25,
    medium: 16,
    large: 18,
    extraLarge: 20,
    title: 24,
}