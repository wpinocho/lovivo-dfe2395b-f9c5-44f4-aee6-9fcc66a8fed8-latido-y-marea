/**
 * Decorative Shapes Component
 * Adds playful geometric shapes to backgrounds inspired by Lucie Fink style
 */

interface DecorativeShapesProps {
  variant?: 'hero' | 'section' | 'subtle'
}

export const DecorativeShapes = ({ variant = 'section' }: DecorativeShapesProps) => {
  if (variant === 'hero') {
    return (
      <>
        {/* Large circle top right */}
        <div 
          className="decorative-circle"
          style={{
            width: '600px',
            height: '600px',
            background: '#e8a77c',
            top: '-200px',
            right: '-150px',
          }}
        />
        
        {/* Medium blob bottom left */}
        <div 
          className="decorative-blob"
          style={{
            width: '400px',
            height: '400px',
            background: '#b8a8c4',
            bottom: '50px',
            left: '-100px',
          }}
        />

        {/* Small accent circle */}
        <div 
          className="decorative-circle"
          style={{
            width: '200px',
            height: '200px',
            background: '#e8a77c',
            top: '40%',
            left: '10%',
          }}
        />
      </>
    )
  }

  if (variant === 'section') {
    return (
      <>
        {/* Arc shape */}
        <div 
          className="decorative-arc"
          style={{
            width: '500px',
            height: '500px',
            background: '#b8a8c4',
            top: '-250px',
            left: '-100px',
          }}
        />
        
        {/* Small circle accent */}
        <div 
          className="decorative-circle"
          style={{
            width: '150px',
            height: '150px',
            background: '#e8a77c',
            bottom: '20px',
            right: '50px',
          }}
        />
      </>
    )
  }

  // subtle
  return (
    <>
      <div 
        className="decorative-blob"
        style={{
          width: '300px',
          height: '300px',
          background: '#e8a77c',
          top: '-100px',
          right: '-80px',
        }}
      />
    </>
  )
}