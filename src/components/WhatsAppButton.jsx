const PHONE = '919989783404';
const MESSAGE = encodeURIComponent(
  "Hello, May I Know More About FlexCoders! "
);

export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        @keyframes waSlideIn {
          0% { transform: translateX(120px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(125, 194, 66, 0.4); }
          50% { box-shadow: 0 4px 35px rgba(125, 194, 66, 0.7), 0 0 0 8px rgba(125, 194, 66, 0.1); }
        }
        .wa-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 999;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 50px;
          background: linear-gradient(135deg, #7DC242, #6aad36);
          color: #fff;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          box-shadow: 0 4px 20px rgba(125, 194, 66, 0.4);
          animation: waSlideIn 0.6s ease-out, waPulse 2.5s ease-in-out 1s infinite;
          transition: all 0.3s ease;
        }
        .wa-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 8px 30px rgba(125, 194, 66, 0.5);
          animation: none;
        }
        @media (max-width:768px) {
          .wa-btn { right: 20px; bottom: 20px; }
        }
        @media (max-width:576px) {
          .wa-btn { padding: 10px 16px; font-size: 0.85rem; gap: 8px; right: 16px; bottom: 20px; }
          .wa-btn i { font-size: 1.1rem !important; }
        }
        @media (max-width:480px) {
          .wa-btn { padding: 8px 14px; font-size: 0.8rem; gap: 6px; right: 12px; bottom: 16px; }
          .wa-btn i { font-size: 1rem !important; }
        }
      `}</style>
      <a
        href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp" style={{ fontSize: '1.3rem' }}></i>
        Chat with us
      </a>
    </>
  );
}
