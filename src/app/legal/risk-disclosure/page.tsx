/* eslint-disable @typescript-eslint/member-delimiter-style */
import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const RiskDisclosurePage = () => {
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
          <h1 className="gradient-text text-4xl font-bold">Risk Disclosure</h1>
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
            1. General Risk Disclosure
          </h2>
          <p className="gradient-text-body mb-4">
            This Risk Disclosure Statement is designed to inform you about the
            potential risks associated with using our services and technologies.
            While we strive to provide reliable and secure services, it is
            important that you understand and acknowledge the various risks that
            may be inherent in the use of technology platforms, software
            services, and digital systems. The information contained in this
            disclosure is intended to help you make informed decisions about
            your use of our services. However, this disclosure does not purport
            to disclose all risks associated with our services and technologies.
            New risks may emerge over time due to changes in technology,
            regulatory environment, market conditions, or other factors. By
            using our services, you acknowledge that you have read, understood,
            and accepted the risks described in this disclosure. You also
            acknowledge that you are solely responsible for evaluating whether
            our services are suitable for your particular needs and risk
            tolerance. This Risk Disclosure Statement does not constitute
            investment advice, legal advice, or any other form of professional
            advice. You should consult with appropriate professionals before
            making decisions based on information provided through our services.
            We reserve the right to update or modify this Risk Disclosure
            Statement at any time without prior notice. Your continued use of
            our services after any such changes constitutes your acceptance of
            the revised disclosure.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            2. Technology and System Risks
          </h2>
          <p className="gradient-text-body mb-4">
            Our services rely on complex technology systems and infrastructure
            that may be subject to failures, interruptions, or security
            breaches. These technology-related risks include but are not limited
            to hardware failures, software bugs, network connectivity issues,
            power outages, and natural disasters that may affect our data
            centers or systems. Despite our best efforts to maintain reliable
            systems, we cannot guarantee that our services will be available at
            all times or that they will function without interruption or error.
            System maintenance, upgrades, or unexpected technical problems may
            result in temporary unavailability of services. The performance and
            functionality of our services may be affected by factors beyond our
            control, including internet service provider outages,
            telecommunications network failures, or government-imposed
            restrictions on internet access or technology usage. We may need to
            modify, suspend, or discontinue certain features or services without
            prior notice. Such changes may affect your ability to access or use
            certain functionalities of our services. New vulnerabilities in
            technology systems may be discovered that could affect the security
            or performance of our services. While we work to address such
            vulnerabilities promptly, there may be periods during which our
            systems are exposed to potential risks.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            3. Cybersecurity and Data Breach Risks
          </h2>
          <p className="gradient-text-body mb-4">
            Despite implementing robust security measures, our systems and
            services may be vulnerable to cyber attacks, hacking attempts,
            malware infections, or other security breaches. These risks include
            unauthorized access to your data, theft of sensitive information, or
            compromise of system integrity. Cyber threats are constantly
            evolving, and new attack methods may emerge that could bypass our
            existing security measures. Even with sophisticated security
            protocols, no system can be completely immune to cyber attacks. A
            successful security breach could result in the loss, theft, or
            unauthorized disclosure of your data, including personal
            information, business data, or intellectual property. Such incidents
            could lead to financial losses, legal liabilities, or reputational
            damage. We may be required to notify you and regulatory authorities
            in the event of a data breach that affects your personal
            information. However, not all security incidents may be detectable
            or reportable under applicable laws. You play an important role in
            maintaining the security of your account and data. Using weak
            passwords, failing to enable two-factor authentication, or sharing
            account credentials may increase your vulnerability to security
            breaches.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            4. Data Loss and Corruption Risks
          </h2>
          <p className="gradient-text-body mb-4">
            While we implement backup and recovery procedures to protect your
            data, there is always a risk of data loss or corruption due to
            hardware failures, software errors, natural disasters, or other
            unforeseen circumstances. We cannot guarantee that all data will be
            recoverable in the event of a system failure. Data stored in our
            systems may be subject to corruption, deletion, or modification due
            to technical errors, software bugs, or malicious activities. Even
            with redundancy measures in place, there is no absolute guarantee
            against data loss. You are responsible for maintaining your own
            backups of critical data. We recommend that you implement additional
            backup solutions for important information that cannot be recreated
            or replaced. Migration of data between different systems or service
            versions may carry risks of data loss, corruption, or
            incompatibility. While we strive to ensure smooth transitions,
            technical issues may arise during migration processes. Human errors,
            such as accidental deletion of data or misconfiguration of system
            settings, may result in data loss or unavailability. We implement
            safeguards to minimize such risks, but they cannot be eliminated
            entirely.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            5. Regulatory and Compliance Risks
          </h2>
          <p className="gradient-text-body mb-4">
            Our services and your use of them may be subject to various laws,
            regulations, and government policies that vary by jurisdiction.
            Changes in regulatory requirements or interpretations may affect the
            availability, functionality, or legality of our services in certain
            regions. New laws or regulations may be enacted that impose
            additional compliance requirements, restrictions, or obligations on
            our services. Such changes may require modifications to our services
            or result in increased costs that could affect service availability
            or pricing. You are responsible for ensuring that your use of our
            services complies with all applicable laws and regulations in your
            jurisdiction. This includes but is not limited to data protection
            laws, export control regulations, and industry-specific compliance
            requirements. Government agencies may issue orders or requests for
            information that could affect your data or access to our services.
            We will comply with valid legal requests while endeavoring to
            protect your rights and privacy to the extent permitted by law.
            Sanctions or trade restrictions imposed by governments may limit our
            ability to provide services in certain countries or to certain
            individuals or entities. Such restrictions may change without notice
            and could affect your ability to use our services.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            6. Third-Party Service Risks
          </h2>
          <p className="gradient-text-body mb-4">
            Our services may integrate with or depend on third-party services,
            platforms, or technologies. These third-party dependencies carry
            inherent risks, including service interruptions, changes in terms of
            service, or discontinuation of services. We have no control over the
            availability, performance, or security of third-party services that
            our platform may integrate with. Issues with these services could
            affect the functionality or reliability of our services. Third-party
            service providers may change their pricing, terms of service, or
            features without notice, which could impact our ability to provide
            certain functionalities or result in increased costs that may be
            passed on to users. Security vulnerabilities in third-party services
            or components could potentially affect the security of our services
            or your data. While we evaluate third-party services for security,
            we cannot guarantee their security or reliability. The failure of a
            critical third-party service could result in significant disruptions
            to our services. We maintain contingency plans where possible, but
            some third-party dependencies may be irreplaceable in the short
            term.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            7. Financial and Business Risks
          </h2>
          <p className="gradient-text-body mb-4">
            Our ability to continue providing services depends on our financial
            stability and business viability. Factors such as market conditions,
            competition, regulatory changes, or business decisions may affect
            our operations and ability to maintain services. Changes in our
            business model, pricing structure, or service offerings may affect
            the cost or availability of services you currently use. We may
            introduce new pricing tiers or modify existing ones with appropriate
            notice. In the event of business restructuring, acquisition, or
            closure, there may be impacts on service availability, data
            handling, or terms of service. We will endeavor to provide adequate
            notice and transition options in such circumstances. Currency
            fluctuations, inflation, or economic conditions may affect our
            pricing or operational costs, which could result in changes to
            service fees or features. Investment in technology projects using
            our services carries inherent business risks, including project
            failure, market changes, or competitive pressures that may affect
            the success of your initiatives.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            8. Operational and Performance Risks
          </h2>
          <p className="gradient-text-body mb-4">
            The performance of our services may vary based on factors such as
            system load, network conditions, user activity levels, and
            infrastructure capacity. During periods of high demand, service
            performance may be degraded or temporarily unavailable. We implement
            monitoring and scaling mechanisms to maintain service performance,
            but there may be limitations in our ability to handle sudden spikes
            in usage or demand that could affect service availability. Human
            errors in system administration, configuration, or maintenance may
            result in service disruptions or performance issues. While we have
            procedures to minimize such risks, they cannot be eliminated
            entirely. Scheduled maintenance activities may require temporary
            suspension of services. We will endeavor to minimize the impact of
            maintenance on service availability and provide advance notice when
            possible. Geographic location and network routing may affect the
            speed and reliability of service access. Users in certain regions
            may experience higher latency or connectivity issues due to network
            infrastructure limitations.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            9. Legal and Dispute Resolution Risks
          </h2>
          <p className="gradient-text-body mb-4">
            Legal proceedings, disputes, or regulatory actions may affect our
            ability to provide services or may result in changes to our
            operations, terms of service, or business practices. The outcome of
            legal matters is inherently uncertain and may have unforeseen
            consequences. Disputes with users, partners, or third parties may
            result in legal costs, settlements, or judgments that could affect
            our financial position or operations. We maintain insurance coverage
            where appropriate, but such coverage may not be sufficient to cover
            all potential liabilities. The interpretation and enforcement of
            laws related to technology services may vary by jurisdiction and may
            change over time. Such variations may create compliance challenges
            or legal uncertainties that could affect service availability.
            Intellectual property claims or disputes may affect our ability to
            provide certain features or services. While we endeavor to avoid
            infringement of third-party rights, the risk of such claims cannot
            be entirely eliminated. International operations may be subject to
            additional legal complexities, including differences in legal
            systems, enforcement mechanisms, and dispute resolution procedures
            that may affect your rights and remedies.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            10. User Conduct and Content Risks
          </h2>
          <p className="gradient-text-body mb-4">
            Our services may be used by other users whose conduct or content may
            be inappropriate, offensive, or harmful. While we have policies and
            moderation systems in place, we cannot guarantee that all
            inappropriate content or behavior will be detected or prevented. You
            may be exposed to content or interactions that are objectionable,
            harmful, or inappropriate. We are not responsible for the conduct of
            other users or the content they post, although we reserve the right
            to remove content that violates our policies. Your own conduct while
            using our services must comply with our terms of service and
            applicable laws. Violations of these requirements may result in
            suspension or termination of your account and access to our
            services. Content you create or share through our services may be
            subject to claims of infringement, defamation, or other legal
            challenges. You are responsible for ensuring that your content
            complies with all applicable laws and does not infringe on the
            rights of others. Misuse of our services for illegal activities,
            spam, or other prohibited purposes may result in account suspension,
            legal action, or reporting to appropriate authorities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskDisclosurePage;
