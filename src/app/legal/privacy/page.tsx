/* eslint-disable @typescript-eslint/member-delimiter-style */
import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const PrivacyPage = () => {
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
          <h1 className="gradient-text text-4xl font-bold">Privacy Policy</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="gradient-text-lg mb-8">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            1. Information We Collect
          </h2>
          <p className="gradient-text-body mb-4">
            We collect information that you provide directly to us when you use
            our services. This includes information you provide when you create
            an account, subscribe to our services, contact us for support, or
            otherwise communicate with us. The types of information we may
            collect include your name, email address, phone number, company
            name, payment information, and any other information you choose to
            provide. Additionally, we automatically collect certain information
            about your device and usage of our services. This includes
            information about your device such as your IP address, browser type,
            operating system, referring URLs, and information about how you
            interact with our services. We may also collect information about
            your usage patterns, such as which features you use, how often you
            use them, and how you navigate through our services. We may also
            collect information from third-party sources, such as analytics
            providers, social media platforms, and other service providers. This
            information may include demographic information, interest data, and
            other information that helps us understand our users better. We may
            combine this information with information we collect directly from
            you to provide a more personalized experience. When you visit our
            website, we may use cookies and similar tracking technologies to
            collect information about your browsing activities. Cookies are
            small data files that are stored on your device when you visit a
            website. We use cookies to remember your preferences, analyze
            trends, and improve your experience on our website. You can control
            cookies through your browser settings, but please note that
            disabling cookies may affect your ability to use certain features of
            our website. We may also collect information from social media
            platforms when you interact with our content or connect your social
            media accounts to our services. This information may include your
            profile information, posts, and other content you share on social
            media. We use this information to personalize your experience and
            improve our services.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            2. How We Use Your Information
          </h2>
          <p className="gradient-text-body mb-4">
            We use the information we collect to provide, maintain, and improve
            our services. This includes using your information to create and
            manage your account, process your payments, communicate with you
            about our services, and provide customer support. We may also use
            your information to personalize your experience, recommend relevant
            content, and improve our services based on your feedback. We use
            your information to communicate with you about our services,
            including sending you updates, newsletters, and promotional
            materials. You can opt out of these communications at any time by
            following the unsubscribe instructions included in our emails or by
            contacting us directly. We may also use your information to respond
            to your inquiries, resolve disputes, and enforce our agreements. We
            analyze usage patterns and trends to improve our services and
            develop new features. This includes analyzing how users interact
            with our platform, identifying popular features, and understanding
            user preferences. We may also use this information to optimize our
            marketing efforts and improve the overall user experience. We may
            use your information to comply with legal obligations and protect
            our rights and interests. This includes responding to legal
            requests, preventing fraud, and protecting the security of our
            services. We may also use your information to investigate violations
            of our terms of service and take appropriate action. With your
            consent, we may use your information for additional purposes, such
            as conducting surveys or research studies. We will always provide
            you with the option to withdraw your consent for these purposes at
            any time.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            3. Information Sharing and Disclosure
          </h2>
          <p className="gradient-text-body mb-4">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent. However, we may
            share your information with trusted third parties who assist us in
            operating our services, conducting our business, or serving our
            users. These third parties are contractually obligated to protect
            your information and may only use it for the purposes for which it
            was shared. We may share your information with service providers who
            perform functions on our behalf, such as payment processing, data
            analysis, email delivery, and customer support. These service
            providers have access to your information only to perform these
            tasks and are obligated not to disclose or use it for any other
            purpose. We may disclose your information if required to do so by
            law or in response to valid requests by public authorities. This
            includes complying with court orders, subpoenas, or other legal
            processes. We may also disclose your information when we believe it
            is necessary to protect our rights, property, or safety, or the
            rights, property, or safety of others. In the event of a merger,
            acquisition, or sale of all or a portion of our assets, your
            information may be transferred to the acquiring company. We will
            notify you via email or prominent notice on our website of any such
            change in ownership or control of your information. We may share
            aggregated or de-identified information that does not directly
            identify you with third parties for research, marketing, or other
            purposes. This information may be used to improve our services,
            develop new products, or for other business purposes.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            4. Data Security
          </h2>
          <p className="gradient-text-body mb-4">
            We implement appropriate technical and organizational measures to
            protect your information from unauthorized access, alteration,
            disclosure, or destruction. These measures include encryption,
            firewalls, secure server infrastructure, and access controls. We
            regularly review and update our security practices to ensure the
            ongoing protection of your information. All information you provide
            to us is stored on secure servers behind firewalls. We use
            industry-standard encryption to protect sensitive data both in
            transit and at rest. Access to your information is restricted to
            authorized personnel who need it to perform their job functions.
            While we strive to protect your information, no method of
            transmission over the Internet or electronic storage is 100% secure.
            Therefore, we cannot guarantee absolute security. If you have reason
            to believe that your interaction with us is no longer secure, please
            contact us immediately. We conduct regular security assessments and
            penetration testing to identify and address potential
            vulnerabilities. We also maintain incident response procedures to
            quickly address any security breaches and notify affected users as
            required by law. You play an important role in keeping your
            information secure. We recommend that you use strong, unique
            passwords, enable two-factor authentication when available, and
            avoid sharing your account credentials with others.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            5. Your Rights and Choices
          </h2>
          <p className="gradient-text-body mb-4">
            You have certain rights regarding your personal information, subject
            to applicable laws. These rights may include the right to access,
            correct, delete, or restrict the processing of your information. You
            may also have the right to data portability and the right to object
            to certain processing activities. You can access and update your
            account information through your account settings. If you need to
            correct or delete information that you cannot update yourself,
            please contact us. We will respond to your request within a
            reasonable timeframe and in accordance with applicable laws. You may
            opt out of receiving promotional communications from us by following
            the unsubscribe instructions in those communications or by
            contacting us directly. Please note that even if you opt out of
            promotional communications, we may still send you service-related
            communications. If you are a resident of certain jurisdictions, you
            may have additional rights regarding your personal information.
            These rights may include the right to withdraw consent, the right to
            lodge a complaint with a supervisory authority, and the right to be
            forgotten. We will honor these rights to the extent required by law.
            To exercise any of these rights, please contact us using the
            information provided below. We may need to verify your identity
            before fulfilling your request to protect your privacy and security.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            6. Data Retention
          </h2>
          <p className="gradient-text-body mb-4">
            We retain your information for as long as necessary to provide our
            services, comply with legal obligations, resolve disputes, and
            enforce our agreements. The retention period varies depending on the
            purpose for which we collected the information and the applicable
            legal requirements. When we no longer need your information for the
            purposes for which it was collected, we will securely delete or
            anonymize it. However, we may retain certain information for a
            longer period if necessary to comply with legal obligations, resolve
            disputes, or enforce our agreements. Even after deletion, we may
            retain some information in backup systems for a reasonable period of
            time. This information will not be actively used and will be deleted
            in accordance with our retention policies. If you close your
            account, we will delete your information in accordance with our
            retention policies. However, some information may be retained for
            legitimate business purposes or to comply with legal obligations. We
            regularly review our data retention practices and adjust them as
            necessary to ensure we are not retaining information longer than
            necessary.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            7. International Data Transfers
          </h2>
          <p className="gradient-text-body mb-4">
            Your information may be transferred to and processed in countries
            other than your own. These countries may have data protection laws
            that are different from those of your country. We take appropriate
            steps to ensure that your information receives an adequate level of
            protection in accordance with applicable laws. When we transfer your
            information internationally, we use appropriate safeguards such as
            standard contractual clauses approved by regulatory authorities or
            rely on frameworks that ensure adequate protection for your
            information. By using our services, you consent to the transfer of
            your information to countries outside your jurisdiction. If you do
            not wish for your information to be transferred internationally,
            please do not use our services. We will notify you if we make
            significant changes to our international data transfer practices and
            provide you with options to control how your information is
            transferred. If you have concerns about the international transfer
            of your information, please contact us for more information about
            the safeguards we have in place.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            8. Children&apos;s Privacy
          </h2>
          <p className="gradient-text-body mb-4">
            Our services are not intended for children under the age of 13. We
            do not knowingly collect personal information from children under
            13. If we become aware that we have collected personal information
            from a child under 13, we will take steps to delete such
            information. If you are a parent or guardian and believe that your
            child has provided us with personal information, please contact us.
            We will take steps to verify the information and delete it if
            necessary. We encourage parents and guardians to monitor their
            children&apos;s online activities and teach them about protecting
            their personal information. We recommend that parents review this
            Privacy Policy with their children. If we learn that we have
            collected personal information from a child under 13 without
            parental consent, we will promptly delete that information. Parents
            may contact us to request deletion of their child&apos;s
            information. We may offer services that are specifically designed
            for children, in which case we will provide additional privacy
            protections in accordance with applicable laws.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            9. Changes to This Privacy Policy
          </h2>
          <p className="gradient-text-body mb-4">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. We will post the revised Privacy Policy on our
            website and update the &quot;Last updated&quot; date. We encourage
            you to review this Privacy Policy periodically to stay informed
            about how we are protecting your information. Significant changes to
            this policy will be communicated through prominent notices on our
            website or via email. Your continued use of our services after we
            post changes to this Privacy Policy constitutes your acceptance of
            those changes. If you do not agree with the changes, you should
            discontinue using our services. We will provide you with advance
            notice of material changes to this Privacy Policy, to the extent
            required by law. This may include email notifications or prominent
            notices on our website. If you have any questions or concerns about
            this Privacy Policy or our privacy practices, please contact us
            using the information provided below.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            10. Contact Us
          </h2>
          <p className="gradient-text-body mb-4">
            If you have any questions about this Privacy Policy or our privacy
            practices, please contact us at: ViewMarket, Inc. Email:
            privacy@viewmarket.com Address: [Company Address]. You may also
            contact our Data Protection Officer at dpo@viewmarket.com. We will
            respond to your inquiries within 30 days of receipt. If you are not
            satisfied with our response to your privacy concerns, you may have
            the right to lodge a complaint with a supervisory authority in your
            jurisdiction. For residents of the European Economic Area, our
            representative is [Representative Name], who can be contacted at
            [Contact Information].
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
