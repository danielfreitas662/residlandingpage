import Track from '../track/track';
import styles from './contact.module.scss';
function Contact({ content }: { content: any }) {
  return (
    <>
      <Track title={content('track1.title')} text={content('track1.text')} />
      <div className={styles.contact}>
        <div className={styles.form}>
          <h4>{content('form.title')}</h4>
          <form>
            <input placeholder="E-mail" required type="email" />
            <input placeholder={content('form.phone')} required />
            <textarea placeholder={content('form.message')} rows={5} required />
            <button type="submit">{content('form.send')}</button>
          </form>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1453.417557650038!2d-35.20666163870563!3d-5.917205084915714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2f9160967c09b%3A0x72cf1b6668ab2f85!2sResid!5e0!3m2!1spt-BR!2sbr!4v1682989765414!5m2!1spt-BR!2sbr"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default Contact;
