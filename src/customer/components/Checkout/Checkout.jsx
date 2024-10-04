'use client';

import { useState } from 'react';
import { CreditCardIcon, BanknotesIcon, GlobeAltIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import LockIcon from '@mui/icons-material/Lock';

export default function Checkout() {
  const [billingDetails, setBillingDetails] = useState({
    country: '',
    state: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>

        {/* Billing Address Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <BuildingOfficeIcon className="h-6 w-6 mr-2 text-indigo-600" />
            Billing Address
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2">
            <div className="col-span-1">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={billingDetails.country}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a country</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
                <option value="UK">UK</option>
              </select>
            </div>

            <div className="col-span-1">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
  type="text"
  id="state"
  name="state"
  value={billingDetails.state}
  onChange={handleInputChange}
  placeholder="Enter your state"
  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>

            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <CreditCardIcon className="h-6 w-6 mr-2 text-indigo-600" />
            Payment Method
          </h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                id="credit-card"
                name="payment-method"
                type="radio"
                value="credit-card"
                checked={paymentMethod === 'credit-card'}
                onChange={() => setPaymentMethod('credit-card')}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="credit-card" className="ml-3 block text-sm font-medium text-gray-700">
                <CreditCardIcon className="h-5 w-5 mr-2 text-gray-700 inline-block" />
                Credit/Debit Card
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="paypal"
                name="payment-method"
                type="radio"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={() => setPaymentMethod('paypal')}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
                <GlobeAltIcon className="h-5 w-5 mr-2 text-gray-700 inline-block" />
                PayPal
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="bank-transfer"
                name="payment-method"
                type="radio"
                value="bank-transfer"
                checked={paymentMethod === 'bank-transfer'}
                onChange={() => setPaymentMethod('bank-transfer')}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="bank-transfer" className="ml-3 block text-sm font-medium text-gray-700">
                <BanknotesIcon className="h-5 w-5 mr-2 text-gray-700 inline-block" />
                Bank Transfer
              </label>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Order Details</h2>
          <div className="mt-4 text-sm text-gray-700">
            <div className="flex justify-between">
              <p>Course A</p>
              <p>₹100</p>
            </div>
            <div className="flex justify-between">
              <p>Course B</p>
              <p>₹50</p>
            </div>
            <div className="flex justify-between">
              <p>Course C</p>
              <p>₹75</p>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Price Summary</h2>
          <div className="mt-4 text-sm text-gray-700">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>₹225</p>
            </div>
            <div className="flex justify-between">
              <p>Discount</p>
              <p>-₹25</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>₹200</p>
            </div>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <LockIcon/>
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
