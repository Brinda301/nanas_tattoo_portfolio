export default function Contact() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Contact</h1>
        <p>Feel free to reach out to Nana for inquiries or appointments.</p>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded p-2"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded p-2"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border rounded p-2"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Send
          </button>
        </form>
      </div>
    );
  }