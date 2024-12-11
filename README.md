<h1 align="center">
   <b>
      <a href="https://ecconnect.upc.ua/">
        <img src="https://ecconnect.upc.ua/public/images/newLogo.svg" />
      </a>
    </b>
</h1>

<p align="center">The payment solution "Pay by Bank" is a simple and convenient online payment service for transferring funds from one account to another (IBAN to IBAN) without the use of payment cards.</p>

<p>upc-pay-by-bank.js allows to initialize payment with a simple payment button</p>

### Demo
<a href="https://upcecconnect.github.io/fake-shop/#/checkout?mode=pay-by-bank">Link</a>

### Example

```html
<script src="https://raw.githubusercontent.com/upcecconnect/upc-pay-by-bank/refs/heads/main/upc-pay-by-bank.js"></script>
```
Or download and use file directly

https://github.com/upcecconnect/upc-pay-by-bank/blob/main/upc-pay-by-bank.js

```js
if (window.UPCPayByBank) {
  cont button = new window.UPCPayByBank({
    buttonProps: {
      locale: 'uk',
      variant: 'primary',
      wrapperSelector: '#wrapper',
      mode: 'default',
    },
    getPaymentProps() {
      return {
        orderId: '12345',
        creditorIBAN: 'IBAN',
        currencyNumericCode: '980',
        locale: 'uk',
        merchantID: '12345',
        purchaseDescription: 'description',
        purchaseTime: '2412111356',
        signature: 'signature',
        totalAmountCents: '12345',
        sessionData: 'session-data',
      }
    },
    callback: () => {
      // some action on button click, if needed
    }
  });
}
```