//Button
type ButtonTheme = "button" | "link" | "text"

type ButtonSize = "big" | "normal" | "small"

type ButtonLevel = "main" | "normal" | "danger"

//Card
type CardShadow = "always" | "hover" | "never"

//dialog
interface DialogOptions {
    title: string,
    content: string,
    ok: Function,
    cancel: Function
}

//Loading
interface LoadingOptions {
    text: string,
    background?: string
}

//Message
interface MessageOptions {
    message: string,
    type?: string,
    canClose?: boolean,
    close?: () => void,
    displayTime?: number,
    top?: number
}

//citypick
interface City {
    id: String,
    name: String
}

type CityData = {
    [p in keys]: City[]
}

type keys =
    "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "J"
    | "K"
    | "L"
    | "M"
    | "N"
    | "O"
    | "P"
    | "Q"
    | "R"
    | "S"
    | "T"
    | "U"
    | "V"
    | "W"
    | "X"
    | "Y"
    | "Z"
