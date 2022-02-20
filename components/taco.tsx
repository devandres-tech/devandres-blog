interface ITaco {
  length: number
}

export default function Taco({ length }: ITaco) {
  return (
    <div>
      {length < 625 ? (
        <time>&#127798; 2 min read</time>
      ) : length < 2000 ? (
        <>
          <time style={{}}>&#127798;</time>
          <time style={{ paddingLeft: '6px' }}>&#127798; 5 min read</time>
        </>
      ) : length < 6000 ? (
        <>
          <time>&#127798;</time>
          <time style={{ paddingLeft: '6px' }}>&#127798;</time>
          <time style={{ paddingLeft: '6px' }}>&#127798; 8 min read</time>
        </>
      ) : length < 10000 ? (
        <>
          <time>&#127798;</time>
          <time style={{ paddingLeft: '6px' }}>&#127798;</time>
          <time style={{ paddingLeft: '6px' }}>&#127798;</time>
          <time style={{ paddingLeft: '6px' }}>&#127798; 10 min read</time>
        </>
      ) : (
        <>
          <time>&#127798;</time>
          <time style={{ paddingLeft: '6px' }}>&#127798;</time>
          <time style={{ paddingLeft: '6px' }}>&#127798;</time>
          <time style={{ paddingLeft: '6px' }}>&#127798;</time>
          <time style={{ paddingLeft: '6px' }}>&#127798; 15 min read</time>
        </>
      )}
    </div>
  )
}
