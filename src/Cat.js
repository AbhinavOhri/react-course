import { useGetCat } from "./useGetCat"

export const Cat = () => {
    const {data, isCatLoading, refetchData} = useGetCat();

    if(isCatLoading) return <h1>Loading...</h1>
    return (
        <div>
            <button onClick={refetchData}>Refetch</button>
            <h1>{catData?.fact}</h1>
        </div>
    )
}