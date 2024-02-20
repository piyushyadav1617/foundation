'use client';
import { useEffect } from 'react';
const DonateBtn = () => {
	useEffect(() => {
		const rzpPaymentForm = document.getElementById('rzp_payment_form');

		if (!rzpPaymentForm?.hasChildNodes()) {
			const script = document.createElement('script');
			script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
			script.async = true;
			script.setAttribute('data-payment_button_id', 'pl_NYMatDPS8ko0pZ');
			rzpPaymentForm?.appendChild(script);

			return () => {
				rzpPaymentForm?.removeChild(script);
			};
		}
	}, []); // Empty dependency array ensures this effect runs only once

	return <form id="rzp_payment_form"></form>;
};

export default DonateBtn;
