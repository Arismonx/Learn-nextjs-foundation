import styles from './Styles.module.css'

export default function BlogLayout({
children,
}: {
    children: React.ReactNode
}) {
    return <section className={styles.font}>{children}</section>
}