import { Transaction, TransactionType } from './../../models/transaction';
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-transaction-form',
  imports: [
    FormsModule
  ],
  templateUrl: './new-transaction-form.component.html',
  styleUrl: './new-transaction-form.component.css'
})

export class NewTransactionFormComponent {
  transactionType = ""
  transactionValue = "";

  transactionCreated = output<Transaction>();

  onSubmit() {
    const transaction = new Transaction(
      this.transactionType as TransactionType,
      Number(this.transactionValue)
    );

    this.transactionCreated.emit(transaction);

    this.transactionType = "";
    this.transactionValue = "";
  }
}
