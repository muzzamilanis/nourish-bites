import { site, whatsappLink } from '../data/site'

export default function WhatsAppButton() {
  return (
    <a
      className="wa"
      href={whatsappLink(`Hi ${site.name}! I want to order.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 3.5A11 11 0 0 0 2.1 16.7L1 23l6.5-1.1A11 11 0 0 0 20.5 3.5zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-3.8.6.6-3.7-.2-.3A9 9 0 1 1 12 20.5zm5-6.7c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.1-.2a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4.1 5.4 5.4 0 0 0 3.3.8 2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c0-.2-.2-.3-.5-.4z" />
      </svg>
    </a>
  )
}
