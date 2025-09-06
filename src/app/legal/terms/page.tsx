/* eslint-disable @typescript-eslint/member-delimiter-style */
import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const TermsOfServicePage = () => {
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
          <h1 className="gradient-text text-4xl font-bold">Terms of Service</h1>
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
            1. Acceptance of Terms
          </h2>
          <p className="gradient-text-body mb-4">
            By accessing or using our services, you agree to be bound by these
            Terms of Service and all applicable laws and regulations. If you do
            not agree with any part of these terms, you must not use our
            services. These terms apply to all visitors, users, and others who
            access or use our services. We reserve the right to update or modify
            these Terms of Service at any time without prior notice. Your
            continued use of our services after any such changes constitutes
            your acceptance of the new Terms of Service. We recommend that you
            review these terms periodically for any changes. If you are entering
            into this agreement on behalf of a company or other legal entity,
            you represent that you have the authority to bind such entity and
            its affiliates to these terms and conditions. In that case,
            &quot;you&quot; or &quot;your&quot; shall refer to such entity and
            its affiliates. If you do not agree to these terms or any future
            modifications, you must immediately stop using our services and
            discontinue all access to our website and related services. These
            Terms of Service, together with our Privacy Policy and any other
            legal notices or terms published on our website, constitute the
            entire agreement between you and ViewMarket regarding your use of
            our services.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            2. Description of Services
          </h2>
          <p className="gradient-text-body mb-4">
            ViewMarket provides a comprehensive platform for building,
            deploying, and managing web applications and services. Our services
            include but are not limited to database management, authentication
            systems, real-time data synchronization, file storage, serverless
            computing functions, and artificial intelligence integration
            capabilities. Our services are designed to enable developers and
            businesses to rapidly build and scale applications without managing
            infrastructure. We offer both free and paid subscription plans with
            varying levels of features and capabilities. We may modify, suspend,
            or discontinue any aspect of our services at any time without
            notice. We may also impose limits on certain features or restrict
            access to parts or all of our services without prior notice or
            liability. Our services are provided on an &quot;as is&quot; and
            &quot;as available&quot; basis. We do not guarantee that our
            services will be uninterrupted, timely, secure, or error-free. We
            may experience hardware, software, or network failures that could
            affect service availability. We reserve the right to release new
            versions, updates, or improvements to our services. You agree to
            receive such updates as part of your use of our services.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            3. User Accounts and Registration
          </h2>
          <p className="gradient-text-body mb-4">
            To access certain features of our services, you may be required to
            create an account. You agree to provide accurate, current, and
            complete information during the registration process and to update
            such information to keep it accurate, current, and complete. You are
            responsible for maintaining the confidentiality of your account
            credentials and for all activities that occur under your account.
            You agree to notify us immediately of any unauthorized use of your
            account or any other breach of security. You may not share your
            account credentials with any third party or allow multiple users to
            access your account. You are fully responsible for all actions taken
            under your account, whether authorized or not. We reserve the right
            to suspend or terminate your account at any time for any reason,
            including but not limited to violation of these Terms of Service,
            suspicious activity, or at your request. You may cancel your account
            at any time by following the account cancellation process provided
            in your account settings. However, cancellation may not immediately
            result in deletion of your data from our systems.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            4. User Responsibilities
          </h2>
          <p className="gradient-text-body mb-4">
            You are solely responsible for your use of our services and for any
            content you create, upload, or transmit through our services. You
            agree to use our services only for lawful purposes and in accordance
            with these Terms of Service. You agree not to use our services to
            engage in any activity that is illegal, harmful, threatening,
            abusive, harassing, tortious, defamatory, vulgar, obscene, libelous,
            invasive of another&apos;s privacy, hateful, or racially,
            ethnically, or otherwise objectionable. You agree not to interfere
            with or disrupt our services or servers or networks connected to our
            services, or disobey any requirements, procedures, policies, or
            regulations of networks connected to our services. You agree not to
            attempt to gain unauthorized access to any portion of our services
            or any other systems or networks connected to our services through
            hacking, password mining, or any other means. You agree not to
            upload, post, email, or otherwise transmit any material that
            contains software viruses or any other computer code, files, or
            programs designed to interrupt, destroy, or limit the functionality
            of any computer software or hardware or telecommunications
            equipment.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            5. Intellectual Property Rights
          </h2>
          <p className="gradient-text-body mb-4">
            The services and all content, features, and functionality included
            in or available through our services, including but not limited to
            text, graphics, logos, icons, images, audio clips, digital
            downloads, data compilations, and software, are owned by ViewMarket
            or its licensors and are protected by international copyright,
            trademark, patent, trade secret, and other intellectual property or
            proprietary rights laws. You are granted a limited, non-exclusive,
            non-transferable, revocable license to access and use our services
            for your internal business purposes in accordance with these Terms
            of Service. This license does not include any resale or commercial
            use of our services or content. You agree not to reproduce,
            duplicate, copy, sell, resell, or exploit any portion of our
            services, use of our services, or access to our services without our
            express written permission. You retain all rights to any content you
            submit, post, or display on or through our services. By submitting,
            posting, or displaying content on or through our services, you grant
            us a worldwide, non-exclusive, royalty-free license to use,
            reproduce, adapt, publish, translate, and distribute such content in
            any existing or future media. We respect the intellectual property
            rights of others. If you believe that your work has been copied in a
            way that constitutes copyright infringement, please contact our
            Copyright Agent as specified in our Privacy Policy.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            6. Subscription and Payment Terms
          </h2>
          <p className="gradient-text-body mb-4">
            Certain features of our services may require payment of fees. All
            fees are stated in United States dollars and are exclusive of
            applicable taxes. You are responsible for paying all taxes
            associated with your use of our services. You agree to pay all fees
            and charges incurred in connection with your account at the rates in
            effect when the charges were incurred. All fees and charges are
            non-refundable except as expressly provided in these Terms of
            Service. We reserve the right to change our fees and charges at any
            time, but we will provide you with reasonable notice of any such
            changes. Your continued use of our services after such notice
            constitutes your acceptance of the new fees and charges. We may
            suspend or terminate your access to paid services if your payment
            method is declined or if you fail to pay any amounts when due. We
            are not responsible for any losses or damages resulting from such
            suspension or termination. You are solely responsible for
            maintaining accurate billing information and for ensuring that your
            payment method remains valid and has sufficient funds to cover
            applicable fees.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            7. Data Usage and Privacy
          </h2>
          <p className="gradient-text-body mb-4">
            Our collection, use, and protection of your personal information is
            governed by our Privacy Policy, which is incorporated into these
            Terms of Service by reference. By using our services, you consent to
            our collection, use, and disclosure of your information as described
            in our Privacy Policy. You are responsible for ensuring that any
            data you store or process through our services complies with all
            applicable laws and regulations, including but not limited to data
            protection and privacy laws. You retain all rights, title, and
            interest in and to your data. We will not access, use, or disclose
            your data except as necessary to provide our services, as authorized
            by you, or as required by law. We may collect and analyze
            aggregated, anonymized data from your use of our services to improve
            our services and develop new features. This data does not identify
            you personally and may be used for any purpose. You are solely
            responsible for backing up your data. We are not responsible for any
            loss or corruption of your data, nor for any failure to store or
            back up your data.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            8. Termination
          </h2>
          <p className="gradient-text-body mb-4">
            We may terminate or suspend your account and access to our services
            immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if you breach these Terms
            of Service. Upon termination, your right to use our services will
            immediately cease. If you wish to terminate your account, you may
            simply discontinue using our services. All provisions of these Terms
            of Service which by their nature should survive termination shall
            survive termination, including, without limitation, ownership
            provisions, warranty disclaimers, indemnity, and limitations of
            liability. Termination of your account does not relieve you of any
            obligation to pay amounts that may have accrued prior to termination
            or any other obligations under these Terms of Service. We may also
            terminate or suspend your access to our services if we determine, in
            our sole discretion, that you have violated these Terms of Service
            or engaged in conduct that we deem inappropriate or harmful.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            9. Disclaimer of Warranties
          </h2>
          <p className="gradient-text-body mb-4">
            Our services are provided on an &quot;as is&quot; and &quot;as
            available&quot; basis. We make no warranties, expressed or implied,
            including without limitation warranties of merchantability, fitness
            for a particular purpose, or non-infringement. We do not warrant
            that our services will be uninterrupted, timely, secure, or
            error-free. We do not warrant that the results obtained from the use
            of our services will be accurate or reliable. We do not warrant that
            any defects or errors in our services will be corrected. You
            acknowledge that we may modify, suspend, or discontinue our services
            at any time without notice. You use our services at your own risk.
            We are not responsible for any damages, direct or indirect, that may
            result from your use of our services. Some jurisdictions do not
            allow the exclusion of certain warranties, so some of the above
            exclusions may not apply to you.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            10. Limitation of Liability
          </h2>
          <p className="gradient-text-body mb-4">
            To the fullest extent permitted by applicable law, we shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, including without limitation, loss of profits,
            data, use, goodwill, or other intangible losses, resulting from your
            access to or use of, or inability to access or use, our services.
            Our total liability to you for any claim arising out of or relating
            to these Terms of Service or your use of our services, whether in
            contract, tort, or otherwise, shall not exceed the amount paid by
            you, if any, for accessing or using our services during the twelve
            months immediately preceding the event giving rise to the claim.
            Some jurisdictions do not allow the exclusion or limitation of
            certain damages, so the above limitation and exclusions may not
            apply to you. In such cases, our liability will be limited to the
            fullest extent permitted by law. These limitations of liability
            apply regardless of the legal theory upon which the claim is based,
            including contract, tort (including negligence), strict liability,
            or any other theory. Nothing in these Terms of Service shall exclude
            or limit our liability for fraud, death, or personal injury caused
            by our negligence, or any other liability that cannot be excluded or
            limited by applicable law.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            11. Indemnification
          </h2>
          <p className="gradient-text-body mb-4">
            You agree to indemnify, defend, and hold harmless ViewMarket and its
            affiliates, officers, directors, employees, agents, licensors, and
            suppliers from and against all claims, losses, expenses, damages,
            and costs, including reasonable attorneys&apos; fees, resulting from
            or arising out of your use of our services, your violation of these
            Terms of Service, or your violation of any rights of another party.
            We reserve the right, at your expense, to assume the exclusive
            defense and control of any matter for which you are required to
            indemnify us. In such case, you agree to cooperate with our defense
            of such claim. You agree not to settle any such claim without our
            prior written consent. We will use reasonable efforts to notify you
            of any such claim, action, or proceeding upon becoming aware of it.
            This indemnification obligation will survive the termination of
            these Terms of Service and your use of our services. We reserve the
            right to seek reimbursement for any costs or expenses incurred in
            connection with your indemnification obligations.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            12. Governing Law and Jurisdiction
          </h2>
          <p className="gradient-text-body mb-4">
            These Terms of Service shall be governed by and construed in
            accordance with the laws of [Jurisdiction], without regard to its
            conflict of law provisions. Any dispute arising out of or relating
            to these Terms of Service or your use of our services shall be
            subject to the exclusive jurisdiction of the courts located in
            [Jurisdiction]. You agree to submit to the personal jurisdiction of
            such courts and waive any objection to venue in such courts. You
            also waive any right to a jury trial in any proceeding arising out
            of or relating to these Terms of Service. If any provision of these
            Terms of Service is held to be invalid or unenforceable, the
            remaining provisions will continue in full force and effect. Our
            failure to enforce any right or provision of these Terms of Service
            shall not be considered a waiver of those rights. Likewise, our
            acceptance of any late payment or failure to act on a breach shall
            not constitute a waiver of our right to act with respect to
            subsequent or similar breaches.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            13. Entire Agreement
          </h2>
          <p className="gradient-text-body mb-4">
            These Terms of Service, together with our Privacy Policy and any
            other legal notices or terms published on our website, constitute
            the entire agreement between you and ViewMarket regarding your use
            of our services. These Terms of Service supersede any prior or
            contemporaneous communications, proposals, or agreements, whether
            oral or written, between you and ViewMarket regarding your use of
            our services. If there is any conflict between these Terms of
            Service and any other agreement or policy, these Terms of Service
            shall control unless otherwise specified in writing. No amendment to
            or modification of these Terms of Service will be binding unless in
            writing and signed by an authorized representative of ViewMarket.
            The section titles in these Terms of Service are for convenience
            only and have no legal or contractual effect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
