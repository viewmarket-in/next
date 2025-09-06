/* eslint-disable @typescript-eslint/member-delimiter-style */
import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="gradient-text text-4xl font-bold">Disclaimer</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="mb-6 text-lg">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            1. General Disclaimer
          </h2>
          <p className="mb-4">
            The information provided on this website and through our services is
            for general informational purposes only. While we endeavor to keep
            the information up to date and correct, we make no representations
            or warranties of any kind, express or implied, about the
            completeness, accuracy, reliability, suitability, or availability
            with respect to the website or the information, products, services,
            or related graphics contained on the website for any purpose. Any
            reliance you place on such information is therefore strictly at your
            own risk. We shall not be liable for any loss or damage including
            without limitation, indirect or consequential loss or damage, or any
            loss or damage whatsoever arising from loss of data or profits
            arising out of, or in connection with, the use of this website or
            our services. Through our website, you may be able to link to other
            websites which are not under our control. We have no control over
            the nature, content, and availability of those sites. The inclusion
            of any links does not necessarily imply a recommendation or endorse
            the views expressed within them. Every effort is made to keep the
            website operational. However, we take no responsibility for, and
            will not be liable for, the website being temporarily unavailable
            due to technical issues beyond our control. The materials on our
            website are provided on an &apos;as is&apos; basis. We make no
            warranties, expressed or implied, and hereby disclaim and negate all
            other warranties including, without limitation, implied warranties
            or conditions of merchantability, fitness for a particular purpose,
            or non-infringement of intellectual property or other violation of
            rights.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            2. Professional Advice Disclaimer
          </h2>
          <p className="mb-4">
            The content on our website and within our services is not intended
            to be, and should not be construed as, professional advice. While we
            strive to provide accurate and helpful information, the content is
            not intended to be a substitute for professional advice from
            qualified experts in the relevant field. Before making any decisions
            based on information provided through our services, you should seek
            appropriate professional advice. This includes, but is not limited
            to, legal, financial, medical, or technical advice. Reliance on any
            information provided by us is solely at your own risk. We recommend
            consulting with qualified professionals regarding any specific
            questions you may have about your situation. The use of any
            information provided by us does not create a professional
            relationship between you and us. We are not responsible for any
            errors or omissions in the information provided, nor for any actions
            taken based on such information. The accuracy and completeness of
            the information is not guaranteed. This disclaimer applies to all
            content on our website, including blog posts, documentation,
            tutorials, and any other materials provided through our services.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            3. Third-Party Content Disclaimer
          </h2>
          <p className="mb-4">
            Our website and services may contain content provided by third
            parties, including but not limited to user-generated content,
            comments, testimonials, and materials from external sources. We do
            not endorse or verify the accuracy of such content and make no
            representations or warranties regarding its quality, reliability, or
            suitability for any purpose. Third-party content is the sole
            responsibility of the individuals or entities that provide it. We
            are not responsible for any errors or omissions in third-party
            content, nor for any loss or damage of any kind incurred as a result
            of the use of such content. We reserve the right to remove, edit, or
            modify any third-party content at our sole discretion without
            notice. We do not guarantee continuous availability or accuracy of
            third-party content. By using our services, you acknowledge that you
            may be exposed to third-party content that is offensive, harmful,
            inaccurate, or otherwise objectionable. We are not liable for any
            harm caused by such content. If you believe that any third-party
            content violates this disclaimer or infringes upon your rights,
            please contact us immediately so that we can investigate and take
            appropriate action.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            4. Product and Service Disclaimer
          </h2>
          <p className="mb-4">
            Our products and services are provided &quot;as is&quot; and
            &quot;as available&quot; without any warranties of any kind, either
            express or implied. We do not warrant that our products or services
            will meet your requirements, operate uninterrupted or error-free, or
            that defects will be corrected. We make no warranty as to the
            results that may be obtained from the use of our products or
            services or as to the accuracy or reliability of any information
            produced by our services. You acknowledge that the operation of our
            products and services may be affected by numerous factors beyond our
            control, including but not limited to internet connectivity,
            hardware failures, software bugs, and third-party service
            interruptions. We are not responsible for any damages, direct or
            indirect, that may result from the use of our products or services,
            including but not limited to loss of data, business interruption, or
            loss of profits. The performance and functionality of our products
            and services may change over time as we update and improve them. We
            do not guarantee that future versions will maintain the same
            features or functionality as current versions.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            5. Limitation of Liability
          </h2>
          <p className="mb-4">
            To the fullest extent permitted by applicable law, we shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, including without limitation, loss of profits,
            data, use, goodwill, or other intangible losses, resulting from your
            access to or use of, or inability to access or use, our services. In
            no event shall our total liability to you for all damages exceed the
            amount paid by you, if any, for accessing or using our services
            during the twelve months immediately preceding the event giving rise
            to the claim. Some jurisdictions do not allow the exclusion or
            limitation of certain damages, so the above limitation and
            exclusions may not apply to you. In such cases, our liability will
            be limited to the fullest extent permitted by law. These limitations
            of liability apply regardless of the legal theory upon which the
            claim is based, including contract, tort (including negligence),
            strict liability, or any other theory. Nothing in this disclaimer
            shall exclude or limit our liability for fraud, death, or personal
            injury caused by our negligence, or any other liability that cannot
            be excluded or limited by applicable law.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            6. Intellectual Property Disclaimer
          </h2>
          <p className="mb-4">
            All content, features, and functionality on our website and within
            our services, including but not limited to text, graphics, logos,
            icons, images, audio clips, digital downloads, data compilations,
            and software, are the exclusive property of our company or its
            licensors and are protected by international copyright, trademark,
            patent, trade secret, and other intellectual property or proprietary
            rights laws. Nothing in this disclaimer grants you any right to use
            our trademarks, logos, or other proprietary information without our
            express written permission. Any unauthorized use of our intellectual
            property is strictly prohibited. We respect the intellectual
            property rights of others and expect users of our services to do the
            same. If you believe that your work has been copied in a way that
            constitutes copyright infringement, please contact us. We may, in
            appropriate circumstances and at our discretion, terminate the
            accounts of users who infringe the intellectual property rights of
            others. The presence of third-party trademarks, trade names, service
            marks, or logos on our website does not constitute or imply our
            endorsement, authorization, or sponsorship of those third parties or
            their products or services.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            7. External Links Disclaimer
          </h2>
          <p className="mb-4">
            Our website may contain links to external websites that are not
            provided or maintained by, or in any way affiliated with, our
            company. These links are provided for your convenience only and do
            not constitute an endorsement by us of those linked websites or
            their content. We have no control over the content, privacy
            policies, or practices of any third-party websites or services. You
            acknowledge and agree that we shall not be responsible or liable,
            directly or indirectly, for any damage or loss caused or alleged to
            be caused by or in connection with the use of or reliance on any
            such content, goods, or services available on or through any such
            websites or services. When you access a third-party website through
            a link on our website, you do so at your own risk and subject to the
            terms and conditions of use and privacy policies of that third-party
            website. We recommend reviewing the terms of use and privacy
            policies of any third-party websites you visit through links on our
            website before providing any personal information or engaging in any
            transactions. We reserve the right to remove any links to
            third-party websites at any time without notice. The inclusion of
            any link does not imply endorsement or affiliation with the linked
            website or its operators.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            8. User-Generated Content Disclaimer
          </h2>
          <p className="mb-4">
            Our services may allow users to submit, post, upload, publish, or
            otherwise make available content, including but not limited to text,
            photographs, audio, video, and other materials. You are solely
            responsible for any user-generated content that you submit through
            our services. We do not pre-screen user-generated content, although
            we reserve the right to remove or modify any content at our sole
            discretion without notice. We do not endorse any user-generated
            content or any opinion, recommendation, or advice expressed therein.
            By submitting user-generated content, you represent and warrant that
            you have all necessary rights to do so and that your content does
            not violate any laws, regulations, or third-party rights. You retain
            ownership of your user-generated content, but by submitting it, you
            grant us a non-exclusive, worldwide, royalty-free, sublicensable,
            and transferable license to use, reproduce, distribute, prepare
            derivative works of, display, and perform your content in connection
            with our services. We are not responsible for any errors or
            omissions in user-generated content or for any loss or damage of any
            kind incurred as a result of the use of such content.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            9. Testimonials Disclaimer
          </h2>
          <p className="mb-4">
            Testimonials and endorsements provided on our website represent the
            personal opinions and experiences of the individuals who submitted
            them. These testimonials may not be representative of the typical
            experience of users of our services. We do not claim, and you should
            not assume, that the results described in testimonials will be
            achieved by all users. Individual results may vary based on numerous
            factors, including but not limited to individual circumstances,
            effort, and market conditions. Testimonials may have been received
            in exchange for compensation, products, or services. While we strive
            to present honest testimonials, we cannot guarantee their accuracy
            or completeness. We are not responsible for any decisions you make
            based on testimonials provided on our website. You should conduct
            your own research and consult with appropriate professionals before
            making any decisions. We reserve the right to use testimonials for
            marketing and promotional purposes and may edit them for clarity,
            length, or other reasons without altering their fundamental meaning.
          </p>

          <h2 className="gradient-text mb-4 mt-12 text-2xl font-semibold">
            10. Updates to This Disclaimer
          </h2>
          <p className="mb-4">
            We reserve the right to update or modify this disclaimer at any time
            without prior notice. Any changes will be effective immediately upon
            posting the revised disclaimer on our website. Your continued use of
            our services after any such changes constitutes your acceptance of
            the revised disclaimer. We encourage you to review this disclaimer
            periodically to stay informed of any changes. If we make material
            changes to this disclaimer, we will notify you by email or through a
            prominent notice on our website. However, we are not obligated to
            provide such notice for non-material changes. If any provision of
            this disclaimer is held to be invalid or unenforceable, the
            remaining provisions will continue in full force and effect. This
            disclaimer constitutes the entire agreement between you and us
            regarding the use of our services and supersedes any prior or
            contemporaneous communications and proposals, whether oral or
            written, between you and us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
