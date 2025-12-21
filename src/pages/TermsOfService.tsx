import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service for Corteza.app</h1>
          <p className="text-muted-foreground mb-8">
            <strong>Last Updated:</strong> December 13, 2024 | <strong>Effective Date:</strong> December 13, 2024
          </p>

          <hr className="border-border my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to Corteza.app ("the Service," "we," "our," or "us").
            </p>
            <p className="text-muted-foreground mb-4">
              By installing, accessing, or using Corteza.app in your Slack workspace, you ("you," "your," or "User") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not install or use the Service.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">These Terms constitute a legally binding agreement between you and:</strong>
            </p>
            <div className="bg-secondary/50 p-4 rounded-lg mb-4">
              <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Service Provider:</strong> Cristian Tumani</p>
              <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Email:</strong> cristiantumani@gmail.com</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Service Name:</strong> corteza.app</p>
            </div>
            <p className="text-muted-foreground">
              If you are using the Service on behalf of an organization or company, you represent and warrant that you have the authority to bind that organization to these Terms, and "you" refers to that organization.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground mb-4">corteza.app is a Slack application that helps teams:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Log decisions</strong> made during meetings and discussions</li>
              <li><strong className="text-foreground">Organize decisions</strong> by type (product, UX, technical), tags, and Jira epics</li>
              <li><strong className="text-foreground">Analyze meeting transcripts</strong> using AI to automatically extract and suggest decisions</li>
              <li><strong className="text-foreground">View and manage decisions</strong> through a web-based dashboard</li>
              <li><strong className="text-foreground">Integrate with Jira</strong> to link decisions to epics and add comments to tickets</li>
            </ul>
            <p className="text-muted-foreground">
              The Service is currently provided <strong className="text-foreground">free of charge</strong> during our beta period. We reserve the right to introduce pricing or subscription plans in the future (see Section 9).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Account Registration and Workspace Installation</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">3.1 Slack Workspace Installation</h3>
            <p className="text-muted-foreground mb-2">To use the Service, you must:</p>
            <ol className="list-decimal pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Have a Slack workspace with appropriate permissions to install apps</li>
              <li>Install Corteza.app through Slack's OAuth flow</li>
              <li>Grant the requested permissions (scopes) necessary for the Service to function</li>
            </ol>

            <h3 className="text-xl font-medium text-foreground mb-3">3.2 Workspace Administrator Responsibilities</h3>
            <p className="text-muted-foreground mb-2">By installing the Service, you (as the workspace administrator) acknowledge:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>You have the authority to install third-party applications in your Slack workspace</li>
              <li>You consent to the collection and processing of data as described in our Privacy Policy</li>
              <li>You are responsible for ensuring your team members understand how the Service works</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">3.3 User Accounts</h3>
            <p className="text-muted-foreground mb-2">Individual users do not create separate accounts. Access is managed through:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Slack authentication:</strong> Users are authenticated through their Slack workspace membership</li>
              <li><strong className="text-foreground">Workspace isolation:</strong> Each workspace's data is isolated from other workspaces (multi-tenancy)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Responsibilities and Acceptable Use</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">4.1 Your Responsibilities</h3>
            <p className="text-muted-foreground mb-2">You agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Provide accurate information</strong> when logging decisions</li>
              <li><strong className="text-foreground">Use the Service lawfully</strong> and in compliance with all applicable laws</li>
              <li><strong className="text-foreground">Protect your Slack workspace credentials</strong> and not share access with unauthorized parties</li>
              <li><strong className="text-foreground">Respect intellectual property rights</strong> when uploading transcripts or logging decisions</li>
              <li><strong className="text-foreground">Not upload malicious content</strong> (viruses, malware, spam)</li>
              <li><strong className="text-foreground">Comply with your organization's policies</strong> regarding data sharing and tool usage</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">4.2 Acceptable Use Policy</h3>
            <p className="text-muted-foreground mb-2">You agree NOT to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Use the Service to store or transmit illegal, harmful, or offensive content</li>
              <li>Upload transcripts containing sensitive personal information (SSNs, credit card numbers, health records) unless you have proper authorization</li>
              <li>Attempt to reverse engineer, decompile, or hack the Service</li>
              <li>Use the Service to spam, harass, or abuse other users</li>
              <li>Violate any applicable laws, including data protection and privacy laws</li>
              <li>Circumvent any security features or access controls</li>
              <li>Use the Service to compete with us or build a similar product</li>
              <li>Overload our servers with excessive API requests or automated scripts</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">4.3 Content Responsibility</h3>
            <p className="text-muted-foreground mb-2">You are solely responsible for:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>The accuracy and legality of all decisions, transcripts, and content you submit</li>
              <li>Ensuring you have the right to upload and process meeting transcripts</li>
              <li>Obtaining necessary consents from meeting participants before uploading transcripts</li>
              <li>Complying with your organization's data handling and confidentiality policies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">5.1 Service Ownership</h3>
            <p className="text-muted-foreground mb-4">
              corteza.app, including all software, code, design, features, and documentation, is owned by Cristian Tumani and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-muted-foreground mb-2">You are granted a limited, non-exclusive, non-transferable, revocable license to use the Service for its intended purpose. You may not:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Copy, modify, or create derivative works of the Service</li>
              <li>Sell, rent, lease, or sublicense access to the Service</li>
              <li>Remove or alter any copyright, trademark, or proprietary notices</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">5.2 Your Content</h3>
            <p className="text-muted-foreground mb-4">
              You retain all ownership rights to the content you submit to the Service (decisions, transcripts, comments, etc.).
            </p>
            <p className="text-muted-foreground mb-2">By using the Service, you grant us a <strong className="text-foreground">limited, worldwide, non-exclusive license</strong> to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Store, process, and display your content to provide the Service</li>
              <li>Use your content to improve AI features (e.g., training accuracy based on approved/rejected suggestions)</li>
              <li>Create anonymized, aggregated analytics (with no personally identifiable information)</li>
            </ul>
            <p className="text-muted-foreground mb-4">This license terminates when you delete your content or uninstall the Service.</p>

            <h3 className="text-xl font-medium text-foreground mb-3">5.3 Feedback</h3>
            <p className="text-muted-foreground">
              If you provide feedback, suggestions, or ideas about the Service, we may use that feedback without any obligation to compensate you. You grant us a perpetual, irrevocable, worldwide license to use such feedback.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Third-Party Services and Integrations</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">6.1 Slack</h3>
            <p className="text-muted-foreground mb-2">
              The Service operates within the Slack platform. Your use of Slack is governed by Slack's Terms of Service and Privacy Policy.
            </p>
            <p className="text-muted-foreground mb-2">We are not responsible for:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Slack's availability, performance, or changes to their API</li>
              <li>Any issues caused by Slack's platform</li>
              <li>Changes to Slack's pricing or policies that affect your ability to use the Service</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">6.2 Jira Integration</h3>
            <p className="text-muted-foreground mb-2">If you choose to integrate with Jira:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>You must have valid Jira credentials and appropriate permissions</li>
              <li>Your use of Jira is governed by Atlassian's Terms</li>
              <li>We fetch publicly available Jira data based on the epic keys you provide</li>
              <li>We are not responsible for Jira's availability or changes to their API</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">6.3 AI Processing (Anthropic Claude)</h3>
            <p className="text-muted-foreground mb-2">Meeting transcripts you upload are processed by Anthropic's Claude API. By uploading transcripts, you consent to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Anthropic processing your transcript text according to their Privacy Policy</li>
              <li>The possibility that AI suggestions may be inaccurate and require human review</li>
              <li>Your responsibility to review and approve AI suggestions before saving them</li>
            </ul>
            <p className="text-muted-foreground mb-2"><strong className="text-foreground">We are not liable for:</strong></p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Inaccuracies in AI-generated suggestions</li>
              <li>Anthropic's API availability or performance</li>
              <li>Changes to Anthropic's pricing or policies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Service Availability and Modifications</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">7.1 Service Availability</h3>
            <p className="text-muted-foreground mb-2">We strive to provide reliable service, but we do not guarantee:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">100% uptime:</strong> The Service may experience downtime for maintenance, updates, or unforeseen issues</li>
              <li><strong className="text-foreground">Error-free operation:</strong> Software may contain bugs or errors</li>
              <li><strong className="text-foreground">Compatibility:</strong> Future updates to Slack, Jira, or other platforms may affect functionality</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">7.2 Maintenance and Updates</h3>
            <p className="text-muted-foreground mb-2">We reserve the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Perform scheduled maintenance (we will try to notify you in advance)</li>
              <li>Make updates, improvements, or changes to features</li>
              <li>Add, modify, or remove features at any time</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">7.3 Service Modifications</h3>
            <p className="text-muted-foreground mb-2">We may modify the Service at any time, including:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Adding new features or functionality</li>
              <li>Changing how existing features work</li>
              <li>Deprecating or removing features</li>
            </ul>
            <p className="text-muted-foreground">We will make reasonable efforts to notify you of material changes via Slack message or email.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data and Privacy</h2>
            <p className="text-muted-foreground mb-4">
              Your privacy is important to us. Our collection, use, and protection of your data is governed by our <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
            </p>
            <p className="text-muted-foreground mb-4">By using the Service, you consent to our data practices as described in the Privacy Policy.</p>
            <p className="text-muted-foreground mb-2"><strong className="text-foreground">Key Points:</strong></p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>We collect data necessary to provide the Service</li>
              <li>Your data is stored securely using encryption</li>
              <li>Each workspace's data is isolated (multi-tenancy)</li>
              <li>You can request data export or deletion at any time</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Pricing and Payment Terms</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">9.1 Current Pricing</h3>
            <p className="text-muted-foreground mb-4">
              The Service is currently provided <strong className="text-foreground">free of charge</strong> during our beta period.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3">9.2 Future Pricing</h3>
            <p className="text-muted-foreground mb-2">We reserve the right to introduce paid subscription plans or usage-based pricing in the future. If we introduce pricing:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>We will provide at least <strong className="text-foreground">30 days' advance notice</strong> before charging any fees</li>
              <li>Existing users may be grandfathered into a free tier or offered special pricing</li>
              <li>You will have the option to continue using a free tier (if available) or upgrade to a paid plan</li>
              <li>You may uninstall the Service before pricing takes effect if you do not wish to pay</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">9.3 Refund Policy</h3>
            <p className="text-muted-foreground mb-2">Once paid plans are introduced:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Subscription fees are generally non-refundable</li>
              <li>If you are dissatisfied with the Service, contact us within 14 days for a possible refund</li>
              <li>We will consider refund requests on a case-by-case basis</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Data Backup and Loss</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">10.1 Our Backup Practices</h3>
            <p className="text-muted-foreground mb-2">We maintain regular automated backups of your data to prevent loss. However, you are responsible for:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Maintaining your own backups of critical decisions</li>
              <li>Exporting your data periodically (you can request a data export)</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">10.2 Limitation of Liability for Data Loss</h3>
            <p className="text-muted-foreground mb-2">
              <strong className="text-foreground">WE ARE NOT LIABLE FOR DATA LOSS OR CORRUPTION.</strong> While we implement reasonable backup practices, we cannot guarantee that your data will never be lost due to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Technical failures</li>
              <li>Cyberattacks</li>
              <li>Natural disasters</li>
              <li>Human error</li>
            </ul>
            <p className="text-muted-foreground">
              <strong className="text-foreground">You assume the risk of data loss.</strong> We strongly recommend maintaining your own backups of critical information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Termination</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">11.1 Termination by You</h3>
            <p className="text-muted-foreground mb-2">You may terminate your use of the Service at any time by:</p>
            <ol className="list-decimal pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Uninstalling Corteza.app from your Slack workspace</li>
              <li>Requesting deletion of all your data by emailing us</li>
            </ol>
            <p className="text-muted-foreground mb-2">Upon termination:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Your access to the Service will end immediately</li>
              <li>Your data will be deleted within 30 days (unless we are required to retain it for legal reasons)</li>
              <li>Some data may remain in backups for up to 90 days</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">11.2 Termination by Us</h3>
            <p className="text-muted-foreground mb-2">We reserve the right to suspend or terminate your access to the Service immediately, without notice, if:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>You violate these Terms of Service</li>
              <li>You engage in prohibited activities (Section 4.2)</li>
              <li>We are required to do so by law</li>
              <li>We decide to discontinue the Service</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">11.3 Effect of Termination</h3>
            <p className="text-muted-foreground mb-2">Upon termination, all provisions of these Terms that by their nature should survive will survive, including:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Intellectual property rights</li>
              <li>Disclaimers and limitations of liability</li>
              <li>Indemnification obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Disclaimers and Limitation of Liability</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">12.1 No Warranty</h3>
            <p className="text-muted-foreground mb-2 uppercase font-medium">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Merchantability:</strong> No guarantee the Service is fit for your particular purpose</li>
              <li><strong className="text-foreground">Non-infringement:</strong> We do not warrant that the Service does not infringe third-party rights</li>
              <li><strong className="text-foreground">Accuracy:</strong> AI suggestions may be inaccurate and require human review</li>
              <li><strong className="text-foreground">Reliability:</strong> No guarantee of error-free, uninterrupted, or secure operation</li>
              <li><strong className="text-foreground">Data integrity:</strong> No guarantee against data loss or corruption</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">12.2 Limitation of Liability</h3>
            <p className="text-muted-foreground mb-2 uppercase font-medium">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, CRISTIAN TUMANI SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Indirect, incidental, special, or consequential damages</strong> arising from your use of the Service</li>
              <li><strong className="text-foreground">Loss of profits, revenue, data, or business opportunities</strong></li>
              <li><strong className="text-foreground">Costs of procuring substitute services</strong></li>
              <li><strong className="text-foreground">Damages resulting from:</strong> Unauthorized access to or alteration of your data; Statements or conduct of any third party on the Service; Any other matter relating to the Service</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">MAXIMUM LIABILITY:</strong> In no event shall our total liability to you for all damages exceed the amount you paid us in the past 12 months, or $100 USD, whichever is greater.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability for incidental or consequential damages, so the above limitations may not apply to you.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Indemnification</h2>
            <p className="text-muted-foreground mb-2">
              You agree to <strong className="text-foreground">indemnify, defend, and hold harmless</strong> Cristian Tumani and the Service from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Your use or misuse of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights, including intellectual property or privacy rights</li>
              <li>Content you submit to the Service (decisions, transcripts, comments)</li>
              <li>Your violation of any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. Dispute Resolution</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">14.1 Governing Law</h3>
            <p className="text-muted-foreground mb-4">
              These Terms are governed by applicable laws, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3">14.2 Informal Resolution</h3>
            <p className="text-muted-foreground mb-4">
              Before filing a legal claim, you agree to try to resolve the dispute informally by contacting us at cristiantumani@gmail.com. We will attempt to resolve the dispute within 30 days.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3">14.3 Arbitration (Optional - U.S. Only)</h3>
            <p className="text-muted-foreground mb-2">
              If you are located in the United States, any disputes that cannot be resolved informally shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association (AAA).
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Arbitration will be conducted remotely or at a mutually agreed location</li>
              <li>Each party will bear their own costs and attorneys' fees</li>
              <li>The arbitrator's decision is final and binding</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">You may opt out of arbitration</strong> by emailing us within 30 days of agreeing to these Terms.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3">14.4 Jurisdiction (Non-U.S. or if Arbitration Waived)</h3>
            <p className="text-muted-foreground">
              If arbitration does not apply, you agree to submit to the exclusive jurisdiction of the appropriate courts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">15. General Provisions</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">15.1 Entire Agreement</h3>
            <p className="text-muted-foreground mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and us regarding the Service and supersede all prior agreements.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3">15.2 Severability</h3>
            <p className="text-muted-foreground mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3">15.3 No Waiver</h3>
            <p className="text-muted-foreground mb-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3">15.4 Assignment</h3>
            <p className="text-muted-foreground mb-4">
              You may not assign or transfer these Terms or your rights under them without our prior written consent. We may assign these Terms to any successor or affiliate without your consent.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3">15.5 Force Majeure</h3>
            <p className="text-muted-foreground mb-2">We are not liable for any failure or delay in performance due to circumstances beyond our reasonable control, including:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Acts of God (natural disasters, pandemics)</li>
              <li>War, terrorism, civil unrest</li>
              <li>Government actions or regulations</li>
              <li>Internet or telecommunications failures</li>
              <li>Cyberattacks or hacking incidents</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">15.6 Relationship of the Parties</h3>
            <p className="text-muted-foreground">
              These Terms do not create any partnership, joint venture, employment, or agency relationship between you and us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">16. Changes to These Terms</h2>
            <p className="text-muted-foreground mb-2">We may update these Terms from time to time to reflect:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Changes to the Service or features</li>
              <li>Legal or regulatory requirements</li>
              <li>Business practices</li>
            </ul>
            <p className="text-muted-foreground mb-2">When we make changes:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>We will update the "Last Updated" date at the top of these Terms</li>
              <li>For material changes, we will notify you via Slack message or email at least 30 days before the changes take effect</li>
              <li>Your continued use of the Service after changes take effect constitutes acceptance of the new Terms</li>
              <li>If you do not agree to the changes, you must stop using the Service and uninstall the app</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">17. Contact Information</h2>
            <p className="text-muted-foreground mb-4">If you have any questions, concerns, or disputes regarding these Terms, please contact us:</p>
            <div className="bg-secondary/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Service Provider:</strong> Cristian Tumani</p>
              <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Email:</strong> cristiantumani@gmail.com</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Response Time:</strong> We aim to respond within 48 hours for general inquiries.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">18. Acknowledgment</h2>
            <p className="text-muted-foreground mb-2 uppercase font-medium">
              BY INSTALLING, ACCESSING, OR USING CORTEZA.APP, YOU ACKNOWLEDGE THAT:
            </p>
            <ol className="list-decimal pl-6 text-muted-foreground mb-4 space-y-1">
              <li>You have read and understood these Terms of Service</li>
              <li>You agree to be bound by these Terms</li>
              <li>You have the authority to enter into this agreement</li>
              <li>You understand that the Service is provided "as is" without warranties</li>
              <li>You accept the limitations of liability described in these Terms</li>
            </ol>
            <p className="text-muted-foreground font-medium">
              If you do not agree to these Terms, you must not install or use the Service.
            </p>
          </section>

          <hr className="border-border my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Appendix: Key Definitions</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li><strong className="text-foreground">"Service"</strong> or <strong className="text-foreground">"Corteza.app"</strong>: The Slack application and web dashboard described in these Terms</li>
              <li><strong className="text-foreground">"You"</strong> or <strong className="text-foreground">"User"</strong>: The individual or organization using the Service</li>
              <li><strong className="text-foreground">"We"</strong> or <strong className="text-foreground">"Us"</strong>: Cristian Tumani, the service provider</li>
              <li><strong className="text-foreground">"Workspace"</strong>: A Slack workspace where the Corteza.app is installed</li>
              <li><strong className="text-foreground">"Content"</strong>: Any data, text, files, or information you submit to the Service</li>
              <li><strong className="text-foreground">"Personal Data"</strong>: Information that identifies you or your users, as defined in our Privacy Policy</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default TermsOfService;