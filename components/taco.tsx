interface ITaco {
  length: number
}

export default function Taco({ length }: ITaco) {
  return (
    <div>
      {length < 625 ? (
        <time style={{ paddingLeft: '6px' }}>&#127790; 2 min read</time>
      ) : length < 2000 ? (
        <>
          <time style={{ paddingLeft: '6px' }}>&#127790;</time>
          <time style={{ paddingLeft: '6px' }}>&#127790; 5min read</time>
        </>
      ) : length < 4000 ? (
        <>
          <time style={{ paddingLeft: '6px' }}>&#127790;</time>
          <time style={{ paddingLeft: '6px' }}>&#127790;</time>
          <time style={{ paddingLeft: '6px' }}>&#127790; 8 min read</time>
        </>
      ) : length < 6000 ? (
        <>
          <time style={{ paddingLeft: '6px' }}>&#127790;</time>
          <time style={{ paddingLeft: '6px' }}>&#127790;</time>
          <time style={{ paddingLeft: '6px' }}>&#127790;</time>
          <time style={{ paddingLeft: '6px' }}>&#127790; 12min read</time>
        </>
      ) : (
        <>
          <time style={{ paddingLeft: '6px' }}>&#127790;</time>
          <time style={{ paddingLeft: '6px' }}>&#127790;</time>
          <time style={{ paddingLeft: '6px' }}>&#127790;</time>
          <time style={{ paddingLeft: '6px' }}>&#127790;</time>
          <time style={{ paddingLeft: '6px' }}>&#127790; 20min read</time>
        </>
      )}
    </div>
  )
}
