import { motion } from 'framer-motion'

const contacts = [
  {
    title: 'GitHub',
    value: 'github.com/almyrneto',
    href: 'https://github.com/almyrneto',
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/almyrfreiman-dev',
    href: 'https://linkedin.com/in/almyrfreiman-dev',
  },
  {
    title: 'Email',
    value: 'almyr_neto@hotmail.com',
    href: 'mailto:almyr_neto@hotmail.com',
  },
  {
    title: 'WhatsApp',
    value: 'Vamos conversar',
    href: 'https://wa.me/21983124024',
  },
]

export function Contact() {
  return (
    <section className="section contactSection" id="contact">
      <motion.div
        className="sectionHeader"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>Contato</span>

        <h2>Vamos construir algo incrível juntos.</h2>
      </motion.div>

      <div className="contactGrid">
        <motion.div
          className="contactPanel"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Disponível para novos desafios</h3>

          <p>
            Tenho experiência em desenvolvimento fullstack, sistemas
            administrativos, integrações, automações e aplicações web modernas.
          </p>

          <p>
            Se você procura alguém que entende produto, negócio e tecnologia,
            vamos conversar.
          </p>
        </motion.div>

        <div className="contactCards">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              className="contactCard"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <small>{contact.title}</small>
              <strong>{contact.value}</strong>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}