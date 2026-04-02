import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Navigation, Calendar, Users, Car, Bus, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

/**
 * EnquiryForm – shared across Contact, Home, Vehicles pages.
 *
 * Props:
 *  - prefillVehicleType   {string}  e.g. "Tempo Traveller"
 *  - prefillSeating       {string}  e.g. "14"
 *  - compact              {bool}    smaller styling for inline use
 *  - onClose              {func}    optional – called after successful submit
 */
const PHONE_NUMBER = "916369284551";

const VEHICLE_TYPES = ["Car", "Tempo Traveller", "Bus"];
const SEATING_OPTIONS = ["4", "7", "14", "18", "22", "26", "30", "52"];
const TRIP_TYPES = ["One Way", "Round Trip"];

function buildWhatsAppMessage(f) {
  return `Hello INAI Travels,

I would like to enquire about vehicle booking.

Name: ${f.name}
Phone: ${f.phone}

Trip Details:
Pickup Location: ${f.pickup}
Drop Location: ${f.drop}
Travel Date: ${f.date}
Number of Days Required: ${f.numberOfDays || '1'}
Trip Type: ${f.tripType}

Vehicle Requirement:
Type: ${f.vehicleType}
Seating Capacity: ${f.seating} Seater
Number of Passengers: ${f.passengers}

Please share availability and quotation.`;
}

