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
<<<<<<< HEAD

 
=======
>>>>>>> 39c09b98a21fbc2c7dc4b6992eac5381c4aa54c3
