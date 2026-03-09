const ContactMap = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Visit Our Campus</h2>
          <p className="text-gray-600">Find us at United International University</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-gray-200">
          <iframe
            src="https://maps.google.com/maps?q=23.7982,90.4499&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="UIU Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
