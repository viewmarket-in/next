/* eslint-disable @typescript-eslint/member-delimiter-style */
import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const CookiesPolicyPage = () => {
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
          <h1 className="gradient-text text-4xl font-bold">Cookies Policy</h1>
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
            1. What Are Cookies
          </h2>
          <p className="gradient-text-body mb-4">
            Cookies are small text files that are stored on your computer or
            mobile device when you visit a website. They are widely used to make
            websites work more efficiently and to provide information to the
            owners of the site. Cookies help us recognize your device and
            remember your preferences when you return to our website. Cookies
            consist of small pieces of information that are sent by a website
            and stored on your computer&apos;s hard drive or in your
            browser&apos;s cache. Each cookie is unique to your web browser and
            contains anonymous information such as a unique identifier, the
            domain from which the cookie originated, and some other information.
            Cookies can be classified in several ways, including by their
            duration (session or persistent), their origin (first-party or
            third-party), and their purpose (essential, performance,
            functionality, or advertising). We use various types of cookies to
            enhance your experience on our website and to help us understand how
            our website is used. Most web browsers automatically accept cookies,
            but you can usually modify your browser settings to decline cookies
            or to notify you when a cookie is being placed on your device.
            However, please note that disabling cookies may affect your ability
            to use certain features of our website. Cookies are not viruses or
            malware and cannot be used to execute programs or deliver viruses to
            your computer. However, like any technology, cookies can potentially
            be misused, which is why we implement appropriate security measures
            to protect your information.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            2. How We Use Cookies
          </h2>
          <p className="gradient-text-body mb-4">
            We use cookies to enhance your experience on our website, analyze
            website traffic, remember your preferences, and improve our
            services. Cookies help us understand how visitors interact with our
            website, which allows us to improve content, navigation, and
            functionality. Essential cookies are necessary for the operation of
            our website and enable basic functions such as page navigation and
            access to secure areas of the website. Without these cookies, the
            website may not function properly. Performance cookies collect
            information about how visitors use our website, such as which pages
            are visited most often and whether visitors receive error messages
            from web pages. These cookies do not collect information that
            identifies a visitor and are used solely to improve how our website
            works. Functionality cookies allow our website to remember choices
            you make, such as your username, language, or region. These cookies
            can also be used to remember changes you have made to text size,
            fonts, and other parts of web pages that you can customize.
            Advertising cookies are used to deliver advertisements that are more
            relevant to you and your interests. They are also used to limit the
            number of times you see an advertisement and to help measure the
            effectiveness of advertising campaigns.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            3. Types of Cookies We Use
          </h2>
          <p className="gradient-text-body mb-4">
            We use several types of cookies on our website, each serving a
            different purpose. Session cookies are temporary cookies that remain
            on your device until you close your browser. They are deleted when
            you close your browser and do not remain on your device after the
            browser session ends. Persistent cookies remain on your device for a
            set period of time specified in the cookie. They are activated each
            time you visit the website that created that particular cookie.
            These cookies help us recognize you as a returning user and remember
            your preferences. First-party cookies are cookies that are set by
            our website. These cookies are under our direct control and are used
            to improve your experience on our website. We have full knowledge of
            the purpose and use of these cookies. Third-party cookies are
            cookies that are set by a domain other than the one being visited by
            the user. These cookies may be used by third-party services such as
            analytics providers, social media platforms, or advertising networks
            that we use on our website. Strictly necessary cookies are essential
            for you to browse our website and use its features, such as
            accessing secure areas of the site or using our services. These
            cookies are always enabled and cannot be disabled without affecting
            the website&apos;s functionality.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            4. Specific Cookies We Use
          </h2>
          <p className="gradient-text-body mb-4">
            We use essential cookies to enable core functionality of our
            website, including user authentication, session management, and
            security features. These cookies are necessary for the proper
            operation of our services and are always active. Analytics cookies
            are used to collect information about how visitors use our website.
            We use Google Analytics and other analytics services to help us
            understand how our website is being used and to identify areas for
            improvement. These cookies collect anonymous information and do not
            identify individual users. Preference cookies allow our website to
            remember information that changes the way the website behaves or
            looks, such as your preferred language or the region that you are
            in. These cookies help personalize your experience on our website.
            Social media cookies are used to enable you to share pages and
            content that you find interesting on our website through third-party
            social networking and other websites. These cookies may also be used
            for advertising purposes. Advertising cookies are used to deliver
            advertisements that are more relevant to you and your interests.
            They are also used to limit the number of times you see an
            advertisement and to help measure the effectiveness of advertising
            campaigns.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            5. Managing and Deleting Cookies
          </h2>
          <p className="gradient-text-body mb-4">
            You can manage and delete cookies through your browser settings.
            Most web browsers allow you to control cookies through their
            settings preferences. You can set your browser to block or alert you
            about these cookies, but some parts of our website may not function
            properly. To manage cookies in your browser, you can typically find
            the cookie settings in the &quot;Privacy&quot; or
            &quot;Security&quot; section of your browser&apos;s options menu.
            The process varies depending on the browser you are using, but most
            browsers provide detailed instructions in their help sections. You
            can choose to block all cookies, but this may affect your ability to
            use certain features of our website. Some essential cookies are
            necessary for the website to function, and blocking them may result
            in limited functionality or complete inability to use our services.
            Deleting cookies from your device does not necessarily delete all
            cookie information. Some cookies may be stored on servers or in
            other locations beyond your device&apos;s cookie storage.
            Additionally, some cookies may be recreated when you revisit a
            website. You can also use browser extensions or add-ons to manage
            cookies more effectively. These tools can provide additional control
            over cookie settings and can help you block or delete cookies from
            specific websites.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            6. Third-Party Cookies
          </h2>
          <p className="gradient-text-body mb-4">
            We may use third-party services that may place cookies on your
            device when you visit our website. These third parties include
            analytics providers, social media platforms, advertising networks,
            and other service providers that help us operate our website and
            improve our services. Third-party cookies are subject to the privacy
            policies and cookie policies of the third parties that set them. We
            do not have control over these cookies and cannot access or manage
            them directly. We recommend reviewing the privacy and cookie
            policies of these third parties for more information. Analytics
            services such as Google Analytics may place cookies on your device
            to help us understand how our website is used. These cookies collect
            anonymous information about your browsing behavior and help us
            improve our website&apos;s performance and user experience. Social
            media platforms may place cookies when you interact with social
            sharing buttons or widgets on our website. These cookies may be used
            to track your browsing behavior and deliver targeted advertisements
            based on your interests. Advertising networks may place cookies to
            deliver personalized advertisements based on your browsing history
            and interests. These cookies help ensure that the advertisements you
            see are relevant to you and may limit the number of times you see
            the same advertisement.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            7. Cookie Preferences and Consent
          </h2>
          <p className="gradient-text-body mb-4">
            When you first visit our website, you may be presented with a cookie
            consent banner that allows you to manage your cookie preferences.
            You can choose to accept all cookies, reject non-essential cookies,
            or customize your preferences for different types of cookies. Your
            cookie preferences are stored in a cookie on your device, so you
            don&apos;t have to make these choices every time you visit our
            website. You can change your preferences at any time by accessing
            the cookie settings panel through a link typically found in the
            website footer. Withdrawing your consent for cookies does not delete
            cookies that have already been placed on your device. To remove
            existing cookies, you will need to delete them through your browser
            settings or use a cookie management tool. We regularly review and
            update our cookie practices to ensure compliance with applicable
            laws and regulations. If we make significant changes to our cookie
            policy, we will notify you through prominent notices on our website.
            Some cookies are strictly necessary for the operation of our website
            and cannot be disabled. These cookies do not require your consent
            and are always active when you use our services.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            8. Flash Cookies and Similar Technologies
          </h2>
          <p className="gradient-text-body mb-4">
            We may use Flash cookies (also known as Local Shared Objects or
            LSOs) to collect and store information about your use of our
            services. Flash cookies are different from browser cookies because
            of the amount of, type of, and how data is stored. Flash cookies are
            not managed through your browser settings but through the Flash
            management tools provided by Adobe. You can control Flash cookie
            settings through the Adobe Flash management tools available on
            Adobe&apos;s website. We may also use other similar technologies
            such as web beacons, pixel tags, and clear GIFs. These technologies
            are small graphic files or lines of code that are embedded in web
            pages or emails to track user behavior and collect information about
            website usage. Web beacons and similar technologies may be used in
            conjunction with cookies to track user behavior across multiple
            websites or to measure the effectiveness of email campaigns. These
            technologies help us understand how users interact with our content.
            You can control Flash cookies and similar technologies through the
            settings provided by the technology providers or by using browser
            add-ons and extensions designed to block these tracking
            technologies.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            9. Children&apos;s Privacy and Cookies
          </h2>
          <p className="gradient-text-body mb-4">
            Our services are not intended for children under the age of 13. We
            do not knowingly collect personal information from children under
            13, including through the use of cookies. If we become aware that we
            have collected personal information from a child under 13, we will
            take steps to delete such information. Parents and guardians should
            be aware that children may encounter cookies when browsing the
            internet. We recommend that parents review their children&apos;s
            online activities and educate them about cookie privacy and
            management. If you are a parent or guardian and believe that your
            child has provided us with personal information, including through
            the use of cookies, please contact us. We will take steps to verify
            the information and delete it if necessary. We encourage parents and
            guardians to monitor their children&apos;s online activities and
            teach them about protecting their personal information. We recommend
            that parents review this Cookies Policy with their children. We may
            offer services that are specifically designed for children, in which
            case we will provide additional privacy protections in accordance
            with applicable laws regarding children&apos;s privacy and cookie
            usage.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            10. Updates to This Cookies Policy
          </h2>
          <p className="gradient-text-body mb-4">
            We may update this Cookies Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. We will post the revised Cookies Policy on our
            website and update the &quot;Last updated&quot; date. We encourage
            you to review this Cookies Policy periodically to stay informed
            about how we use cookies and similar technologies. Significant
            changes to this policy will be communicated through prominent
            notices on our website or via email. Your continued use of our
            services after we post changes to this Cookies Policy constitutes
            your acceptance of those changes. If you do not agree with the
            changes, you should discontinue using our services. We will provide
            you with advance notice of material changes to this Cookies Policy,
            to the extent required by law. This may include email notifications
            or prominent notices on our website. If you have any questions or
            concerns about this Cookies Policy or our cookie practices, please
            contact us using the information provided on our website. We will
            respond to your inquiries within 30 days of receipt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicyPage;
