export const portfolio = Object.freeze({
  value: 1_248_640, equityWeight: 0.64,
  allocation: Object.freeze({ equity: 64, debt: 22, cash: 14 }),
  positions: Object.freeze([
    { ticker: 'HDF', name: 'HDFC Bank', sector: 'Financials', value: 236_000, move: 2.2, thesis: 'Deposit franchise and improving asset quality.' },
    { ticker: 'TCS', name: 'Tata Consultancy', sector: 'Technology', value: 182_000, move: 1.1, thesis: 'Durable cash generation through demand cycles.' },
    { ticker: 'ITC', name: 'ITC Limited', sector: 'Consumer', value: 147_000, move: -0.4, thesis: 'Cash flows fund optionality across consumer categories.' },
  ]),
});
export function assertPortfolio(candidate) { const total=Object.values(candidate.allocation).reduce((sum,value)=>sum+value,0); if(total!==100) throw new Error(`allocation must total 100, received ${total}`); if(candidate.value<=0||candidate.equityWeight<0||candidate.equityWeight>1) throw new Error('portfolio value and equity weight are invalid'); return candidate; }
export function calculateImpact(value,equityWeight,marketMove) { if(![value,equityWeight,marketMove].every(Number.isFinite)) throw new TypeError('scenario inputs must be finite numbers'); return Math.round(value*equityWeight*(marketMove/100)); }
export function formatInr(value, compact = false) {
  if (compact && Math.abs(value) >= 100_000) {
    const lakhs = (value / 100_000).toFixed(2).replace(/\.00$/, '').replace(/0$/, '');
    return `₹${lakhs}L`;
  }
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}
export function orderedPositions(positions) { return [...positions].sort((left,right)=>right.value-left.value); }
