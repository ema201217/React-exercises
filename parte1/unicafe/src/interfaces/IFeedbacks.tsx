export interface IPropsFeedbacks {
    good: number
    neutral: number
    bad: number
    setGood: (value:number)=>void
    setNeutral: (value:number)=>void
    setBad: (value:number)=>void
}