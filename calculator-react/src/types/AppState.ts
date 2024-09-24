export enum StateMachineState {
    ENTER_OPERAND_1 = 'ENTER_OPERAND_1',
    ENTER_OPERAND_2 = 'ENTER_OPERAND_2'
}

export interface AppState {
    display: string;
    operand1: string;
    machineState: StateMachineState;
}

export const defaultAppState: AppState = {
    display: '0',
    operand1: '',
    machineState: StateMachineState.ENTER_OPERAND_1
};
