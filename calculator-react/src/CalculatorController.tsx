import React from 'react';
import { render } from 'react-dom';
import { CalculatorUI } from './components/CalculatorUI/CalculatorUI';
import { AppState, defaultAppState, StateMachineState } from './types/AppState';

interface StateTransitionRule {
    from: StateMachineState;
    event: string;
    to: StateMachineState;
    action?: () => void;
}

export class CalculatorController {
    state: AppState;
    STT: StateTransitionRule[] = [
        {
            from: StateMachineState.ENTER_OPERAND_1,
            event: '0',
            to: StateMachineState.ENTER_OPERAND_1,
            action: () => {
                if (this.state.display !== '0') {
                    this.state.display += '0';
                }
            }
        },
        {
            from: StateMachineState.ENTER_OPERAND_1,
            event: '1',
            to: StateMachineState.ENTER_OPERAND_1,
            action: () => this.enterDigit('1')
        },
        {
            from: StateMachineState.ENTER_OPERAND_1,
            event: '2',
            to: StateMachineState.ENTER_OPERAND_1,
            action: () => this.enterDigit('2')
        },
        {
            from: StateMachineState.ENTER_OPERAND_1,
            event: '3',
            to: StateMachineState.ENTER_OPERAND_1,
            action: () => this.enterDigit('3')
        },
        {
            from: StateMachineState.ENTER_OPERAND_1,
            event: '4',
            to: StateMachineState.ENTER_OPERAND_1,
            action: () => this.enterDigit('4')
        },
        {
            from: StateMachineState.ENTER_OPERAND_1,
            event: '5',
            to: StateMachineState.ENTER_OPERAND_1,
            action: () => this.enterDigit('5')
        },
        {
            from: StateMachineState.ENTER_OPERAND_1,
            event: '6',
            to: StateMachineState.ENTER_OPERAND_1,
            action: () => this.enterDigit('6')
        },
        {
            from: StateMachineState.ENTER_OPERAND_1,
            event: '7',
            to: StateMachineState.ENTER_OPERAND_1,
            action: () => this.enterDigit('7')
        },
        {
            from: StateMachineState.ENTER_OPERAND_1,
            event: '8',
            to: StateMachineState.ENTER_OPERAND_1,
            action: () => this.enterDigit('8')
        },
        {
            from: StateMachineState.ENTER_OPERAND_1,
            event: '9',
            to: StateMachineState.ENTER_OPERAND_1,
            action: () => this.enterDigit('9')
        }
    ];
    enterDigit = (digit: string) => {
        if (this.state.display !== '0') {
            this.state.display += digit;
        } else {
            this.state.display = digit;
        }
    };

    onEvent = (event: string) => {
        console.log('this.STT=', this.STT);
        const actualRule = this.STT.find(
            (rule: StateTransitionRule) =>
                rule.from === this.state.machineState && rule.event === event
        );
        if (typeof actualRule === 'undefined') {
            console.log(
                `no rule found for state='${this.state.machineState}' and event='${event}'`
            );
            return;
        }
        if (actualRule.action) {
            const oldState = this.state.machineState;
            actualRule.action();
            if (actualRule.to) {
                this.state.machineState = actualRule.to;
            }
            console.log(`${oldState}('${event}') -> ${this.state.machineState}`);
            this.renderUI();
        }
    };

    run = () => {
        console.log('run()');
        this.state = { ...defaultAppState };
        this.renderUI();
    };

    renderUI = () => {
        render(
            <CalculatorUI ctrl={this} state={this.state} />,
            document.getElementById('calculator')
        );
    };

    on0 = () => this.onEvent('0');
    on1 = () => this.onEvent('1');
    on2 = () => this.onEvent('2');
    on3 = () => this.onEvent('3');
    on4 = () => this.onEvent('4');
    on5 = () => this.onEvent('5');
    on6 = () => this.onEvent('6');
    on7 = () => this.onEvent('7');
    on8 = () => this.onEvent('8');
    on9 = () => this.onEvent('9');
    onPlus = () => {};
    onMinus = () => {};
    onEqual = () => {};
}
