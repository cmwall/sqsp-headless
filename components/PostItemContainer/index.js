export default function PostItemContainer({ children }) {
  return (
    <div>
      {children}

      <style jsx>{`
        @media (min-width: 1020px) {
          div {
            margin-top: 150px;
          }
        }
      `}</style>
    </div>
  )
}
