import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const NewsLetter = () => {
  const [numPages, setNumPages] = useState(null);
  const [viewSize, setViewSize] = useState({ width: 450, height: 630 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      
      if (w < 768) { // Mobile
        setViewSize({ width: w * 0.85, height: (w * 0.85) * 1.4 });
      } else if (w < 1024) { // Tablet
        setViewSize({ width: 380, height: 530 });
      } else { // Desktop
        setViewSize({ width: 450, height: 630 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.container}>
      {/* Header Design */}
      <div style={styles.header}>
        <h1 style={styles.title}>INNOVISTA <span style={styles.edition}>EDITION-1</span></h1>
        <p style={styles.subtitle}>KSRCE NEO Official Newsletter</p>
      </div>

      {/* Magazine Viewer Container */}
      <div style={styles.viewerWrapper}>
        <Document 
          file="/newsletter.pdf" 
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<div style={styles.loader}>Unfolding your story...</div>}
        >
          {numPages && (
            <HTMLFlipBook 
              width={viewSize.width} 
              height={viewSize.height}
              size="fixed"
              showCover={true}
              usePortrait={isMobile}
              mobileScrollSupport={true}
              className="magazine-shadow"
            >
              {[...Array(numPages).keys()].map((pNum) => (
                <div key={pNum} style={styles.pageFrame}>
                  <Page 
                    pageNumber={pNum + 1} 
                    width={viewSize.width} 
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                  <div style={styles.pageNumberIndicator}>{pNum + 1}</div>
                </div>
              ))}
            </HTMLFlipBook>
          )}
        </Document>
      </div>

      {/* Floating Instructions */}
      <div style={styles.footerInfo}>
        {isMobile ? "Swipe to Read" : "Click corner or drag to flip pages"}
      </div>
    </div>
  );
};

// Advanced CSS-in-JS Styles
const styles = {
  container: {
    background: 'radial-gradient(circle, #2c3e50 0%, #000000 100%)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 10px',
    color: 'white',
    fontFamily: "'Poppins', sans-serif",
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    marginTop: '45px',
    letterSpacing: '3px',
    fontWeight: '800',
    background: 'linear-gradient(to right, #fff, #bdc3c7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  
  subtitle: {
    color: '#95a5a6',
    marginTop: '5px',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
  },
  viewerWrapper: {
    position: 'relative',
    padding: '15px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  },
  pageFrame: {
    backgroundColor: '#fff',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  pageNumberIndicator: {
    position: 'absolute',
    bottom: '10px',
    right: '15px',
    color: '#999',
    fontSize: '12px',
  },
  footerInfo: {
    marginTop: '30px',
    padding: '10px 20px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '30px',
    fontSize: '0.8rem',
    letterSpacing: '1px',
  },
  loader: {
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    letterSpacing: '2px',
    animate: 'pulse 2s infinite',
  }
};

export default NewsLetter;