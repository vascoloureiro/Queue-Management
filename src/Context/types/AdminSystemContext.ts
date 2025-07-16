export interface AdminContextType {
    nameAdmin?:string;
    setNameAdmin:(value: string) => void;

    weekDay?:string;
    setWeekDay:(value: string) => void;

    infoValue?:string[];
    setInfoValue:(value:string[]) => void;

    valuePercentage?:number[];
    setValuePercentage:(value: number[]) => void;

    medianTimeGraph?:number[];
    setMedianTimeGraph:(value: number[]) => void;

    previousMedianTimeGraph?:number[];
    setPreviousMedianTimeGraph:(value: number[]) => void;
}