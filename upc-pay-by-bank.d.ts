export declare namespace NUPCPayByBank {
    export type Locale = 'en' | 'uk';
    export type Variant = 'primary' | 'outlined' | 'dark';
    export type PaymentMode = 'redirect' | 'default';
    type YY = string;
    type MM = string;
    type DD = string;
    type HH = string;
    type mm = string;
    type ss = string;
    type PurchaseTime = `${YY}${MM}${DD}${HH}${mm}${ss}`;
    type PurchaseTimeWithTimezonePlus = `${PurchaseTime}+${HH}${MM}`;
    type PurchaseTimeWithTimezoneMinus = `${PurchaseTime}-${HH}${MM}`;
    export interface PaymentProps {
        readonly creditorIBAN: string;
        readonly currencyNumericCode: string;
        readonly locale: Locale;
        readonly merchantID: string;
        readonly orderId: string;
        readonly purchaseDescription: string;
        readonly purchaseTime: PurchaseTime | PurchaseTimeWithTimezonePlus | PurchaseTimeWithTimezoneMinus;
        readonly sessionData?: string | undefined;
        readonly signature: string;
        readonly totalAmountCents: number;
        readonly url?: string | undefined;
    }
    export type GetPaymentPropsFunction = () => PaymentProps;
    export type CallbackFunction = () => void;
    export interface ButtonProps {
        variant: Variant;
        locale: Locale;
        wrapperSelector: string;
        mode: PaymentMode;
    }
    export interface PayByBankProps {
        buttonProps: ButtonProps;
        getPaymentProps: GetPaymentPropsFunction;
        callback?: CallbackFunction | undefined;
    }
    export interface PayByBank extends PayByBankProps {
    }
    export {};
}
declare class UPCPayByBank implements NUPCPayByBank.PayByBank {
    buttonProps: NUPCPayByBank.ButtonProps;
    readonly getPaymentProps: NUPCPayByBank.GetPaymentPropsFunction;
    readonly callback: NUPCPayByBank.CallbackFunction | undefined;
    constructor(props: NUPCPayByBank.PayByBankProps);
    private getButtonVariant;
    private getButton;
    private setButtonInnerHTML;
    private addButton;
    private getInputEl;
    private onButtonClick;
}
declare global {
    interface Window {
        UPCPayByBank: typeof UPCPayByBank;
    }
}
export {};
