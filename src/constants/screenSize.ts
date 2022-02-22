import { Dimensions } from "react-native"

export const WIDTH = Dimensions.get("window").width
export const HEIGHT = Dimensions.get("window").height

export const width_to_height = (width: number) => (width * HEIGHT / WIDTH)
export const height_to_width = (height: number) => (height * WIDTH / HEIGHT)