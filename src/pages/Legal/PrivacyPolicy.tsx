import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p>
                The Ministry of Commerce and Industry (MOCI) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you voluntarily provide</li>
                <li><strong>Device Information:</strong> Browser type, IP address, operating system, and device identifiers</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, and navigation patterns</li>
                <li><strong>Cookies:</strong> Information stored through cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Use of Your Information</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process your transactions and send related information</li>
                <li>Email you regarding updates, news, and services</li>
                <li>Fulfill and manage your requests for services</li>
                <li>Generate a personal profile about you</li>
                <li>Increase the efficiency and operation of the site</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Notify you of updates to the site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Disclosure of Your Information</h2>
              <p>We may share information we have collected about you in certain situations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>By Law or to Protect Rights:</strong> If required by law or to protect our rights</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with vendors, consultants, and service providers</li>
                <li><strong>Business Transfers:</strong> Your information may be transferred as part of a merger or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Ministry of Commerce and Industry</strong><br />
                Email: privacy@moci.gov.qa<br />
                Phone: +974 4412 3456
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Changes to This Privacy Policy</h2>
              <p>
                We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting to the website.
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-12">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

