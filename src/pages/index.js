import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const guides = [
  {
    title: 'OMS UI Reference Guide',
    description:
      'Learn how to manage orders, returns, shipments, payments, and customer profiles using the XY Retail OMS UI.',
    link: '/docs/OMS-UI-Reference-Guide/',
    label: 'Read OMS UI Reference Guide →',
    available: true,
  },
  {
    title: 'OMS User Guide',
    description:
      'Step-by-step instructions for day-to-day OMS operations and workflows.',
    link: '#',
    label: 'Coming Soon',
    available: false,
  },
  {
    title: 'Store Operations Guide',
    description:
      'Everything store teams need to manage in-store operations, POS, and customer interactions.',
    link: '#',
    label: 'Coming Soon',
    available: false,
  },
];

export default function Home() {
  return (
    <Layout title="XY Retail Docs" description="Order Management System Documentation">
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, marginBottom: '12px' }}>
            XY Retail Docs
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '520px', lineHeight: 1.6 }}>
            Everything you need to understand, configure, and use the XY Retail platform.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '32px',
        }}>
          {guides.map((guide, i) => (
            <div key={i} style={{
              border: `2px solid ${guide.available ? '#f05a28' : '#e8e8e8'}`,
              borderRadius: '12px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              background: guide.available ? '#fff' : '#fafafa',
              opacity: guide.available ? 1 : 0.6,
            }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: guide.available ? '#111' : '#888' }}>
                {guide.title}
              </h2>
              <p style={{ color: '#666', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
                {guide.description}
              </p>
              {guide.available ? (
                <Link
                  to={guide.link}
                  style={{
                    color: '#f05a28',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    marginTop: '8px',
                  }}
                >
                  {guide.label}
                </Link>
              ) : (
                <span style={{
                  display: 'inline-block',
                  marginTop: '8px',
                  background: '#f0f0f0',
                  color: '#aaa',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  width: 'fit-content',
                }}>
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
