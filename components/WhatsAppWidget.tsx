import React, { useState } from 'react';
import { Send, X } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const PHONE = "918904310854"; 

  const quickMessages = [
    { label: "TMT bars quote", text: "Hello, I need a quote for TMT bars." },
    { label: "Steel plates", text: "Hello, I need steel plates – size & qty?" },
    { label: "Delivery & rates", text: "Need delivery timeline & rates for MS beams." }
  ];

  const handleSendMessage = () => {
    let text = message.trim();
    if (!text) {
      text = "Hello, I'm interested in your steel products. Please share rates and availability.";
    }

    const encoded = encodeURIComponent(text);
    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    const waMe = `https://wa.me/${PHONE}?text=${encoded}`;

    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${PHONE}&text=${encoded}`;
      // Fallback for devices where custom URI scheme might not be handled immediately
      setTimeout(() => {
          window.open(waMe, '_blank');
      }, 500);
    } else {
      window.open(waMe, '_blank');
    }
    
    setIsOpen(false);
    setMessage('');
  };

  return (
    <>
      {/* Label above the button - visible when chat is closed */}
      {!isOpen && (
         <div className="fixed z-[60] bottom-24 left-6 hidden md:block">
            <div className="bg-white text-steel-900 px-4 py-2 rounded-lg shadow-xl border border-steel-100 relative">
               <span className="font-bold text-sm whitespace-nowrap">Chat With Us</span>
               {/* Arrow pointing down to the button */}
               <div className="absolute -bottom-2 left-5 w-4 h-4 bg-white transform rotate-45 border-b border-r border-steel-100"></div>
            </div>
         </div>
      )}

      {/* Floating Button - Positioned Left to avoid conflict with AI Consultant on the right */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-[60] bottom-6 left-6 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:-translate-y-1 transition-transform duration-200"
        style={{ 
          background: 'linear-gradient(135deg,#25D366,#128C7E)',
          boxShadow: '0 8px 20px rgba(0,0,0,.25)'
        }}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.304-5.252l.002-.004-.002-.002.005-.005A9.954 9.954 0 0112 2.139a9.96 9.96 0 019.955 9.955 9.965 9.965 0 01-9.904 9.691" />
        </svg>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed z-[60] bottom-24 left-6 w-[320px] max-w-[calc(100vw-32px)] bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in-up font-sans border border-gray-100">
             {/* Header */}
             <div className="p-3 flex items-center justify-between text-white" style={{ background: '#128C7E' }}>
                <div className="flex items-center gap-2">
                     <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.304-5.252l.002-.004-.002-.002.005-.005A9.954 9.954 0 0112 2.139a9.96 9.96 0 019.955 9.955 9.965 9.965 0 01-9.904 9.691" />
                    </svg>
                    <span className="font-semibold text-[15px]">Chat with us</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
                    <X size={18} />
                </button>
             </div>

             {/* Body */}
             <div className="p-4 bg-white">
                <p className="text-gray-600 text-[13px] mb-4">Hi! Tell us what you need — select a quick option or type a custom message.</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {quickMessages.map((msg, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setMessage(msg.text)}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-[13px] px-3 py-2 rounded-full transition-colors text-left"
                        >
                            {msg.label}
                        </button>
                    ))}
                </div>

                <div className="flex gap-2 items-center">
                    <input 
                        type="text" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#128C7E] focus:ring-1 focus:ring-[#128C7E]"
                    />
                    <button 
                        onClick={handleSendMessage}
                        className="bg-[#128C7E] text-white px-3 py-2 rounded-md font-semibold text-sm hover:bg-[#0e7264] transition-colors flex items-center justify-center"
                    >
                        <Send size={16} />
                    </button>
                </div>
             </div>
        </div>
      )}
    </>
  );
};