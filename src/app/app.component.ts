import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./components/banner/banner.component";
import { NewTransactionFormComponent } from "./components/new-transaction-form/new-transaction-form.component";
import { Transaction, TransactionType } from './models/transaction';
import { StatementComponent } from "./statement/statement.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, NewTransactionFormComponent, StatementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transactions = signal<Transaction[]>([]);

  balance = computed(() => {
    return this.transactions().reduce((acc, currentTransaction) => {
      switch (currentTransaction.type) {
        case TransactionType.WITHDRAWAL:
          return acc - currentTransaction.value;

        case TransactionType.DEPOSIT:
          return acc + currentTransaction.value;

        default:
          throw new Error('Unknown transaction type');
      }
    }, 0);
  })

  processTransaction(transaction: Transaction) {
    if ( transaction.type === TransactionType.WITHDRAWAL && transaction.value > this.balance()){
      return alert('Insufficient funds!');
    }
    this.transactions.update((currentList) => [transaction, ...currentList]);

    console.log(this.transactions());
  }
}
