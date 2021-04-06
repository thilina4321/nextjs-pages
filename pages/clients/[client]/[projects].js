import {useRouter} from 'next/router'

const project = () => {
    const router = useRouter()
    console.log(router.query);
    return (
        <div>
            <h1> Project for the specific clients </h1>
        </div>
    )
}

export default project
