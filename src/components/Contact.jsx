import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2affa834-a487-494e-9077-267bdf633deb",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting the form! Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-900 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">[ Communication Channel ]</div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">Contact & Connect</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Info Column */}
          <div className="md:w-1/3 space-y-6">
            <p className="text-sm text-zinc-400 leading-relaxed">
              If you want to discuss a project, job opportunities, or code collaborations, send a message. I usually reply within 24 hours.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: <Mail size={16} />, text: "omkh4242@gmail.com", label: "Email" },
                { icon: <MapPin size={16} />, text: "Nandurbar, India", label: "Location" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 border border-zinc-800 bg-zinc-900/10">
                  <div className="text-zinc-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{item.label}</div>
                    <div className="text-xs text-zinc-300 font-mono font-medium">{item.text}</div>
                  </div>
                </div> 
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs p-3 focus:outline-none focus:border-zinc-500 font-mono"
                    placeholder="Enter name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs p-3 focus:outline-none focus:border-zinc-500 font-mono"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Your Message</label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs p-3 focus:outline-none focus:border-zinc-500 font-mono"
                  placeholder="Enter message body"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-white text-black font-semibold text-xs tracking-wider uppercase transition-colors hover:bg-zinc-200 flex items-center justify-center gap-2"
              >
                <span>{isSubmitting ? 'Submitting...' : 'Send Message'}</span>
                <Send size={12} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