const EnquiryForm = ({ prefillVehicleType = '', prefillSeating = '', compact = false, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    vehicleType: prefillVehicleType || 'Car',
    seating: prefillSeating || '4',
    passengers: '',
    numberOfDays: '',
    tripType: 'One Way',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Re-sync if prop changes (e.g., user clicks a different vehicle)
  useEffect(() => {
    if (prefillVehicleType) setForm(f => ({ ...f, vehicleType: prefillVehicleType }));
    if (prefillSeating)     setForm(f => ({ ...f, seating: prefillSeating }));
  }, [prefillVehicleType, prefillSeating]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(err => ({ ...err, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim())  errs.name  = 'Name is required';
    if (!form.phone.trim()) errs.phone = 'Phone is required';
    else if (!/^\d{7,15}$/.test(form.phone.replace(/\s+/g, ''))) errs.phone = 'Enter a valid phone number';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const message = buildWhatsAppMessage(form);
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setSubmitted(true);
    if (onClose) setTimeout(onClose, 1200);
  };

  const fieldStyle = {
    width: '100%',
    padding: '0.95rem 1rem',
    border: '1.5px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    transition: '0.25s',
    background: '#f8fafc',
    color: '#111827',
    appearance: 'none',
    WebkitAppearance: 'none',
  };
  const errorStyle = { color: '#dc2626', fontSize: '0.8rem', marginTop: '0.3rem', fontWeight: 600 };
  const labelStyle = {
    display: 'flex', alignItems: 'center', gap: '0.4rem',
    marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.88rem',
    color: '#002147', textTransform: 'uppercase', letterSpacing: '0.5px'
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <WhatsAppIcon size={56} style={{ color: '#25D366', marginBottom: '1.5rem' }} />
        <h3 style={{ fontSize: '1.8rem', color: '#002147', marginBottom: '1rem' }}>Redirecting to WhatsApp!</h3>
        <p style={{ color: '#4B5563', fontSize: '1.1rem' }}>Your booking details have been prepared. Complete the enquiry on WhatsApp for a quick response.</p>
      </div>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .eq-field:focus {
          outline: none;
          border-color: #002147 !important;
          background: white !important;
          box-shadow: 0 0 0 4px rgba(0,33,71,0.07);
        }
        .eq-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23002147'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 18px;
          padding-right: 2.5rem;
        }
        .eq-error-field { border-color: #dc2626 !important; }
        @media (max-width: 640px) {
          .eq-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}} />

      <form onSubmit={handleSubmit} noValidate>
        {/* Row 1: Name + Phone */}
        <div className="eq-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
          <div>
            <label style={labelStyle}><Phone size={13} /> Name *</label>
            <input
              type="text" name="name" className={`eq-field ${errors.name ? 'eq-error-field' : ''}`}
              style={fieldStyle} placeholder="Your Full Name" value={form.name} onChange={handleChange}
            />
            {errors.name && <p style={errorStyle}>{errors.name}</p>}
          </div>
          <div>
            <label style={labelStyle}><Phone size={13} /> Phone *</label>
            <input
              type="tel" name="phone" className={`eq-field ${errors.phone ? 'eq-error-field' : ''}`}
              style={fieldStyle} placeholder="e.g. 9876543210" value={form.phone} onChange={handleChange}
            />
            {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
          </div>
        </div>

        {/* Row 2: Pickup + Drop */}
        <div className="eq-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
          <div>
            <label style={labelStyle}><Navigation size={13} /> Pickup Location</label>
            <input type="text" name="pickup" className="eq-field" style={fieldStyle}
              placeholder="e.g. Coimbatore, Railway Station" value={form.pickup} onChange={handleChange} />
          </div>
          <div>
            <label style={labelStyle}><MapPin size={13} /> Drop Location</label>
            <input type="text" name="drop" className="eq-field" style={fieldStyle}
              placeholder="e.g. Ooty, Chennai" value={form.drop} onChange={handleChange} />
          </div>
        </div>

        {/* Row 3: Date + Number of Days */}
        <div className="eq-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
          <div>
            <label style={labelStyle}><Calendar size={13} /> Travel Date</label>
            <input type="date" name="date" className="eq-field" style={fieldStyle} value={form.date} onChange={handleChange} />
          </div>
          <div>
            <label style={labelStyle}><Calendar size={13} /> No. of Days Required</label>
            <input type="number" name="numberOfDays" className="eq-field" style={fieldStyle}
              placeholder="e.g. 2" min="1" max="365" value={form.numberOfDays} onChange={handleChange} />
          </div>
        </div>

        {/* Row 3b: Trip Type */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={labelStyle}><Navigation size={13} /> Trip Type</label>
          <select name="tripType" className="eq-field eq-select" style={fieldStyle} value={form.tripType} onChange={handleChange}>
            {TRIP_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Row 4: Vehicle Type + Seating */}
        <div className="eq-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
          <div>
            <label style={labelStyle}><Car size={13} /> Vehicle Type</label>
            <select name="vehicleType" className="eq-field eq-select" style={fieldStyle} value={form.vehicleType} onChange={handleChange}>
              {VEHICLE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label style={labelStyle}><Bus size={13} /> Seating Capacity</label>
            <select name="seating" className="eq-field eq-select" style={fieldStyle} value={form.seating} onChange={handleChange}>
              {SEATING_OPTIONS.map(s => <option key={s} value={s}>{s} Seater</option>)}
            </select>
          </div>
        </div>

        {/* Row 5: Number of Passengers */}
        <div style={{ marginBottom: '2rem' }}>
          <label style={labelStyle}><Users size={13} /> Number of Passengers</label>
          <input type="number" name="passengers" className="eq-field" style={fieldStyle}
            placeholder="e.g. 6" min="1" max="60" value={form.passengers} onChange={handleChange} />
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', padding: '1.3rem', fontSize: '1.15rem', fontWeight: 900, justifyContent: 'center', borderRadius: '14px' }}>
          <WhatsAppIcon size={24} style={{ marginRight: '10px' }} />
          SEND ENQUIRY VIA WHATSAPP
          <Send size={20} style={{ marginLeft: '10px' }} />
        </button>
        <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.82rem', color: '#6B7280' }}>
          * You'll be redirected to WhatsApp with all details pre-filled.
        </p>
      </form>
    </>
  );
};

export default EnquiryForm;
export { PHONE_NUMBER, VEHICLE_TYPES, SEATING_OPTIONS, TRIP_TYPES, buildWhatsAppMessage };
