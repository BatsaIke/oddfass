import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import styles from "./BuyTokenModal.module.css"; // Ensure this path is correct

export const BuyTokenModal = ({ email }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const totalAmount = 100; // Assuming a fixed amount for simplicity or fetch from context/store

  const [isPaymentSuccessful, setPaymentSuccessful] = useState(false);

  const onFormSubmit = (data) => {
    if (!totalAmount) {
      alert("Invalid total amount!");
      return;
    }

    console.log("Payment Successful for", totalAmount, "using", data.paymentMethod);
    setPaymentSuccessful(true); // Simulate payment success
  };

  return (
    <div className={styles.modalContainer}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className={styles.inputGroup}>
          <label htmlFor="paymentMethod">Select Payment Method:</label>
          <select
            id="paymentMethod"
            {...register("paymentMethod", { required: "Payment method is required" })}
            className={styles.selectInput}
          >
            <option value="">Select payment method</option>
            <option value="momo">Mobile Money (MoMo)</option>
            <option value="card">Credit Card</option>
          </select>
          {errors.paymentMethod && <p className={styles.error}>{errors.paymentMethod.message}</p>}
        </div>

        <button type="submit" className={styles.buyNowButton}>
          Pay Now
        </button>
      </form>

      {isPaymentSuccessful && (
        <>
          <div className={styles.successMessage}>
            <p>Payment successful!</p>
          </div>
          <Link to={"/"}>Go back</Link>
        </>
      )}
    </div>
  );
};
