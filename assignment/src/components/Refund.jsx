import React from 'react';
import './Legal.css';

const Refund = () => {
    return (
        <div className="legal-page">
            <h1>Refund & Cancellation Policy</h1>
            <div className="legal-content">
                <p>Last updated: January 2026</p>

                <h2>Refunds</h2>
                <p>Our policy is valid for a period of 30 calendar days from the date of the purchase. If you are not satisfied with the product or service for any reason, you can ask for a refund.</p>
                <p>If the period of 30 days has lapsed since the purchase, we can't, unfortunately, offer you a refund.</p>

                <h2>Refund Requirements</h2>
                <p>The following criteria must be met to qualify for a refund:</p>
                <ul>
                    <li>Product is defective</li>
                    <li>Product is not as described</li>
                    <li>Service was not rendered as per agreement</li>
                </ul>

                <h2>Exempt Items</h2>
                <p>The following items are exempt from refunds:</p>
                <ul>
                    <li>Gift cards</li>
                    <li>Downloadable software products</li>
                    <li>Completed services</li>
                </ul>

                <h2>Contact Us</h2>
                <p>If you have any questions about our Returns and Refunds Policy, please contact us at info@madath.com.</p>
            </div>
        </div>
    );
};

export default Refund;
