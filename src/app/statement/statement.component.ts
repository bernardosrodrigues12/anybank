import { Component, input } from '@angular/core';
import { TransactionComponent } from "./transaction/transaction.component";
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-statement',
  imports: [TransactionComponent],
  templateUrl: './statement.component.html',
  styleUrl: './statement.component.css'
})
export class StatementComponent {
  transactions = input.required<Transaction[]>();
}
