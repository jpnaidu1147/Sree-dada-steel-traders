import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    material: '',
    quantity: '',
    location: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. Our sales team will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', material: '', quantity: '', location: '', notes: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-orange">
      <h3 className="text-2xl font-bold text-steel-800 mb-6">Enquiry Form</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-steel-600 mb-1">Name</label>
          <input 
            type="text" 
            name="name" 
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-steel-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
            placeholder="Your Full Name"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-steel-600 mb-1">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-steel-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-steel-600 mb-1">Email</label>
            <input 
              type="email" 
              name="email" 
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-steel-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-steel-600 mb-1">Material Required</label>
            <select 
              name="material"
              value={formData.material}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-steel-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
            >
              <option value="">Select Material</option>
              <option value="TMT Bars">TMT Bars</option>
              <option value="MS Angles">MS Angles</option>
              <option value="MS Channels">MS Channels</option>
              <option value="MS Plates & Sheets">MS Plates & Sheets</option>
              <option value="Steel Beams">Steel Beams</option>
              <option value="Hollow Pipes & Tubes">Hollow Pipes & Tubes</option>
              <option value="Structural Steel">Structural Steel Materials</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
             <label className="block text-sm font-medium text-steel-600 mb-1">Quantity</label>
             <input 
              type="text" 
              name="quantity" 
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-steel-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
              placeholder="e.g. 10 Tons"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-steel-600 mb-1">Delivery Location</label>
          <input 
            type="text" 
            name="location" 
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-steel-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
            placeholder="Project Site / City"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-steel-600 mb-1">Additional Notes</label>
          <textarea 
            name="notes" 
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-steel-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
            placeholder="Specific grades, delivery constraints, etc."
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 mt-4"
        >
          <Send size={18} /> Submit Enquiry
        </button>
      </div>
    </form>
  );
};