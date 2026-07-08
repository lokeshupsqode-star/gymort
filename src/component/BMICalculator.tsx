import { useState } from "react";
import { IconArrowUpRight } from '@tabler/icons-react';
import type { FormValues, Result, Status } from "../component/BMICompact";
import { ACTIVITY_FACTORS, BMI_TABLE } from "../component/BMICompact";

const EMPTY: FormValues = { height: "", weight: "", age: "", gender: "", activity: "" };

const getStatus = (bmi: number): Status =>
    bmi < 18.5 ? "Underweight" : bmi < 25 ? "Healthy" : bmi < 30 ? "Overweight" : "Obese";

function validate(v: FormValues): Partial<Record<keyof FormValues, string>> {
    const n = (s: string) => Number(s);
    const errors: Partial<Record<keyof FormValues, string>> = {};

    if (!v.height || n(v.height) < 50 || n(v.height) > 250) errors.height = "Enter height 50-250 cm";
    if (!v.weight || n(v.weight) < 20 || n(v.weight) > 300) errors.weight = "Enter weight 20-300 kg";
    if (!v.age || !Number.isInteger(n(v.age)) || n(v.age) < 1 || n(v.age) > 120) errors.age = "Enter a valid age";
    if (!v.gender) errors.gender = "Select a gender";
    if (!v.activity) errors.activity = "Select an activity factor";

    return errors;
}

function calculate(v: FormValues): Result {
    const [h, w, age] = [Number(v.height), Number(v.weight), Number(v.age)];
    const bmi = w / (h / 100) ** 2;
    const bmr = 10 * w + 6.25 * h - 5 * age + (v.gender === "male" ? 5 : -161);
    return {
        bmi: Math.round(bmi * 10) / 10,
        status: getStatus(bmi),
        bmr: Math.round(bmr),
        tdee: Math.round(bmr * Number(v.activity)),
    };
}


const BMICalculator: React.FC = () => {
    const [values, setValues] = useState(EMPTY);
    const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
    const [result, setResult] = useState<Result | null>(null);

    const set = (field: keyof FormValues) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setValues((v) => ({ ...v, [field]: e.target.value }));
        setErrors((err) => ({ ...err, [field]: undefined }));
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const found = validate(values);
        setErrors(found);
        setResult(Object.keys(found).length ? null : calculate(values));
    };

    return (
        <div className="bmi-calc">
            <div className="bmi-calc-grid">
                <div className="bmi-calc-panel">
                    <p className="sub-heading-section split-text">Check Your Health</p>
                    <h2 className="section-heading split-text">CALCULATE BMI</h2>

                    <form className="bmi-calc-form" onSubmit={onSubmit} noValidate>
                        <div className="bmi-calc-row">
                            <div className="bmi-calc-field">
                                <input placeholder="Height (cm)" type="number" value={values.height} onChange={set("height")} className={errors.height ? "has-error" : ""} />
                                {errors.height && <span className="bmi-calc-error">{errors.height}</span>}
                            </div>
                            <div className="bmi-calc-field">
                                <input placeholder="Weight (kg)" type="number" value={values.weight} onChange={set("weight")} className={errors.weight ? "has-error" : ""} />
                                {errors.weight && <span className="bmi-calc-error">{errors.weight}</span>}
                            </div>
                        </div>

                        <div className="bmi-calc-row">
                            <div className="bmi-calc-field">
                                <input placeholder="Age" type="number" value={values.age} onChange={set("age")} className={errors.age ? "has-error" : ""} />
                                {errors.age && <span className="bmi-calc-error">{errors.age}</span>}
                            </div>
                            <div className="bmi-calc-field">
                                <select value={values.gender} onChange={set("gender")} className={errors.gender ? "has-error" : ""}>
                                    <option value="" disabled>Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {errors.gender && <span className="bmi-calc-error">{errors.gender}</span>}
                            </div>
                        </div>

                        <div className="bmi-calc-field">
                            <select value={values.activity} onChange={set("activity")} className={errors.activity ? "has-error" : ""}>
                                <option value="" disabled>Select an activity factor</option>
                                {ACTIVITY_FACTORS.map((a) => (
                                    <option key={a.value} value={a.value}>{a.label}</option>
                                ))}
                            </select>
                            {errors.activity && <span className="bmi-calc-error">{errors.activity}</span>}
                        </div>
                        <button type="submit" className="btn-main anim anim--3">
                            <span className="btn-quote">Calculate</span>
                            <span className="orenge_icon">
                                <IconArrowUpRight size={30} />
                            </span>
                        </button>
                    </form>

                    {result && (
                        <div className={`bmi-calc-result bmi-calc-result--${result.status.toLowerCase()}`}>
                            <div className="bmi-calc-result-main">
                                <span className="bmi-calc-result-value">{result.bmi}</span>
                                <span className="bmi-calc-result-status">{result.status}</span>
                            </div>
                            <dl className="bmi-calc-result-extra">
                                <div><dt>BMR</dt><dd>{result.bmr} kcal/day</dd></div>
                                <div><dt>Daily calories</dt><dd>{result.tdee} kcal/day</dd></div>
                            </dl>
                        </div>
                    )}
                </div>

                <div className="bmi-calc-table-wrap">
                    <table className="bmi-calc-table fade-up">
                        <thead><tr><th>BMI</th><th>Weight Status</th></tr></thead>
                        <tbody>
                            {BMI_TABLE.map((row) => (
                                <tr key={row.status} className={result?.status === row.status ? "is-active" : ""}>
                                    <td>{row.range}</td>
                                    <td>{row.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="bmrmeta fade-up">
                        <span>BMR</span> metabolic rate / <span>BMI</span> body mass index
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BMICalculator;