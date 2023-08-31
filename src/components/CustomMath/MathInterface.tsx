interface SelectItem {
    show: string;
    value: number | string;
    formula?: string;
}

interface AnswerItem {
    front: string;
    unit: string;
    isDecimal: boolean;
    length: number;
    detail: string;
}

export interface MathItemSelect {
    type: string;
    name: string;
    onFormula: boolean;
    curSelect: number;
    select: SelectItem[];
}

export interface MathItemInput {
    type: string;
    name: string;
    min: number;
    max: number;
    show: number;
    value: number;
    unit: string;
}

export interface MathData {
    title: string;
    math: (MathItemSelect | MathItemInput)[];
    formula: string;
    answer: AnswerItem;
}