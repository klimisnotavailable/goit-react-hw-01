import css from "./TransactionHistory.module.css"

export default function TransactionHistory(items) {
  const transactionsMarkup = items.transactions.map((transaction) => {
    return <tr key={transaction.id} className={css.tableRow}>
      <th>{transaction.type }</th>
      <th>{transaction.amount }</th>
      <th>{transaction.currency }</th>
    </tr>
  })
return <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={css.tableBody}>
    <>{transactionsMarkup }</>
  </tbody>
</table>

}