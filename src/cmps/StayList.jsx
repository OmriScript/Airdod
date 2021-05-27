import { StayPreview } from './StayPreview.jsx';

export function StayList({ stays }) {
    return (
        <section className="stay-list flex">
            {console.log('stays', stays)}
            {stays.map(stay => {
                return <StayPreview stay={stay} key={stay._id} />
            })}
        </section>
    )
}

 
