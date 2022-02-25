import { Platform } from "react-native"

// ##! issue(1) color theme 구분
export const colors = {
    ...Platform.select({
        ios: {
            'themeColor': '#3A77EE',
            'background': '#E5E5E5',
            'themeGray': '#EDEDED',
        },
        android: {
            'themeColor': '#3A77EE',
            'background': '#E5E5E5',
            'themeGray': '#EDEDED',

        },
    })
}
