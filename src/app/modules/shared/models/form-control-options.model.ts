import { AsyncValidatorFn, FormControlOptions, ValidatorFn } from "@angular/forms";
import { Lookup } from "./lookup.model";

export interface FormControlOption{
    name: string;
    label?: string ;
    defaultValue?: any;
    type: "text" | "number" | "email" | "password" | "select" | "checkbox" | "radio" | "textarea" | "date" | "time" | "datetime" | "file" | "hidden" | "button" | "reset" | "submit";
    placeholder?: string ;
    options?: Lookup[];
    required?: boolean;
    disabled?: boolean;
    width?: string;
    errorMessage?: string;
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | FormControlOptions | null;
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null,
    additionalInfo?: string;
    additionalClickEvent?: any;
    applyGlobalValidators?: boolean; //Temp Workaround for confirm password validation.
}