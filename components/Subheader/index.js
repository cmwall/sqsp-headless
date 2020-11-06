export default function Subheader({ children }) {
  return (
    <p>
      {children}

      <style jsx>{`
        p {
          font-size: 20px;
          text-align: center;
        }
      `}</style>
    </p>
  )
}
