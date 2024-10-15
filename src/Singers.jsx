export default function Singers({singer}){
    console.log(singer)
    return(
        <>
            <p>name: {singer.name}</p>
            <p>Age: {singer.age}</p>
            <hr></hr>
        </>
    )
}