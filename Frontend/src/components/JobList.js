import Job from './Job';

const JobList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            {
                list.map((job)=>{
                    return <Job {...job} deletecallback={callback} />
                })
            }
        </div>
    )
}

export default JobList;