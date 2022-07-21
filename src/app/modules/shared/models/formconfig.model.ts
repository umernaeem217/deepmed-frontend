import { Lookup } from "./lookup.model";

export interface FormConfig{
    name: string;
    label?: string ;
    type: "text" | "number" | "email" | "password" | "select" | "checkbox" | "radio" | "textarea" | "date" | "time" | "datetime" | "file" | "hidden" | "button" | "reset" | "submit";
    placeholder?: string ;
    options?: Lookup[];
    required?: boolean;
    disabled?: boolean;
    width?: string;
}