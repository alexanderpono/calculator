import React from 'react';
import styles from './CalculatorUI.scss';
import { AppState } from '@src/types/AppState';

interface Ctrl {
    on0: () => void;
    on1: () => void;
    on2: () => void;
    on3: () => void;
    on4: () => void;
    on5: () => void;
    on6: () => void;
    on7: () => void;
    on8: () => void;
    on9: () => void;
    onPlus: () => void;
    onMinus: () => void;
    onEqual: () => void;
}
interface UIProps {
    ctrl: Ctrl;
    state: AppState;
}

export const CalculatorUI: React.FC<UIProps> = ({ ctrl, state }) => {
    return (
        <div className={styles.ui}>
            <div className={styles.display}>{state.display}</div>
            <div className={styles.keyboard}>
                <div></div>
                <div></div>
                <div></div>
                <button>C</button>
                <div></div>
                <button onClick={ctrl.on7}>7</button>
                <button onClick={ctrl.on8}>8</button>
                <button onClick={ctrl.on9}>9</button>
                <div></div>
                <div></div>
                <button onClick={ctrl.on4}>4</button>
                <button onClick={ctrl.on5}>5</button>
                <button onClick={ctrl.on6}>6</button>
                <div></div>
                <div></div>
                <button onClick={ctrl.on1}>1</button>
                <button onClick={ctrl.on2}>2</button>
                <button onClick={ctrl.on3}>3</button>
                <button>-</button>
                <div></div>
                <button onClick={ctrl.on0}>0</button>
                <div></div>
                <button>=</button>
                <button>+</button>
                <div></div>
            </div>
        </div>
    );
};
