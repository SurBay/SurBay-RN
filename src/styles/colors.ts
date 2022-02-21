import { Platform } from "react-native"

export const colors = {
    ...Platform.select({
        ios: {
            'test': 'yellow',
        },
        android: {
            'test': 'red',
        },
    })
}
