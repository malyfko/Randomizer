/* eslint-disable no-magic-numbers */
import React from 'react';
import ReactHowler from 'react-howler';

import { BoxList } from 'components/BoxList';
import { AmountInput } from 'components/AmountInput';
import { ShuffleButton } from 'components/ShuffleButton';
import fanfar from 'assets/fanfar.mp3';

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
        winner: openedBox,
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
        <h1>WarsawJS Meetup #54</h1>
        <div className="wrapper">
          <AmountInput
            onChange={value => this.handleAmountChange(value)}
            value={amount}
          />
          {!!amount && <ShuffleButton onClick={() => this.handleShuffle()} disabled={disableShuffle} />}
        </div>
        <BoxList amount={Number(amount)} openedBox={openedBox} winner={winner} />
        <ReactHowler
          src={fanfar}
          playing={playing}
          onEnd={() => { this.setState({ disableShuffle: false, playing: false }); }}
        />
      </div>
    );
  }
}
