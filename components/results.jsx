import { calculateInvestmentResults, formatter } from "../src/util/investment";
export default function Results({investment}){
const initialInvestment = Number(investment.initialInvestment);
    return <table id ="result" className="center">
            <thead className="center">
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
            </thead>
            <tbody>
           {calculateInvestmentResults(investment).map( yearData => {
            const totalIntreset = yearData.valueEndOfYear - (yearData.year * yearData.annualInvestment + initialInvestment);
     
            const totalAmountInvested = yearData.valueEndOfYear - totalIntreset;
            return <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalIntreset)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
           })
           }
            </tbody>

    </table>
}