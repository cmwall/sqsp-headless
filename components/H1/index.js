export default function H1({ children }) {
  return (
    <h1>
      {children}

      <style jsx>{`
        h1 {
          font-size: 30px;
          text-align: center;
          max-width: 20em;
          margin: 50px auto 30px;
        }

        @media (min-width: 1020px) {
          h1 {
            font-size: 50px;
          }
        }
      `}</style>
    </h1>
  )
}
