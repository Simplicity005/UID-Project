// cinesphere/app/page.tsx

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '800px' }}>
      
      {/* Premium Glass Card Example */}
      <section className="glassPane" style={{ padding: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-0.05em' }}>
          Welcome to Cinesphere
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#9ca3af', lineHeight: '1.6' }}>
          Notice how the background slowly shifts and breathes behind this frosted glass pane. 
          This is the perfect foundation for a modern, high-end movie platform.
        </p>
      </section>

      {/* Another Glass Card to show layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="glassPane" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Trending Now</h3>
          <p style={{ color: '#9ca3af' }}>Movies will go here.</p>
        </div>
        <div className="glassPane" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Top Rated</h3>
          <p style={{ color: '#9ca3af' }}>TV Shows will go here.</p>
        </div>
      </div>

    </div>
  );
}