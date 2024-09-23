import React from 'react';
import style from './Botao.module.scss';

interface BotaoProps {
  type?:"button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
}

class Botao extends React.Component<BotaoProps>{
  render() {
    const { type = "button"} = this.props;
    return (
      <button type={type} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
