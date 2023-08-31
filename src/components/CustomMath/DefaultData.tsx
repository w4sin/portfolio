import { MathData } from "./MathInterface";

const defaultData: MathData[] = [
    {
        title: "BMR",
        math: [
            {
                type: "radio",
                name: "Gender",
                onFormula: true,
                curSelect: 0,
                select: [
                    {
                        show: "Male",
                        value: 66,
                        formula: "(a+(13.7*b)+(5*c)-(6.8*d))*e",
                    },
                    {
                        show: "Female",
                        value: 665,
                        formula: "(a+(9.6*b)+(1.8*c)-(4.7*d))*e",
                    },
                ],
            },
            {
                type: "input",
                name: "Weight",
                min: 20,
                max: 200,
                show: 50,
                value: 50,
                unit: "kg.",
            },
            {
                type: "input",
                name: "Height",
                min: 50,
                max: 280,
                show: 150,
                value: 150,
                unit: "cm.",
            },
            {
                type: "input",
                name: "Age",
                min: 15,
                max: 80,
                show: 20,
                value: 20,
                unit: "years",
            },
            {
                type: "select",
                name: "Activity Level",
                onFormula: false,
                curSelect: 0,
                select: [
                    { show: "Sedentary: little or no exercise", value: "1.2" },
                    { show: "Exercise 1-3 times/week", value: "1.375" },
                    { show: "Exercise 4-5 times/week", value: "1.55" },
                    { show: "Intense exercise 6-7 times/week", value: "1.7" },
                    { show: "Very intense exercise daily", value: "1.9" },
                ],
            },
        ],
        formula: "(a+(13.7*b)+(5*c)-(6.8*d))*e",
        answer: {
            front: "Your BMR :",
            unit: "Calories/day",
            isDecimal: true,
            length: 5,
            detail: "",
        },
    },
    {
        title: "Drink Water",
        math: [
            {
                type: "input",
                name: "Weight",
                min: 20,
                max: 200,
                show: 50,
                value: 50,
                unit: "kg.",
            },
        ],
        formula: "a*33",
        answer: {
            front: "",
            unit: "ml./day",
            length: 5,
            isDecimal: false,
            detail:
                "This calculate is not include your actity,you should check with your doctor about the right amount for you.",
        },
    },
    {
        title: "BMI",
        math: [
            {
                type: "input",
                name: "Weight",
                min: 20,
                max: 200,
                show: 50,
                value: 50,
                unit: "kg.",
            },
            {
                type: "input",
                name: "Height",
                min: 50,
                max: 280,
                show: 150,
                value: 150,
                unit: "cm.",
            },
        ],
        formula: "a/(b*0.01)**2",
        answer: {
            front: "Your BMI :",
            unit: "",
            length: 5,
            isDecimal: false,
            detail:
                "Under-Weight : < 18.5\nNormal : 18.5-24.9" +
                "\nOver-Weight : 25-29.9\nOBESE : 30-34.9\nExtremely-Obese : > 35",
            // detail:
            //   "[blue]Under-Weight : < 18.5[/]\n[green]Normal : 18.5-24.9[/]" +
            //   "\n[yellow]Over-Weight : 25-29.9[/]\n[orange]OBESE : 30-34.9[/]\n[red]Extremely-Obese : > 35[/]",
            // condition: [
            //   { value: 18.5, color: "blue" },
            //   { value: 25, color: "green" },
            //   { value: 30, color: "yellow" },
            //   { value: 35, color: "orange" },
            //   { value: 35, color: "red" },
            // ],
        },
    },
];

export default defaultData;
