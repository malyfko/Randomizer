import React from 'react';

import { BoxList } from 'components/BoxList';
import { AmountInput } from 'components/AmountInput';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
    };
  }

  handleAmountChange(value) {
    if (/^\d+(\d*)?$/.test(value)) {
      this.setState({ amount: value });
    }
  }

  render() {
    const { amount } = this.state;

    return (
      <div>
        <AmountInput
          onChange={value => this.handleAmountChange(value)}
          value={amount}
        />
        <BoxList amount={Number(amount)} />
      </div>
    );
  }
}
