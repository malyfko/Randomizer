/* eslint-disable no-magic-numbers */
import React from 'react';
import ReactHowler from 'react-howler';

import { BoxList } from 'components/BoxList';
import { AmountInput } from 'components/AmountInput';
import { ShuffleButton } from 'components/ShuffleButton';
import sound from 'assets/fanfar.mp3';

const pickRandom = total => Math.ceil(Math.random() * total);

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      disableShuffle: false,
      openedBox: null,
      winner: null,
      playing: false,
    };
  }

  handleShuffle() {
    const { amount } = this.state;
    this.setState({
      disableShuffle: true,
      openedBox: null,
      winner: null,
      playing: true,
    });

    const interval = setInterval(() => {
      this.setState({
        openedBox: pickRandom(Number(amount)),
      });
    }, 400);
    setTimeout(() => {
      clearInterval(interval);
      const winner = pickRandom(Number(amount));
      this.setState({
        winner,
        openedBox: winner,
      });
    }, 8000);
  }

  handleAmountChange(value) {
    if ((/^\d+(\d*)?$/.test(value) || value === '') && Number(value) <= 50) {
      this.setState({ amount: value });
    }
  }

  render() {
    const {
      amount,
      disableShuffle,
      openedBox,
      winner,
      playing,
    } = this.state;

    return (
      <div>
        <h1>WarsawJS Randomizer</h1>
        <div className="wrapper">
          <AmountInput
            onChange={value => this.handleAmountChange(value)}
            value={amount}
          />
          {!!amount && <ShuffleButton onClick={() => this.handleShuffle()} disabled={disableShuffle} />}
        </div>
        <BoxList amount={Number(amount)} openedBox={openedBox} winner={winner} />
        <ReactHowler
          src={sound}
          playing={playing}
          onEnd={() => { this.setState({ disableShuffle: false, playing: false }); }}
        />
      </div>
    );
  }
}
