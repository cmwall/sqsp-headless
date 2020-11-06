export default function Layout({ children }) {
  return (
    <div className="layout">
      {children}

      <style jsx>{`
        .layout {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
      `}</style>
    </div>
  )
}
