import './styles.css';

export const metadata = {
  title: 'Pawline – Lieblingsstücke für Hunde & Katzen',
  description: 'Stilvolle, hochwertige Produkte für Hunde und Katzen.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
