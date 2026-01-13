import Section from "@/components/ui/Section";
export default function Info() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <p className="text-muted-foreground mb-8">
          Last updated: January 13, 2026
        </p>
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Information We Collect
            </h2>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                When you request early access or use our platform, we collect
                information you provide directly, including your name, email
                address, phone number (optional), artist name, social media
                profiles, and previous distribution history.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We may also collect technical information such as browser type,
                device information, and usage patterns to improve our services.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              How We Use Your Information
            </h2>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                Your information is used to evaluate early access requests,
                communicate with you about our services, and provide
                personalized support throughout your distribution journey.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We analyze aggregated data to improve our platform, develop new
                features, and enhance the artist experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your contact information may be used to send important updates
                about your releases, earnings, and platform changes.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Data Protection &amp; Security
            </h2>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your
                personal information from unauthorized access, alteration, or
                disclosure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All data transmissions are encrypted using SSL/TLS protocols.
                Access to personal data is restricted to authorized personnel
                only.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We regularly review and update our security practices to
                maintain the highest standards of data protection.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Data Sharing &amp; Third Parties
            </h2>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, rent, or trade your personal information to
                third parties for marketing purposes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your data may be shared with trusted service providers who
                assist in operating our platform, subject to strict
                confidentiality agreements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We may disclose information when required by law or to protect
                the rights, property, or safety of LEGAL BABY, our users, or
                others.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Your Rights &amp; Choices
            </h2>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal
                information at any time by contacting us.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You may opt out of non-essential communications while still
                receiving important service-related updates.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Upon request, we will provide a copy of all personal data we
                hold about you in a portable format.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Data Retention
            </h2>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to
                provide our services and fulfill the purposes outlined in this
                policy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you request deletion of your account, we will remove your
                data within 30 days, except where retention is required by law.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Contact Us
            </h2>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                For any privacy-related inquiries, concerns, or requests, please
                contact us at support@legalbabydistribution.com.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to addressing your concerns promptly and
                transparently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
