/* eslint-disable no-magic-numbers */
import React from 'react';

import { BoxList } from 'components/BoxList';
import { AmountInput } from 'components/AmountInput';
import { ShuffleButton } from 'components/ShuffleButton';

const pickRandom = total => Math.ceil(Math.random() * total);

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      disableShuffle: false,
      openedBox: null,
      winner: null,
    };
  }

  handleShuffle() {
    const { amount } = this.state;
    this.setState({
      disableShuffle: true,
      openedBox: null,
      winner: null,
    });
    let openedBox;

    const interval = setInterval(() => {
      openedBox = pickRandom(Number(amount));
      this.setState({
        openedBox,
      });
    }, 400);
    setTimeout(() => {
      clearInterval(interval);
      this.setState({
        disableShuffle: false,
        winner: openedBox,
      });
    }, 10000);
  }

  handleAmountChange(value) {
    if (/^\d+(\d*)?$/.test(value) || value === '') {
      this.setState({ amount: value });
    }
  }

  render() {
    const {
      amount,
      disableShuffle,
      openedBox,
      winner,
    } = this.state;

    return (
      <div>
        <h1>WarsawJS Meetup #54</h1>
        <div>
          <AmountInput
            onChange={value => this.handleAmountChange(value)}
            value={amount}
          />
          {!!amount && <ShuffleButton onClick={() => this.handleShuffle()} disabled={disableShuffle} />}
        </div>
        <BoxList amount={Number(amount)} openedBox={openedBox} winner={winner} />
      </div>
    );
  }
}
