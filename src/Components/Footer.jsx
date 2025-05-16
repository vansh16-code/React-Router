
export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#eee' }}>
      <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
    </footer>
  );
}
