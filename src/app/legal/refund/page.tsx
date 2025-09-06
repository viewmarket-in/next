/* eslint-disable @typescript-eslint/member-delimiter-style */
import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const RefundPolicyPage = () => {
  return (
    <div className="gradient-text-body min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="gradient-text text-4xl font-bold">Refund Policy</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="gradient-text-lg mb-6">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            1. General Refund Policy
          </h2>
          <p className="gradient-text-body mb-4">
            This Refund Policy outlines the terms and conditions under which
            refunds may be issued for our services. By using our services and
            making payments, you agree to be bound by this Refund Policy in
            addition to our Terms of Service and other applicable agreements. We
            strive to provide high-quality services that meet our
            customers&apos; needs and expectations. However, we understand that
            there may be circumstances where a refund is appropriate or
            necessary. This policy is designed to provide transparency regarding
            our refund practices and procedures. All refund requests must be
            submitted in accordance with the terms outlined in this policy.
            Refunds are not automatically granted and are subject to review and
            approval based on the specific circumstances of each case. This
            Refund Policy applies to all services offered by ViewMarket,
            including but not limited to subscription fees, one-time payments,
            and any other charges associated with our services. Different
            services may have different refund terms as specified in their
            respective agreements. We reserve the right to update or modify this
            Refund Policy at any time without prior notice. Any changes will be
            effective immediately upon posting the revised policy on our
            website. Your continued use of our services after such changes
            constitutes your acceptance of the revised policy.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            2. Subscription Service Refunds
          </h2>
          <p className="gradient-text-body mb-4">
            For subscription-based services, we offer a limited refund period
            for new subscribers. If you are not satisfied with our subscription
            service, you may be eligible for a refund of your initial payment if
            requested within fourteen (14) days of your first payment. This
            applies only to your first payment and first subscription period. To
            qualify for a subscription refund under this policy, you must not
            have extensively used the service features or exceeded reasonable
            usage thresholds. We reserve the right to determine what constitutes
            reasonable usage and may deny refunds for accounts that have
            significantly utilized our services. After the initial 14-day
            period, subscription fees are generally non-refundable. However, we
            may consider refund requests in exceptional circumstances, such as
            service outages that significantly impact your ability to use our
            services for an extended period. If you cancel your subscription,
            you will retain access to the service through the end of your
            current billing period. No refunds will be issued for unused
            portions of your subscription period, except as specifically
            provided in this policy or as required by law. Downgrading your
            subscription plan may result in a pro-rated adjustment to your next
            billing cycle, but no refunds will be issued for the difference in
            plan costs for the current billing period.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            3. One-Time Purchase Refunds
          </h2>
          <p className="gradient-text-body mb-4">
            For one-time purchases of services or products, we offer a limited
            refund period of thirty (30) days from the date of purchase. Refunds
            for one-time purchases are subject to review and may be denied if
            the service has been substantially used or if the request is deemed
            abusive. To be eligible for a refund of a one-time purchase, you
            must not have exceeded reasonable usage thresholds or caused
            excessive resource consumption. We reserve the right to determine
            what constitutes reasonable usage and may deny refunds accordingly.
            Refunds for one-time purchases may be issued as a full refund or a
            partial refund, depending on the extent of service usage and other
            factors. The decision regarding the amount of any refund is made at
            our sole discretion. Certain one-time purchases, such as setup fees,
            installation services, or custom development work, may be
            non-refundable or subject to different refund terms as specified at
            the time of purchase. If you have received services or benefits as
            part of a one-time purchase that cannot be returned or reversed,
            this may affect your eligibility for a refund or result in a partial
            refund.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            4. Service Credit Instead of Refunds
          </h2>
          <p className="gradient-text-body mb-4">
            In certain circumstances, we may offer service credits or account
            credits instead of cash refunds. Service credits may be issued for
            service outages, performance issues, or other service-related
            problems that affect your use of our services. Service credits are
            typically calculated based on the duration and severity of service
            disruptions and are applied as a credit to your account for future
            use. Service credits do not have cash value and cannot be redeemed
            for cash. We may determine that service credits are more appropriate
            than cash refunds in situations where the service issue was
            temporary or where continued use of our services would benefit you
            more than a cash refund. Service credits may have expiration dates
            or other terms and conditions that limit their use. These terms will
            be specified when the service credit is issued. Acceptance of
            service credits in lieu of cash refunds may be required in certain
            situations, particularly for enterprise customers or under specific
            service level agreements.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            5. Non-Refundable Items and Services
          </h2>
          <p className="gradient-text-body mb-4">
            Certain items and services are explicitly non-refundable. These
            include but are not limited to domain registration fees, SSL
            certificate fees, third-party service fees, setup fees, installation
            fees, and custom development work. Fees paid to third-party
            providers through our services are generally non-refundable, as we
            are not able to recover these fees once they have been paid to the
            third-party provider. This includes fees for domain registrations,
            SSL certificates, and other third-party services. Usage-based
            charges, such as data transfer fees, storage fees, or compute time
            charges, are generally non-refundable. These charges reflect actual
            resource consumption and costs incurred on your behalf. Fees for
            services that have been fully rendered or completed are
            non-refundable. This includes consulting services, custom
            development work, and other services that cannot be undone or
            reversed. Promotional credits, discounts, or free trial periods that
            have been used or expired are non-refundable. These benefits are
            provided as promotional offers and do not have cash value.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            6. Refund Request Process
          </h2>
          <p className="gradient-text-body mb-4">
            To request a refund, you must contact our customer support team
            through the official support channels provided on our website.
            Refund requests must include your account information, details of
            the purchase or payment in question, and the reason for your refund
            request. Refund requests must be submitted within the applicable
            refund period specified in this policy or in your service agreement.
            Requests submitted after the refund period may be denied unless
            required by law or at our discretion. We may require additional
            information or documentation to process your refund request. This
            may include usage logs, account activity records, or other
            information relevant to your request. Refund requests are reviewed
            on a case-by-case basis and may take up to thirty (30) business days
            to process. We will notify you of the decision regarding your refund
            request and provide instructions for receiving your refund if
            approved. Approved refunds will be processed using the same payment
            method used for the original purchase, if possible. If the original
            payment method is no longer available or valid, we may issue the
            refund through an alternative method.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            7. Chargebacks and Disputes
          </h2>
          <p className="gradient-text-body mb-4">
            Initiating chargebacks, payment disputes, or other forms of payment
            reversal with your payment provider without first attempting to
            resolve the issue through our official support channels may result
            in immediate suspension or termination of your account and services.
            Chargebacks and payment disputes may incur additional fees and
            administrative costs that will be deducted from any refund amount.
            These fees are intended to cover the costs associated with
            processing chargebacks and disputes. We reserve the right to defend
            against fraudulent chargebacks and disputes and may provide evidence
            of service delivery and usage to your payment provider. If we
            successfully dispute a chargeback, no refund will be issued.
            Repeated chargebacks or disputes may result in being placed on a
            blacklist that prevents future purchases of our services. We may
            also report abusive behavior to payment providers and credit
            agencies. If you believe there is an error in your billing or have
            concerns about a charge, please contact our customer support team
            first to resolve the issue before initiating any chargeback or
            dispute process.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            8. Special Circumstances and Exceptions
          </h2>
          <p className="gradient-text-body mb-4">
            We may make exceptions to this Refund Policy in special
            circumstances at our sole discretion. Special circumstances may
            include but are not limited to service outages, billing errors, or
            other situations that significantly impact your ability to use our
            services. Enterprise customers and customers on custom agreements
            may be subject to different refund terms as specified in their
            service agreements. These terms may provide for different refund
            periods, conditions, or procedures. In the event of service
            interruptions or outages that exceed our service level commitments,
            we may offer refunds or service credits as specified in our service
            level agreements or at our discretion. Billing errors or overcharges
            will be corrected promptly, and refunds will be issued for any
            amounts that were incorrectly charged. We recommend reviewing your
            billing statements regularly to identify any discrepancies. Force
            majeure events, such as natural disasters, government actions, or
            other circumstances beyond our control, may affect our ability to
            provide services and may impact refund eligibility. We will make
            reasonable efforts to work with affected customers in such
            situations.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            9. International Refunds and Currency
          </h2>
          <p className="gradient-text-body mb-4">
            Refunds for customers outside the United States may be subject to
            additional processing times and fees due to currency conversion and
            international banking procedures. These fees may be deducted from
            the refund amount. Currency exchange rates fluctuate, and refunds
            may be processed at different exchange rates than those in effect at
            the time of the original purchase. This may result in receiving a
            different amount in your local currency than originally paid.
            International banking systems may impose additional fees for
            processing refunds, which may reduce the amount received. These fees
            are typically imposed by banks and payment processors, not by us.
            Customers in certain jurisdictions may have additional rights
            regarding refunds under local consumer protection laws. We will
            comply with applicable laws while endeavoring to provide consistent
            service to all customers. Cross-border refunds may be subject to tax
            implications in your jurisdiction. You are responsible for
            understanding and complying with any tax obligations related to
            refunds in your location.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            10. Contact Information for Refund Requests
          </h2>
          <p className="gradient-text-body mb-4">
            For all refund requests and inquiries, please contact our customer
            support team through the following channels: Email:
            billing@viewmarket.com Phone: +1-XXX-XXX-XXXX Address: [Company
            Address]. When contacting us about a refund request, please include
            the following information: 1. Your account username or email address
            2. Date and amount of the charge in question 3. Reason for your
            refund request 4. Any relevant account or transaction details. Our
            customer support team is available Monday through Friday, 9:00 AM to
            5:00 PM [Time Zone]. We strive to respond to all refund inquiries
            within one business day and to process approved refunds within
            thirty (30) business days. For urgent refund requests related to
            billing errors or unauthorized charges, please contact us
            immediately through our 24/7 emergency support line at [Phone
            Number]. We will prioritize these requests and respond as quickly as
            possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
