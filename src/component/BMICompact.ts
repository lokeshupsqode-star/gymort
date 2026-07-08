export type Gender = "male" | "female";
export type Status = "Underweight" | "Healthy" | "Overweight" | "Obese";

export interface FormValues {
    height: string;
    weight: string;
    age: string;
    gender: Gender | "";
    activity: string;
}

export interface Result {
    bmi: number;
    status: Status;
    bmr: number;
    tdee: number;
}

export const ACTIVITY_FACTORS = [
    { value: "1.2", label: "Sedentary" },
    { value: "1.375", label: "Lightly active" },
    { value: "1.55", label: "Moderately active" },
    { value: "1.725", label: "Very active" },
    { value: "1.9", label: "Extra active" },
] as const;

export const BMI_TABLE: { range: string; status: Status }[] = [
    { range: "Below 18.5", status: "Underweight" },
    { range: "18.5 - 24.9", status: "Healthy" },
    { range: "25.0 - 29.9", status: "Overweight" },
    { range: "30.0 and Above", status: "Obese" },
];