import { ArtistList } from '../../constants/ArtistList'


export default function PopularList() {

    return (
        <div className=' rounded-2xl bg-b_front h-72 overflow-y-auto  overflow-x-hidden'>
        {ArtistList.map(({artist, title, id, color, cover})=>{

            return(
                <div key={id}  className='transition hover:scale-100 scale-95 hover:brightness-110  rounded-2xl hover:bg-b_primary m-5 flex w-3/4 align-middle items-center'>
                        <img className= {'min-w-fit  h-16 snap-center  rounded-2xl mr-7 '} src={cover}/>
                        <h1 className=' text-white'>{id}</h1>
                        <h1  className=' ml-8 text-white'>{title}</h1>
                        <h1  className=' ml-auto mr-8 text-secondary'>1:30</h1>
                </div>
                )
        })}
        </div>
      )
}
